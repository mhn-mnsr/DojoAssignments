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
    elif len(request.form['name']) > 1:
        flash("Success! Your name is {}".format(request.form['name']))
    else:
        pass
    return redirect('/')

@app.route('/process', methods=['POST'])
def create_users():
    DojoLocation = request.form['location']
    FavoriteLanguage = request.form['language']
    textarea = request.form['comment']
    return render_template('survey_result.html', location = DojoLocation, language = FavoriteLanguage , comment = textarea)

# @app.route('/process', methods=['POST'])
# def name_length():
#     # print len(request.form['name'])
#     if len(request.form['name']) < 1:
#         flash("Name cannot be empty!")
#     else:
#         flash("Success! Your name is {}".format(request.form['name']))
#     return redirect('/')

# @app.route('/process', methods=['POST'])
# def comment_length():
#     if len(request.form['comment']) > 120:
#         flash("Your message is more than 120 characters")
#     else:
#         flash("Success, printing your message!")
#     return redirect('/')
# @app.route('/form_result')
# def form_display():
#     print request.form
#     return render_template('/process')
app.run(debug=True)