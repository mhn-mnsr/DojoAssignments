# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect
from models import Cat, Human

# Create your views here.
def index(request):
    cats = Cat.objects.all()
    humans = Human.objects.all()
    context = {
        'cats': cats,
        'humans': humans
    }
    print "MADE IT TO INDEX"
    return render(request, "index.html", context)

def create(request):
    return render(request, "create.html")

def create_cat(request):
    name = request.POST['name']
    age = request.POST['age']
    ryan = Human.objects.get(id=1)
    Cat.objects.create(name=name, age=age, owner=ryan)
    return redirect('/')

def create_human(request):
    name = request.POST['name']
    age = request.POST['age']
    Human.objects.create(name=name, age=age)
    return redirect('/')

def ryan_loves_cats(request):
    print "MADE IT TO ADDING RYAN AS A FAN"
    cat1 = Cat.objects.get(id=1)
    cat2 = Cat.objects.get(id=2)
    ryan = Human.objects.get(id=1)
    cat2.adoring_fans.add(ryan)
    cat1.adoring_fans.add(ryan)
    cat1.save()
    cat2.save()
    return redirect('/')
