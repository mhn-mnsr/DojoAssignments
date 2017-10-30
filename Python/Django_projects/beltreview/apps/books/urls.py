from django.conf.urls import url
from django.contrib import admin
from . import views

urlpatterns = [
    url(r'^/books$', views.index, name="all_books"),
    url(r'^/process$', views.create, name="create"),
    url(r'^/books/add$', views.create_review, name="create_review"),
    url(r'^books/show$', views.show_review, name="show_review"),
]