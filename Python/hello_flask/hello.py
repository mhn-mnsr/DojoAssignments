from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    html_string = "<h1> Hello, World </h1>"
    html_string1 = "<h2> My name is Maheen</h2>"
    return html_string + html_string1

@app.route('/hello/<person>')
def hello_person(person):
    return "Hello " + person

@app.route('/Building/<Persons>')
def Building_my_website(Persons):
    return Persons + ' Amazing Website'
app.run(debug=True)