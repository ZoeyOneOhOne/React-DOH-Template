from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
from flask import jsonify


app = Flask(__name__)
app.config['MAIL_SERVER'] = "10.200.146.27"
app.config['MAIL_PORT'] = 25
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
# app.config["SQLALCHEMY_DATABASE_URI"] = create_engine("mssql+pyodbc://EXECUTIVE/DOHCovidAppSrv:!~&5HfTF4l@dotb6gisdbst01/Covid19?driver=ODBC+Driver+17+for+SQL+Server")
# "mssql+pyodbc://EXECUTIVE/DOHCovidAppSrv:!~&5HfTF4l@dotb6gisdbst01/Covid19?driver=ODBC+Driver+17+for+SQL+Server?Trusted_Connection=yes"
# sqlcon = create_engine("mssql+pyodbc://EXECUTIVE/DOHCovidAppSrv:!~&5HfTF4l@dotb6gisdbst01/Covid19?driver=ODBC+Driver+17+for+SQL+Server")
#app.config["SQLALCHEMY_DATABASE_URI"] = "mssql+pyodbc://EXECUTIVE\\DOHCovidAppSrv:!~&5HfTF4l@dotb6gisdbst01/Covid19?driver=ODBC+Driver+17+for+SQL+Server?Trusted_Connection=yes"
app.config["SQLALCHEMY_DATABASE_URI"] = "mssql+pyodbc://localhost/Covid19?driver=ODBC+Driver+17+for+SQL+Server?trusted_connection=yes"
db = SQLAlchemy(app)

class Case_Log(db.Model):
    ID = db.Column(db.Integer, primary_key=True)
    Name = db.Column(db.String(50))
    Phone1 = db.Column(db.String(50))
    OrgNumber = db.Column(db.Integer)
    DateOfTest = db.Column(db.String(50))
    DateOfExposure = db.Column(db.String(50))
    NumberOfExposed = db.Column(db.Integer)
    Notes = db.Column(db.String(225))
    PathToFile = db.Column(db.String(50))

    def __repr__(self):
        return  f'{self.ID} {self.Name}'

def case_log_serializer(Case_Log):
    return{
        'ID' : Case_Log.ID,
        'Name' : Case_Log.Name
    }


@app.route('/api', methods=['GET'])
def index():
    case_logs = Case_Log.query.all()
    return jsonify([*map(case_log_serializer, Case_Log.query.all())])

@app.route('/apiCall2', methods=['GET'])
def alsoIndex():
    return {
        'name': 'Jim Donaghue'
    }

@app.route('/<string:name>')
def hello_world(name):
    return f'Hello, {name}'

if __name__ == '__main__':
    db.create_all()
    app.run(debug=True);