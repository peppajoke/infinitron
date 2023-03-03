import os
from flask import Flask, send_from_directory

app = Flask(__name__, static_folder='../infinitron-react/build')

@app.route('/')
def home():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/<path:path>')
def send_report(path):
    return send_from_directory('build', path)

@app.route('/about')
def about():
    return 'About'

if __name__ == '__main__':
    app.run(use_reloader=True, port=5000, threaded=True)