from django.shortcuts import render, redirect
from django.contrib import messages
from models import User, Quote
from django.core.urlresolvers import reverse
# from django.contrib.auth import authenticate, login, logout as django_logout
# Create your views here.


def index(request):
    print "Im in views/index!"
    return render(request, "index.html")

def register(request):
    print "Im in views/register!"
    errors = User.objects.valid_registration(request.POST)
    if len(errors):
        for message in errors:
            messages.error(request, errors)
        return redirect(reverse('index'))
    else:
        messages.success(request, "You have successfully registered with us")
        current_user = User.objects.get(email=request.POST['email'])
        request.session['user_id']= current_user.id
        if request.session['user_id'] == None:
            return redirect ('/')
        else:
            return redirect ('/quotes')

def success(request):
    return render(request, "success.html" )

def login(request):
    print "Im in views/login!"
    errors = User.objects.user_exists(request.POST)
    if len(errors):
        for message in errors:
            messages.error(request, errors)
        return redirect(reverse('index'))
       
    else:
        messages.success(request, "Welcome, " + User.objects.get(email = request.POST['email']).first_name + "!")
        current_user = User.objects.get(email=request.POST['email'])
        request.session['user_id']= current_user.id
        if request.session['user_id'] == None:
            return redirect ('/')
        else:
            return redirect ('/quotes')

def logout(request):
    del request.session['user_id']
    return redirect ('/')

def quotes(request):
    user = User.objects.get(id=request.session['user_id'])
    context = {
        'user': user,
        'quotable_quotes': Quote.objects.exclude(favorites = user),
        'favorites': user.favorites.all()
    }
    return render(request, 'quotes.html', context)

def create_quote(request):
    print "I'm in views create_quote"
    current_user = User.objects.get(id=request.session['user_id'])
    if request.session['user_id'] == None:
        return redirect ('/')
    # add item to quotes
    errors = Quote.objects.validateQuote(request.POST)
    if len(errors):
        for message in errors:
            messages.error(request, errors)
        return redirect('/')
    else:
        quote = Quote.objects.create(
            content = request.POST['content'],
            poster = current_user,
            author = request.POST['author']
        )
        return redirect('/quotes')

def add_favorite(request, user_id):
    user = User.objects.get(id=request.session['user_id'])
    favorite = Quote.objects.get(id=user_id)
    user.favorites.add(favorite)
    return redirect('/quotes')

def remove_favorite(request, user_id):
    user = User.objects.get(id=request.session['user_id'])
    favorite = Quote.objects.get(id=user_id)
    user.favorites.remove(favorite)
    return redirect('/quotes')

def show_user(request, user_id):
    user =  User.objects.get(id = user_id)
    context = {
        'user': user,
        'favorites': user.favorites.all()
    }
    return render(request, 'user.html', context)
