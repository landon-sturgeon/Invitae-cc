"""Module containing the logic behind the gene_lookup app API views."""

from rest_framework import filters

from rest_framework.generics import ListAPIView
from rest_framework.viewsets import ModelViewSet

from .models import Gene
from .serializers import GeneSerializer


class GeneViewSet(ListAPIView):
    """Generic list endpoint to return a list of all genes in the app's database."""
    search_fields = ['name']
    filter_backends = (filters.SearchFilter,)
    queryset = Gene.objects.all()
    serializer_class = GeneSerializer

    # def get_queryset(self, name):
    #     """Return a custom query set to populate the frontend with
    #
    #     :return: query set of the genes that contain the string given
    #     """
    #     return Gene.objects.filter(name=name)


def is_valid_queryparam(param) -> bool:
    """Ensure that the query parameters is valid.

    :param param: parameter that is to be validated.
    :return: True if the parameter is valid
    """
    return param != '' and param is not None


def api_filter(request):
    """Filter the api back end of the model for the search bar in the react front end.

    :param request: request sent by the user
    :return: query set with all the gene's containing the string in the search bar in their name
    """
    gene_queryset = Gene.objects.filter(name=request.name)

    return gene_queryset


# class ReactAPIView(ListAPIView):
#     """Generic list view for the API view used by the react frontend."""
#
#     serializer_class = GeneSerializer
#     filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
#
#     def get_queryset(self):
#         """Return a custom query set to populate the frontend with
#
#         :return: query set of the genes that contain the string given
#         """
#         gene_name = self.kwargs["name"]
#         return Gene.objects.filter(gene__name=gene_name)


# class GeneReactFilter(FilterSet):
#     """Class to ensure that the genes are able to be filtered."""
#
#     class Meta:
#         model = Gene
#         fields = ['name']
