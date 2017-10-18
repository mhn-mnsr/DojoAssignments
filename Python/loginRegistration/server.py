from flask import Flask, render_template, redirect, request, flash
# import the Connector function
from mysqlconnection import MySQLConnector
import datetime
import time #possible delete later
app = Flask(__name__)
app.secret_key= 'KeepItSecretKeepItSafe'

mysql = MySQLConnector(app, 'mydb')

print mysql.query_db("SELECT * FROM logreg")

@app.route('/')
def index():
    all_logreg = mysql.query_db("SELECT * FROM logreg")
    return render_template('index.html', logreg=all_logreg)

@app.route('/process', methods=["POST"])
def registration():
    username = request.form ['username']
    # check if password matches = re.match(validation check)
    first_name = request.form ['first_name']
    last_name = request.form ['last_name']
    password = request.form ['password']
    password_conf = request.form ['password'] #danger here?
    # delare a success to be true
    if (len(request.form['first_name'])< 2 and ['first_name'].isalpha()):
        flash("First Name must be more than 2 characters long")
        return redirect ('/')
    # check if len of first name email orlast name is < 1, do a flash check
    # if all true make success false
    # char.isdigit check (to not allow numbers in email field)
    # check len of password, flash message
    # password needs to eqal conf passwird
    # if success, 
    # hash the paswords
    # if users password is encryoted, store the user in session

app.run(debug=True)