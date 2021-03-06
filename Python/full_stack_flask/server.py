from flask import Flask, render_template, redirect, request
# import the Connector function
from mysqlconnection import MySQLConnector
import datetime
app = Flask(__name__)
# connect and store the connection in "mysql" note that you pass the database name to the function
mysql = MySQLConnector(app, 'mydb')
# an example of running a query
print mysql.query_db("SELECT * FROM friends")

@app.route('/')
def index():
    friends = mysql.query_db("SELECT * FROM friends")
    return render_template('index.html', friends = friends)

@app.route('/create_friend', methods=['POST'])
def create_friend():
    name = request.form['name']
    age = request.form['age']
    created_at = datetime.datetime.now()
    mysql.query_db("INSERT INTO friends (name, age, created_at)VALUES ('{}', '{}', '{}')".format(name,age,created_at))
    print name, age
    return redirect('/')


app.run(debug=True