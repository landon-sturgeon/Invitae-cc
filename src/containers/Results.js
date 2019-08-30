import React from "react";
import Result from "../components/Result";

const Results = ({ genes }) => (
  <ul style={{ listStyleType: "none" }}>
    {genes.map(j => {
      return <Result gene={j} key={j.id} />;
    })}
  </ul>
);

export default Results;
