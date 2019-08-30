"""Module containing the logic behind the gene_lookup app API views."""

from rest_framework import filters

from rest_framework.generics import ListAPIView

from .models import Gene
from .serializers import GeneSerializer


class GeneViewSet(ListAPIView):
    """Generic list endpoint to return a list of all genes in the app's database."""
    search_fields = ['name']
    filter_backends = (filters.SearchFilter,)
    queryset = Gene.objects.all()
    serializer_class = GeneSerializer
