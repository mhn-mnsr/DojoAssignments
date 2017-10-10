from flask import Flask, render_template, request, redirect , session
app = Flask(__name__)
app.secret_key = 'ThisIsSecret' 
import random

@app.route('/')
def index():
    if not 'gold' in session:
        session['gold'] = 0
    if not 'activities' in session:
        session['activities'] = []
    return render_template("index.html")

@app.route("/process_money", methods=["POST"])
def moneymaker():
    if request.form['building'] == "farm":
        find_gold = random.randrange(10,21)
        session['gold'] += find_gold
        # session['action'] = "won"
        session['activities'].append("Earned" + str(find_gold) + "gold!")
    elif request.form['building'] == "cave":
        find_gold = random.randrange(5,11)
        session['gold'] += find_gold
        # session['action'] = "won"
        session['activities'].append("Earned" + str(find_gold) + "gold!")    
    elif request.form['building'] == "house":
        find_gold = random.randrange(2,6)
        session['gold'] += find_gold
        # session['action'] = "won"
        session['activities'].append("Earned" + str(find_gold) + "gold!")
    else:
        casino_check = random.randrange(0,2)
        if casino_check == 1:
            find_gold = random.randrange(1,51)
            session['gold'] += find_gold
            session['activities'].append("Earned" + str(find_gold) + "gold!")
        else:
            find_gold = random.randrange(1,51)
            session['gold'] -= find_gold
            # session['action'] = "lost"
            session['activities'].append("You lost -" + str(find_gold) + "gold!")
    return redirect('/')

@app.route('/clear')
def clear():
    session.clear()
    return redirect("/")

app.run(debug=True)