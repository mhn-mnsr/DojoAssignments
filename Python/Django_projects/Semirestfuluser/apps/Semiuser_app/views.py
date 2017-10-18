from __future__ import unicode_literals


from django.shortcuts import render, redirect
from models import User
from django.contrib import messages

def index(request):
    users = User.objects.all()
    context = {
        'users': users
    }
    return render(request, "index.html", context)

def create(request):
    return render(request, "create.html")

def create_user(request):
    firstname = request.POST['firstname']
    lastname = request.POST['lastname']
    email = request.POST['email']
    User.objects.create(firstname=firstname, lastname=lastname, email=email)
    return redirect('/')

def show_user(request, user_id):
    context = {
        'user': User.objects.get(id = user_id)
    }
    return render(request, "show.html", context)

def edit_user(request, user_id):
    context = {
        'user': User.objects.get(id = user_id)
    }
    return render(request, "update.html", context)


def update_user(request, user_id):
    errors = User.objects.basic_validator(request.POST)
    if len(errors):
        for tag, error in errors.iteritems():
            messages.error(request, error, extra_tags=tag)
        return redirect('/user/{}/edit'.format(user_id))
    else:
        user_update = User.objects.get(id=user_id)
        user_update.firstname = request.POST['firstname']
        user_update.lastname = request.POST['lastname']
        user_update.email = request.POST['email']
        user_update.save()
        return redirect('/')

def delete(request, user_id):
    User.objects.get(id=user_id).delete()
    return redirect('/')