"""Module containing the logic for seeding the Gene Lookup app with data."""

from django.core.management.base import BaseCommand
from ...models import Gene


class Command(BaseCommand):

    def add_arguments(self, parser):
        pass

    def handle(self, *args, **kwargs):
        file_name = r"C:\Users\Landon Sturgeon\Documents\LS_Invitae_CC\invitae_cc\gene_lookup\management\commands\variants.csv"
        with open(file_name) as file:
            for row in file:
                print(row)
                split_row = row.strip().split(",")
                split_row = [item if item != "" else "NA" for item in split_row]


                try:
                    Gene.objects.get_or_create(
                        name=str(split_row[0]),
                        nucleotide_change=str(split_row[1]),
                        protein_change=str(split_row[2]),
                        other_mappings=str(split_row[3]),
                        other_name=str(split_row[4]),
                        transcripts=str(split_row[5]),
                        region=str(split_row[6]),
                        reported_classification=str(split_row[7]),
                        inferred_classification=str(split_row[8]),
                        source=str(split_row[9]),
                        last_evaluated=str(split_row[10]),
                        last_updated=str(split_row[11]),
                        url=str(split_row[12]),
                        submitter_comment=str(split_row[13]),
                        assembly=str(split_row[14]),
                        chr=str(split_row[15]),
                        genomic_start=str(split_row[16]),
                        genomic_stop=str(split_row[17]),
                        ref=str(split_row[18]),
                        alt=str(split_row[19]),
                        accession=str(split_row[20]),
                        reported_ref=str(split_row[21]),
                        reported_alt=str(split_row[22])
                    )
                except:
                    pass

        self.stdout.write(self.style.SUCCESS('Data imported successfully'))
