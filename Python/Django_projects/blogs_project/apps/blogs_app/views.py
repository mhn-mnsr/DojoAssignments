from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
    print "Blogs app created"
    return render(request, "index.html")

def new(request):
    print "New request creation"
    return HttpResponse("placeholder to display a new form to create a new blog")

def create(request):
    print "New request creation"
    return redirect('/apps')

def show(request, number):
    context ={
        'number':number
    }
    print "New request creation"
    return render(request, "number.html", context)

def edit(request, number):
    context ={
        'number':number
    }
    print "New request creation"
    return render(request, "editnumber.html", context)

def delete(request, number):
    context ={
        'number':number
    }
    print "New request creation"
    return redirect('/apps')
