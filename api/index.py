import os
from flask import Flask, send_from_directory

app = Flask(__name__, static_folder='infinitron-react/build')

@app.route('/')
def home():
    return send_from_directory(app.static_folder, 'index.html')


@app.route('/about')
def about():
    return 'About'