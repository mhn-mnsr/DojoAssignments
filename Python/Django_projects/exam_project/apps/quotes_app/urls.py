from django.conf.urls import url
from django.contrib import admin
from . import views

urlpatterns = [
    url(r'^$', views.index, name = "index"),
    url(r'^register$', views.register, name ="register"),
    url(r'^success$', views.success, name ="success"),
    url(r'^login$', views.login, name="login"),
    url(r'^logout$', views.logout, name="logout"),
    url(r'^quotes$', views.quotes, name="quotes"),
    url(r'^create$', views.create_quote, name="create_quote"),
    url(r'^add_favorite/(?P<user_id>\d+)$', views.add_favorite, name="add_favorite"),
    url(r'^remove_favorite/(?P<user_id>\d+)$', views.remove_favorite, name="remove_favorite"),
    url(r'^users/(?P<user_id>\d+)$', views.show_user)
]

