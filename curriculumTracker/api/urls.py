from django.urls import path
from .views import main #imports func main from views.py

urlpatterns = [
    path('home', main) #executes func main
]