from flask import Flask, render_template, request, redirect,session
app = Flask(__name__)
app.secret_key = 'ThisIsSecret' 

@app.route('/')
def index():
    print 'Im counting'
    if session.has_key('count') == False:
        session['count'] = 0
    else:
        session['count'] += 1
        return render_template('index.html', count=session['count'])

@app.route('/adds', methods=['POST'])
def adding():
    print 'I make count increase'
    session['count'] += 1
    return redirect('/')

@app.route('/refresh', methods=['POST'])
def refresh():
    print 'I make count 0'
    session['count'] = 0
    return redirect('/')
app.run(debug=True)

