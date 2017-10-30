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
        return redirect(reverse('users_app:index'))
    else:
        messages.success(request, "You have successfully registered with us")
        current_user = User.objects.get(email=request.POST['email'])
        request.session['user_id']= current_user.id
        return redirect (reverse('users_app:dashboard'))

def success(request):
    return render(request, "dashboard.html" )

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
        if current_user.is_admin is True:
            return redirect('/dashboard/admin')
        else:
            return redirect (reverse('users_app:dashboard'))
        
def dashboard(request):
    users = User.objects.all()
    current_user = User.objects.get(id=request.session['user_id'])
    context = {
        'users': users,
        'current_user': current_user
    }
    print current_user.is_admin
    return render(request, "dashboard.html", context)

def admin_dashboard(request):
    users = User.objects.all()
    current_user = User.objects.get(id=request.session['user_id'])
    context = {
        'users': users,
        'current_user': current_user
    }
    print current_user.is_admin
    return render(request, "admindash.html", context)

def create(request):
    return render(request, "create.html")

def admin_edit_user(request, user_id):
    user = User.objects.get(id=user_id)
    current_user = User.objects.get(id=request.session['user_id'])
    if current_user.is_admin is True:
        context = {
            'user': user,
            'current_user': current_user
        }
        return render(request, "edituser.html", context)

def edit_user_info(request, user_id):
    print "I'm in edit_user_info"
    # errors = User.objects.user_exists(request.POST)
    # if len(errors):
    #     for message in errors:
    #         messages.error(request, errors)
    #     return redirect(reverse('edit_user_info'))
    # else:
    user_update = User.objects.get(id = user_id)
    user_update.email = request.POST['email']
    user_update.first_name = request.POST['first_name']
    user_update.last_name = request.POST['last_name']
    if request.POST['is_admin'] == "True":
        user_update.is_admin = True
    else:
        user_update.is_admin = False
    user_update.save()
    return redirect(reverse('users_app:admin_dashboard'))

def delete_user_info(request, user_id):
    User.objects.get(id=user_id).delete()
    return redirect(reverse('users_app:admin_dashboard'))
        
def log_out(request):
    del request.session['user_id']
    return redirect ('/')