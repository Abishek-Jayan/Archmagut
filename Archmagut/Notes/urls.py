from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name='index'),
    path("nc", views.note_core, name='note_core'),
    path("nmos", views.note_modify_or_something, name= 'note_modify_or_something'),
    path("ncol", views.note_colour, name='note_colour'),
]
