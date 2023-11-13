from django.contrib import admin

from .models import Student

# Register your models here.
# create a class for the admin-model integration
class StudentAdmin(admin.ModelAdmin):
 
    # add the fields of the model here
    list_display = ('pk', 'name', 'email', 'age', 'phone', 'registrationDate')
    
admin.site.register(Student,StudentAdmin)