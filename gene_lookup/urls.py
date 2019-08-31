"""Module containing the urls used by the gene_lookup app."""

from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns

from . import api_views

urlpatterns = [
    url("genes/", api_views.GeneViewSet.as_view()),
    url("names/", api_views.GeneNameList.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)
