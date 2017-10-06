from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('dojo_survey.html')

@app.route('/process', methods=['POST'])
def create_user():
    print request.form
    name = request.form['name']
    DojoLocation = request.form['location']
    FavoriteLanguage = request.form['language']
    textarea = request.form['comment']
    return render_template('survey_result.html', **locals())

# @app.route('/form_result')
# def form_display():
#     print request.form
#     return render_template('/process')

app.run(debug=True)