from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/data-endpoint', methods=['GET'])
def get_data():
    data = {
        'message': 'Hello from the server!',
        'timestamp': '2024-09-03T00:00:00Z'
    }
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
