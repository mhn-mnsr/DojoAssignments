from __future__ import unicode_literals

from django.shortcuts import render, redirect
from models import Book
from django.contrib import messages
from django.core.urlresolvers import reverse
# Create your views here.

def index(request):
    print "I'm in views/books/index"
    books = Book.objects.all()
    context = {
        'books': books
    }
    return render(request, "bookshelf.html", context)

def create(request):
    print "I'm in views/books/create"
    return render(request, "createreview.html")

def create_review(request):
    title = request.POST['title']
    author = request.POST['author_name']
    review = request.POST['review']
    rating = request.POST['rating']
    Book.objects.create(title=title, author=author, review=review, rating=rating)
    return redirect('/')

def show_review(request, book_id):
    context = {
        'book' : Book.objects.get(id=book_id)
    }
    return render(request, "bookprofile.html", context)

