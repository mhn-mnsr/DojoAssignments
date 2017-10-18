from django.conf.urls import url
from django.contrib import admin
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^create$', views.create),
    url(r'^create_user$', views.create_user),
    url(r'^user/(?P<user_id>\d+)/$', views.show_user),
    url(r'^user/(?P<user_id>\d+)/edit$', views.edit_user),
    url(r'^user/(?P<user_id>\d+)/update$', views.update_user),
    url(r'^user/(?P<user_id>\d+)/delete$', views.delete),
]