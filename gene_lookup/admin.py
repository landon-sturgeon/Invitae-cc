from django.contrib import admin

from .models import Gene

# make the gene lookup app modifiable for the site admin
admin.site.register(Gene)
