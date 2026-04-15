document.addEventListener('DOMContentLoaded', () => {
    const DB_NAME = 'PBSSDFreshAuthDB';
    const STORE_NAME = 'users';
    let db;

    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = (e) => {
        db = e.target.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
            db.createObjectStore(STORE_NAME, { keyPath: 'email' });
        }
    };
    request.onsuccess = (e) => { db = e.target.result; };

    document.getElementById('regPhoto')?.addEventListener('change', function (e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (ev) => {
                const preview = document.getElementById('pfpPreview');
                preview.src = ev.target.result;
                preview.style.display = 'inline-block';
            };
            reader.readAsDataURL(file);
        }
    });

    document.getElementById('userRegisterForm')?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const photoFile = document.getElementById('regPhoto').files[0];
        let photoBase64 = '';
        if (photoFile) {
            photoBase64 = await new Promise(r => {
                const reader = new FileReader();
                reader.onload = (ev) => r(ev.target.result);
                reader.readAsDataURL(photoFile);
            });
        }

        const user = {
            name: document.getElementById('regName').value,
            email: document.getElementById('regEmail').value,
            phone: document.getElementById('regPhone').value,
            location: document.getElementById('regLocation').value,
            password: document.getElementById('regPass').value,
            photo: photoBase64
        };

        const tx = db.transaction([STORE_NAME], 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        const addReq = store.add(user);
        addReq.onsuccess = () => {
            Swal.fire({ icon: 'success', title: 'Success!', text: 'Account created. Please sign in.' });
            toggleAuth('login');
        };
        addReq.onerror = () => Swal.fire({ icon: 'error', title: 'Error', text: 'Email already exists.' });
    });

    document.getElementById('userLoginForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const pass = document.getElementById('loginPass').value;

        if (email === 'admin@pbssd.com' && pass === 'My_admin@444') {
            localStorage.setItem('pbssd_user', JSON.stringify({ name: 'Admin', role: 'admin' }));
            window.location.href = '/';
            return;
        }

        const tx = db.transaction([STORE_NAME], 'readonly');
        const store = tx.objectStore(STORE_NAME);
        const getReq = store.get(email);
        getReq.onsuccess = () => {
            const user = getReq.result;
            if (user && user.password === pass) {
                localStorage.setItem('pbssd_user', JSON.stringify({ name: user.name, email: user.email, photo: user.photo }));
                window.location.href = '/';
            } else {
                Swal.fire({ icon: 'error', title: 'Failed', text: 'Invalid credentials.' });
            }
        };
    });
});