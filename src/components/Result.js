import React from "react";

const Result = ({ gene }) => {
  return (
    <div>
      <li>
      <table>
        <tr>
          <th></th>
          <th></th>
        </tr>

        <tr>
        <td>
        <span>
          <b>Gene Name:</b> {gene.name}{" "}
        </span>
        </td>
        <td align="right">
        <span>
          <b>Nucleotide Change:</b> {gene.nucleotide_change}{" "}
        </span>
        </td>
        </tr>

        <tr>
        <td>
        <span>
          <b>Protein Change:</b> {gene.protein_change}{" "}
        </span>
        </td>
        <td align="right">
        <span>
          <b>Other Mappings:</b> {gene.other_mappings}{" "}
        </span>
        </td>
        </tr>

        <tr>
        <td>
        <span>
          <b>Transcripts:</b> {gene.transcripts}{" "}
        </span>
        </td>
        <td align="right">
        <span>
          <b>Region:</b> {gene.region}{" "}
        </span>
        </td>
        </tr>

        <tr>
        <td>
        <span>
          <b>Reported Classification:</b> {gene.reported_classification}{" "}
        </span>
        </td>
        <td align="right">
        <span>
          <b>Inferred Classification</b> {gene.inferred_classification}{" "}
        </span>
        </td>
        </tr>

        <tr>
        <td>
        <span>
          <b>Source:</b><a href={ gene.url }> {gene.source}{" "} </a>
        </span>
        </td>
        <td align="right">
        <span>
          <b>Last Evaluated:</b> {gene.last_evaluated}{" "}
        </span>
        </td>
        </tr>

        <tr>
        <td>
        <span>
          <b>Last Updated</b> {gene.last_updated}{" "}
        </span>
        </td>
        <td align="right">
        <span>
          <b>Submitter Comment</b> {gene.submitter_comment}{" "}
        </span>
        </td>
        </tr>

        <tr>
        <td>
        <span>
          <b>Assembly</b> {gene.assembly}{" "}
        </span>
        </td>
        <td align="right">
        <span>
          <b>Chromosome</b> {gene.chr}{" "}
        </span>
        </td>
        </tr>

        <tr>
        <td>
        <span>
          <b>Genomic Start</b> {gene.genomic_start}{" "}
        </span>
        </td>
        <td align="right">
        <span>
          <b>Genomic Stop</b> {gene.genomic_stop}{" "}
        </span>
        </td>
        </tr>

        <tr>
        <td>
        <span>
          <b>Reference</b> {gene.ref}{" "}
        </span>
        </td>
        <td align="right">
        <span>
          <b>Alt</b> {gene.alt}{" "}
        </span>
        </td>
        </tr>

        <tr>
        <td>
        <span>
          <b>Accession:</b> {gene.accession}{" "}
        </span>
        </td>
        <td align="right">
        <span>
          <b>Reported Reference</b> {gene.reported_ref}{" "}
        </span>
        </td>
        </tr>

        <tr>
        <td>
        <span>
          <b>Reported Alt</b> {gene.reported_alt}{" "}
        </span>
        </td>
        </tr>
        </table>
      </li>
      <hr />
    </div>
  );
};

export default Result;
