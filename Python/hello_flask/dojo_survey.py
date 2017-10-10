from flask import Flask, render_template, request, redirect, flash, session
app = Flask(__name__)
app.secret_key = 'KeepItSecretKeepItSafe'

@app.route('/')
def index():
    return render_template('dojo_survey.html')

@app.route('/process', methods=['POST'])
def create_user():
    print request.form
    name = request.form['name']
    if len(request.form['name']) < 1:
        flash("Name cannot be empty!")
        return redirect('/')
    else:
        flash("Success! Your name is {}".format(request.form['name']))
    DojoLocation = request.form['location']
    FavoriteLanguage = request.form['language']
    textarea = request.form['comment']
    if len(request.form['comment']) > 120:
        flash("Comments too long!")
        return redirect('/')
    return render_template('survey_result.html', name = name, location = DojoLocation, language = FavoriteLanguage , comment = textarea)

# @app.route('/form_result')
# def form_display():
#     print request.form
#     return render_template('/process')
app.run(debug=True)