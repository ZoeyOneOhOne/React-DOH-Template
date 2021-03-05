from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "mssql+pyodbc://cmp:cmpstg@T20DOHB05L03996\\SQLEXPRESS/outdoorsign?driver=ODBC Driver 17 for SQL Server"
db = SQLAlchemy(app)

@app.route('/api', methods=['GET'])
def index():
    return {
        'name': 'What up!'
    }

@app.route('/<string:name>')
def hello_world(name):
    return f'Hello, {name}'

if __name__ == '__main__':
    app.run(debug=True);