from django.urls import path

from .views import StudentCreate, StudentDetail, StudentList, StudentUpdate, StudentDelete


urlpatterns = [
    path('students/<int:pk>/', StudentDetail.as_view()),
    path('students/', StudentList.as_view()),  
    path('students/add/', StudentCreate.as_view()),
    path('students/update/<int:pk>/',StudentUpdate.as_view()),
    path('students/delete/<int:pk>/', StudentDelete.as_view()),
]