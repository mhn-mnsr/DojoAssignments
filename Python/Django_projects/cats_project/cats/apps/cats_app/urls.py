from django.conf.urls import url
from django.contrib import admin
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^create$', views.create),
    url(r'^create_cat$', views.create_cat),
    url(r'^create_human$', views.create_human),
    url(r'^ryan_loves_cats$', views.ryan_loves_cats),
]
