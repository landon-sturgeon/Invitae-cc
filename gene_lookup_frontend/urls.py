from django.urls import re_path
from django.conf.urls import include

urlpatterns = [
    re_path("", include("gene_lookup.urls")),
]
