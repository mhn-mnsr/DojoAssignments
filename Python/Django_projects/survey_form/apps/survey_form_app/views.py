from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
    return render(request, 'index.html')

def process(request):
    request.session['firstname'] = request.POST['firstname']
    request.session['dojo_location'] = request.POST['dojo_location']
    request.session['favorite_language'] = request.POST['favorite_language']
    request.session['comment'] = request.POST['comment']
    return redirect('/result')

def result(request):
    return render(request, 'result.html')
