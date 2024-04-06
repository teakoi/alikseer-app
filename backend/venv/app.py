from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import requests
import json
import os

app = Flask(__name__)
CORS(app)

products = [
 {
 "id": 1,
 "name": "Product 1",
 "description": "Description for Product 1",
 "price": 10.99,
 "image": 'images/product1.png'
 },
 {
 "id": 2,
 "name": "Product 2",
 "description": "Description for Product 2",
 "price": 20.99,
 "image": 'images/product2.jpg'
 },
 {
 "id": 3,
 "name": "Product 3",
 "description": "Description for Product 3",
 "price": 10.99,
 "image": 'images/product3.jpg'
 },
 {
 "id": 4,
 "name": "Product 4",
 "description": "Description for Product 4",
 "price": 10.99,
 "image": 'images/product4.jpg'
 },
 {
 "id": 5,
 "name": "Product 5",
 "description": "Description for Product 5",
 "price": 10.99,
 "image": 'images/product5.jpg'
 },
 {
 "id": 6,
 "name": "Product 6",
 "description": "Description for Product 6",
 "price": 10.99,
 "image": 'images/product6.jpg'
 },
 {
 "id": 7,
 "name": "Product 7",
 "description": "Description for Product 7",
 "price": 10.99,
 "image": 'images/product7.jpg'
 },
 {
 "id": 8,
 "name": "Product 8",
 "description": "Description for Product 8",
 "price": 10.99,
 "image": 'images/product8.jpg'
 },
 {
 "id": 9,
 "name": "Product 9",
 "description": "Description for Product 9",
 "price": 10.99,
 "image": 'images/product9.jpg'
 },
 {
 "id": 10,
 "name": "Product 10",
 "description": "Description for Product 10",
 "price": 10.99,
 "image": 'images/product10.jpg'
 }
]

# Fetch user data from the provided URL
def fetch_user_data():
    response = requests.get('https://jsonplaceholder.typicode.com/users')
    if response.status_code == 200:
        return response.json()
    else:
        return None

def fetch_products():
    return jsonify(products)






# Initialize empty list to store users
users = fetch_user_data() or []

# User Signup API endpoint
@app.route('/api/signup', methods=['POST'])
def register_user():
    # Extract username, password, and email from request body
    data = request.json
    username = data.get('username')
    password = data.get('password')
    email = data.get('email')

    # Check if username already exists
    if any(user['username'] == username for user in users):
        return jsonify({'error': 'Username already exists'}), 400

    # Add user to the list
    users.append({'username': username, 'password': password, 'email': email})
    return jsonify({'message': 'User registered successfully'}), 201

# User Authentication API endpoint
@app.route('/api/login', methods=['POST'])
def login_user():
    # Extract username and password from request body
    data = request.json
    username = data.get('username')
    password = data.get('password')

    # Check if the user exists and the password matches
    user = next((user for user in users if user['username'] == username and user['password'] == password), None)

    if user:
        # Redirect user to the Product page (you can replace 'product' with the actual URL)
        return redirect(url_for('../src/component/Productpage.js'))
    else:
        return jsonify({'error': 'Incorrect username or password'}), 401

@app.route('/products', methods =['GET'])
@app.route('/products/<int:product_id>', methods =['GET'])
def get_products(product_id = None):
    products = load_products()
    if product_id is None:
        # Return all products wrapped in an object with a ' products ' key
        return jsonify({"products": products})
    else:
        product = next((p for p in products if p ['id'] == product_id) , None )

    return jsonify (product) if product else (' ' , 404)

if __name__ == '__main__':
    app.run(debug=True)
