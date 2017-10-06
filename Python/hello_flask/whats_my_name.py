from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')
def index():
    return render_template("whats_my_name.html")

@app.route('/process', methods=['POST'])
def create_user():
    print request.form
    name = request.form['name']
    return redirect('/')
app.run(debug=True)