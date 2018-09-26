from django.contrib import admin

# Register your models here.

from .models import HackEDBetaApplication, School

class HackEDBetaApplicationAdmin(admin.ModelAdmin):
    list_display = ('user', 'pk', 'paid',)

admin.site.register(HackEDBetaApplication, HackEDBetaApplicationAdmin)

admin.site.register(School)
