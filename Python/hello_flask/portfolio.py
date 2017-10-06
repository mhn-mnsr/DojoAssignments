from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    html_string = "<h1> Hello, World </h1>"
    html_string1 = "<h2> My name is Maheen</h2>"
    return html_string + html_string1

@app.route('/portfolio')
def portfolio ():
    my_projects = "<h2>My Projects</h2>"
    list_of_projects = "<ul><li>My trip</li><li>Chicago Life</li></ul>"
    return my_projects + list_of_projects

@app.route('/about/<person>')
def about (person):
    about_me = "<p>I am 21 years old and learning how to code</p>"
    return about_me
app.run(debug=True)