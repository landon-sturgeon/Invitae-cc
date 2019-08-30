import React from "react";

const Result = ({ gene }) => {
  return (
    <div>
      <li>
        <span>
          <b>Gene Name:</b> {gene.name}{" "}
        </span>

        <span>
          <b>Nucleotide Change:</b> {gene.nucleotide_change}{" "}
        </span>
        <span>
          <b>Protein Change:</b> {gene.protein_change}{" "}
        </span>
        <span>
          <b>Other Mappings:</b> {gene.other_mappings}{" "}
        </span>
        <span>
          <b>Transcripts:</b> {gene.transcripts}{" "}
        </span>
        <span>
          <b>Region:</b> {gene.region}{" "}
        </span>
        <span>
          <b>Reported Classification:</b> {gene.reported_classification}{" "}
        </span>
        <span>
          <b>Inferred Classification</b> {gene.inferred_classification}{" "}
        </span>
        <span>
          <b>Source:</b><a href={ gene.url }> {gene.source}{" "} </a>
        </span>
        <span>
          <b>Last Evaluated:</b> {gene.last_evaluated}{" "}
        </span>
        <span>
          <b>Last Updated</b> {gene.last_updated}{" "}
        </span>
        <span>
          <b>Submitter Comment</b> {gene.submitter_comment}{" "}
        </span>
        <span>
          <b>Assembly</b> {gene.assembly}{" "}
        </span>
        <span>
          <b>Chromosome</b> {gene.chr}{" "}
        </span>
        <span>
          <b>Genomic Start</b> {gene.genomic_start}{" "}
        </span>
        <span>
          <b>Genomic Stop</b> {gene.genomic_stop}{" "}
        </span>
        <span>
          <b>Reference</b> {gene.ref}{" "}
        </span>
        <span>
          <b>Alt</b> {gene.alt}{" "}
        </span>
        <span>
          <b>Accession:</b> {gene.accession}{" "}
        </span>
        <span>
          <b>Reported Reference</b> {gene.reported_ref}{" "}
        </span>
        <span>
          <b>Reported Alt</b> {gene.reported_alt}{" "}
        </span>
      </li>
      <hr />
    </div>
  );
};

export default Result;
