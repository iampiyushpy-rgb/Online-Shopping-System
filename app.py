from flask import Flask, render_template, request, redirect, url_for, flash
from db_config import get_db_connection

app = Flask(__name__)
app.secret_key = 'pbssd_ecommerce_secret' # Required for session-based flash messages

@app.route('/')
def index():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM products")
    products = cursor.fetchall()
    cursor.close()
    conn.close()
    return render_template('index.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/admin/login')
def admin_login():
    return render_template('admin_login.html')

@app.route('/admin')
def admin_dashboard():
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM products")
    products = cursor.fetchall()
    # Debug line: This will show you exactly what keys are in your dictionary
    print(f"DEBUG: First product keys: {products[0].keys() if products else 'No products found'}")
    cursor.close()
    conn.close()
    return render_template('admin.html', products=products)

@app.route('/admin/add', methods=['GET', 'POST'])
def add_product():
    if request.method == 'POST':
        name = request.form.get('name')
        description = request.form.get('description')
        price = request.form.get('price')
        stock = request.form.get('stock')
        image_url = request.form.get('image_url')
        
        seller_id = 1 # Placeholder: replace with session['user_id'] once auth is implemented

        conn = get_db_connection()
        cursor = conn.cursor()
        query = "INSERT INTO products (seller_id, name, description, price, stock, image_url) VALUES (%s, %s, %s, %s, %s, %s)"
        cursor.execute(query, (seller_id, name, description, price, stock, image_url))
        conn.commit()
        cursor.close()
        conn.close()
        
        flash('Product added successfully!', 'success')
        return redirect(url_for('admin_dashboard'))
    
    return render_template('add_product.html')

@app.route('/payment')
def payment_gateway():
    return render_template('payment_gateway.html')
@app.route('/cart')
def cart():
    return render_template('cart.html')

if __name__ == '__main__':
    app.run(debug=True, port=5001)