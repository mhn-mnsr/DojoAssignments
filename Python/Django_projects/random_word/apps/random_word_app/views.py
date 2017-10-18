from django.shortcuts import render, HttpResponse, redirect
from django.utils.crypto import get_random_string


# Create your views here.
def index(request):
    try:
        request.session['count']
    except KeyError:
        request.session['count'] = 0
    return render(request, 'index.html')

def generator(request):
    request.session['count'] += 1
    print request.session['count']
    request.session['word'] = get_random_string(length=10)
    return redirect('/')

def reset(request):
    del request.session['count']
    request.session['word'] = ''
    return redirect('/')