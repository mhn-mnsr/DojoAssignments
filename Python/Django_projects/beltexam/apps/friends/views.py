from django.shortcuts import render, redirect
from django.contrib import messages
from models import User
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
            return redirect ('/friends')

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
            return redirect ('/friends')


def show_friends(request):
    user = User.objects.get(id=request.session['user_id'])
    all_friends = user.friend.all()
    nonfriends = User.objects.exclude(id=user.id)

    for x in all_friends:
        nonfriends = nonfriends.exclude(id=x.id)

    context = {
        'user': user,
        'friends': all_friends,
        'nonfriends': nonfriends,
    } 
    return render(request, "profile.html", context)

def log_out(request):
    del request.session['user_id']
    return redirect ('/')

def user(request, user_id):
    context = {
    	'user': User.objects.get(id=user_id)
    }
    return render(request, "friendprofile.html", context)

def add_friend(request, user_id):
    print "inside add_friend"
    print request.session['user_id']
    new_friend = User.objects.get(id=user_id)
    user = User.objects.get(id=request.session['user_id'])
    user.friend.add(new_friend)
    user.save()
    new_friend.friend.add(user)
    return redirect('/friends')

	
def delete_friend(request, user_id):
    old_friend = User.objects.get(id=user_id)
    user = User.objects.get(id=request.session['user_id'])
    user.friend.remove(old_friend)
    user.save()
    old_friend.friend.remove(user)
    return redirect('/friends')