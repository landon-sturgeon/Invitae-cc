"""Module containing the logic for the Django API serializers for the gene_lookup app."""

from rest_framework import serializers

from .models import Gene


class GeneSerializer(serializers.ModelSerializer):
    """Generic serializer for the API endpoints concerning the Gene model."""

    class Meta:
        model = Gene
        fields = (
            "name",
            "nucleotide_change",
            "protein_change",
            "other_mappings",
            "transcripts",
            "region",
            "reported_classification",
            "inferred_classification",
            "source",
            "last_evaluated",
            "last_updated",
            "url",
            "submitter_comment",
            "assembly",
            "chr",                      # short for chromosome
            "genomic_start",
            "genomic_stop",
            "ref",
            "alt",
            "accession",
            "reported_ref",
            "reported_alt",
        )
