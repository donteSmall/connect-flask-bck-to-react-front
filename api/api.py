from flask import Flask

app = Flask(__name__)

@app.route('/api', methods = ['GET'])
def api():

    return {
        'userID':1,
        'title': 'Falsk React Appliation',
        'completed': False
    }