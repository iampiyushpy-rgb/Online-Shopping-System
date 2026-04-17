document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('sellerRegistrationForm');
    const submitBtn = document.getElementById('sellerSubmitBtn');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            submitBtn.disabled = true;
            const originalBtnText = submitBtn.innerText;
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Processing...';

            const sellerName = document.getElementById('sellerName').value.trim();
            const shopName = document.getElementById('shopName').value.trim();
            const aadharNumber = document.getElementById('aadharNumber').value.trim();
            const gstNumber = document.getElementById('gstNumber').value.trim();
            const contactInfo = document.getElementById('contactInfo').value.trim();
            const shopLocation = document.getElementById('shopLocation').value.trim();
            
            const photoInput = document.getElementById('sellerPhoto');
            let photoBase64 = null;

            if (photoInput.files && photoInput.files[0]) {
                try {
                    photoBase64 = await readFileAsDataURL(photoInput.files[0]);
                } catch (error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error reading photo',
                        text: 'Please try uploading the photo again.'
                    });
                    resetBtn(submitBtn, originalBtnText);
                    return;
                }
            }

            const sellerData = {
                id: 'SLLR_' + Date.now().toString(),
                sellerName,
                shopName,
                aadharNumber,
                gstNumber,
                contactInfo,
                shopLocation,
                sellerPhoto: photoBase64,
                registeredAt: new Date().toISOString(),
                status: 'Pending Verification'
            };

            const request = indexedDB.open('PBSSDSellerDB', 1);

            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                if (!db.objectStoreNames.contains('sellers')) {
                    db.createObjectStore('sellers', { keyPath: 'id' });
                }
            };

            request.onsuccess = (event) => {
                const db = event.target.result;
                const transaction = db.transaction(['sellers'], 'readwrite');
                const store = transaction.objectStore('sellers');

                const addRequest = store.add(sellerData);

                addRequest.onsuccess = () => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Application Submitted!',
                        text: 'Your registration has been successfully saved to the local database. We will review it shortly.',
                        confirmButtonColor: '#5A8A5A'
                    });
                    form.reset();
                    resetBtn(submitBtn, originalBtnText);
                };

                addRequest.onerror = () => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Submission Failed',
                        text: 'There was an issue saving your application. Please try again.',
                        confirmButtonColor: '#e11d48'
                    });
                    resetBtn(submitBtn, originalBtnText);
                };
                
                transaction.oncomplete = () => {
                    db.close();
                };
            };

            request.onerror = () => {
                Swal.fire({
                    icon: 'error',
                    title: 'Database Error',
                    text: 'Unable to connect to the local database.',
                    confirmButtonColor: '#e11d48'
                });
                resetBtn(submitBtn, originalBtnText);
            };
        });
    }

    function resetBtn(btn, text) {
        btn.disabled = false;
        btn.innerText = text;
    }

    function readFileAsDataURL(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = () => reject(reader.error);
            reader.readAsDataURL(file);
        });
    }
});
