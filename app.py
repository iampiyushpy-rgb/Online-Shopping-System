from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    # This is "Dummy Data" so you can see the CSS/JS working
    sample_products = [
        {'id': 1, 'name': 'MacBook Air M1', 'price': '70,000', 'image': 'product1.jpg'},
        {'id': 2, 'name': 'iPhone 15', 'price': '65,000', 'image': 'product2.jpg'},
        {'id': 3, 'name': 'AirPods Pro', 'price': '20,000', 'image': 'product3.jpg'}
    ]
    return render_template('index.html', products=sample_products)

if __name__ == '__main__':
    app.run(debug=True, port=5000)