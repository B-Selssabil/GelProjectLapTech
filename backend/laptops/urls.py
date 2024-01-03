from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('laptops/', views.getLaptops, name="laptops"),
    path('laptops/<int:pk>/', views.getLaptop, name="laptop"),
    path('laptops/predictPrice', views.predictPriceView)
]
