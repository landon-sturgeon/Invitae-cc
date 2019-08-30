"""Module containing the urls used by the gene_lookup app."""

from django.urls import path
from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns

from . import api_views

app_name = "gene_lookup"

urlpatterns = [
    # path("", api_views.ReactAPIView, name="gene_index"),
    url('/', api_views.GeneViewSet.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)
