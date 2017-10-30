from django.conf.urls import url
from django.contrib import admin
from . import views

urlpatterns = [
    url(r'^$', views.index, name = "index"),
    url(r'^register$', views.register, name ="register"),
    url(r'^dashboard$', views.dashboard, name ="dashboard"),
    url(r'^dashboard/admin$', views.admin_dashboard, name ="admin_dashboard"),
    url(r'^login$', views.login, name="login"),
    # url(r'^users/new$', views.create_user, name="create"),
    url(r'^users/edit/(?P<user_id>\d+)/$', views.admin_edit_user, name="admin_edit_user"),
    url(r'^users/update/(?P<user_id>\d+)/$', views.edit_user_info, name="edit_user_info"),
    url(r'^users/delete/(?P<user_id>\d+)/$', views.delete_user_info, name="delete_user_info"),
    url(r'^logout$', views.log_out, name="log_out"),
]