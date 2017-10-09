from flask import Flask, render_template, request, redirect, session
import random
app = Flask(__name__)
app.secret_key = 'ThisIsSecret'


@app.route('/')
def index():
    if session.has_key('correct_number') == False:
        session['correct_number'] = random.randrange(1, 100) 
        
        print session['correct_number']
    else:
        pass
    print session['correct_number']
    return render_template('index.html')

@app.route('/guess', methods=['POST'])
def guessing():
    user_guess = request.form['guess']
    if int(user_guess) == session['correct_number']:
        session['answer_state'] = 'Right'
        session['user_guess'] = True
        
        print 'you guessed it!'
    elif int(user_guess) > session['correct_number']:
        session['answer_state'] = 'High'
        session['user_guess'] = int(user_guess)
       
    elif int(user_guess) < session['correct_number']:
        session['answer_state'] = 'Low'
        session['user_guess'] = int(user_guess)
       
        session['display_tryagain'] = str('You didnt do it')
    elif int(user_guess) == 0:
        reset()
    else:
        pass
    return redirect('/')

@app.route('/reset', methods=['POST'])
def reset():
    session['ThisIsSecret']  
    app.config['SEND_FILE_MAX_AGE_DEFAULT']= 0
    return redirect('/', None)




app.run(debug=True)