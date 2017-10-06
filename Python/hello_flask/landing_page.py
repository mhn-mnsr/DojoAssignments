from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')
def index():
    return render_template("index_lp.html", phrase= 'Greetings')


@app.route('/ninjas')
def ninjas():
    return render_template("ninjas.html")


@app.route('/dojos/new')
def create_new_dojos(): 
    return render_template("dojos.html")


@app.route('/form_submit', methods=['POST'])
def create_user():
    print "Got to the post route"
    name = request.form['name']
    email = request.form['email']       
    return redirect('/dojos/new')
app.run(debug=True)
