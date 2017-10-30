from django.conf.urls import url
from django.contrib import admin
from . import views

urlpatterns = [
    url(r'^$', views.index, name = "index"),
    url(r'^register$', views.register, name ="register"),
    url(r'^success$', views.success, name ="success"),
    url(r'^login$', views.login, name="login"),
    url(r'^friends$', views.show_friends, name="show_friends"),
    url(r'^logout$', views.log_out, name="log_out"),
    url(r'^user/(?P<user_id>\d+)/$', views.user, name="user"),
    url(r'^addfriend/(?P<user_id>\d+)/$', views.add_friend, name="add_friend"),
    url(r'^deletefriend/(?P<user_id>\d+)/$', views.delete_friend, name="delete_friend")
]