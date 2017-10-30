from django.conf.urls import url
from django.contrib import admin
from . import views

urlpatterns = [
    url(r'^$', views.index, name = "index"),
    url(r'^register$', views.register, name ="register"),
    url(r'^success$', views.success, name ="success"),
    url(r'^user/(?P<user_id>\d+)/$', views.user_profile),
    url(r'^login$', views.login, name="login"),
    url(r'^logout$', views.logout, name="logout"),
]