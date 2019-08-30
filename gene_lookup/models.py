from django.db import models


class Gene(models.Model):
    """Class responsible for containing all info concerning all known genes."""

    name = models.CharField(max_length=50, null=True, blank=True)
    nucleotide_change = models.TextField(null=True, blank=True)

    # assuming only a single protein is changed
    protein_change = models.CharField(max_length=50, null=True, blank=True)

    other_mappings = models.TextField(null=True, blank=True)
    other_name = models.TextField(null=True, blank=True)
    transcripts = models.TextField(null=True, blank=True)
    region = models.TextField(null=True, blank=True)
    reported_classification = models.TextField(null=True, blank=True)
    inferred_classification = models.TextField(null=True, blank=True)
    source = models.TextField(null=True, blank=True)
    last_evaluated = models.DateField(null=True, blank=True)
    last_updated = models.DateField(null=True, blank=True)
    url = models.URLField(null=True, blank=True)
    submitter_comment = models.TextField(null=True, blank=True)
    assembly = models.TextField(null=True, blank=True)

    # short for chromosome
    chr = models.TextField(null=True, blank=True)

    genomic_start = models.TextField(null=True, blank=True)
    genomic_stop = models.TextField(null=True, blank=True)
    ref = models.TextField(null=True, blank=True)
    alt = models.TextField(null=True, blank=True)
    accession = models.TextField(null=True, blank=True)
    reported_ref = models.TextField(null=True, blank=True)
    reported_alt = models.TextField(null=True, blank=True)

    def __str__(self):
        """String representation of the variant class to make admin and shell commands easier to follow.

        :return: string output of the variant (gene name, alias, and nucleotide change, reported classification)
        """
        return "{} ({}), {}, {}".format(self.name,
                                        self.other_name,
                                        self.nucleotide_change,
                                        self.reported_classification)
