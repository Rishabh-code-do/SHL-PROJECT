from django.urls import path
from . import views
from .views import DataView, DataCreateView, showSingleProject, addProject

urlpatterns = [
    path('data', DataView.as_view()),
    path('data/<int:pk>/', views.showSingleProject, name='show-single'),
    path('addProject', views.addProject, name='add-project'),
    path('create', DataCreateView.as_view()),
]
