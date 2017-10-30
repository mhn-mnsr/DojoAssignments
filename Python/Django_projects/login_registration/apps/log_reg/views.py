from django.shortcuts import render, redirect
from django.contrib import messages
# from . models import User
from django.core.urlresolvers import reverse
from models import User
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
        return redirect (reverse('success'))

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
        return redirect (reverse('success'))

def log_out(request):
    del request.session['user_id']
    return redirect ('/')