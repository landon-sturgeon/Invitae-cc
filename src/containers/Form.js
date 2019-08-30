import React, { Fragment } from "react";
import {
  Form,
  Input,
} from "antd";
import axios from "axios";
import Results from "./Results";

class FilterForm extends React.Component {
  state = {
    gene_names: [],
    error: null,
    genes: [],
    suggested_genes: [],
    suggested_gene_names: [],
    genes_populated: false,
    showSuggestions: false,
    activeSuggestion: 0,
    userInput: ""
  };

  constructor(props) {
    super(props);
    this.getGenes = this.getGenes.bind(this);
    this.getGeneNames = this.getGeneNames.bind(this);
  }

  componentDidMount() {
    window.addEventListener('load', this.getGenes);
    window.addEventListener('load', this.getGeneNames);
  };

  getGenes () {
    axios
      .get("http://127.0.0.1:8000/api/genes/")
      .then(res => {
        this.setState({
          loading: false,
          genes: res.data
        });
      })
      .catch(err => {
        this.setState({ error: "There was an error" });
        console.log(err);
      });
    return
  };

  getGeneNames () {
    axios
      .get("http://127.0.0.1:8000/api/names/")
      .then(res => {
        let names = [];
        names = res.data.map( x => {
          return(names.concat([x["name"]]))
        });
        this.setState({
          loading: false,
          gene_names: names.flat()
        });
      })
      .catch(err => {
        this.setState({ error: "There was an error" });
        console.log(err);
      });

    return
  };

  filterUndefined = (arr) => {
    let suggestions = [];
    suggestions = arr.filter(
      function(suggestions, index) {
        return suggestions !== undefined;
      }
    );
    return(suggestions)
  };

  getSuggestedNames = (value) => {
    let suggestions = [];
    const regex = new RegExp(value, 'i');
    suggestions = this.state.gene_names.map( x => {
      if (regex.test(x)) {
        return(x)
      }
    });
    suggestions = this.filterUndefined(suggestions);
    return(suggestions)
  };

  onTextChange = (e) => {
    const value = e.target.value;
    let genes = [];
    let suggestions = [];
    if (value.length > 0) {
      suggestions = this.getSuggestedNames(value);
    };

    genes = this.state.genes.map(x => {
        if (suggestions.indexOf(x.name) > -1) {
          return(x)
        }
    });
    genes = this.filterUndefined(genes);

    if (genes.length > 0) {
      this.setState({
        genes_populated: true
      })
    } else {
        this.setState({
          genes_populated: false
        })
    }

    this.setState({
      suggested_genes: genes,
      suggested_gene_names: suggestions,
      activeSuggestion: 0,
      showSuggestions: true,
      userInput: value
    });
    this.render()
  }

  render() {
    const { error } = this.state;
    const formItemLayout = {
      wrapperCol: { span: 12, offset: 6 }
    };

    let suggestionsListComponent = null;
    if (this.state.showSuggestions && this.state.userInput) {
      if (this.state.suggested_gene_names.length > 0) {
        suggestionsListComponent = (
          <ul class="suggestions">
            {this.state.suggested_gene_names.map((temp_sugg, index) => {
              let className = null;

              if (index === this.state.activeSuggestion) {
                className = "suggestion-active";
              }

              return (
                <li className={className} key={index}>{temp_sugg}</li>
              );
            })}
          </ul>
        );
      };
    };

    return (
      <div>
        {error && <span>There was an error</span>}

        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item>
            <h1 className="ant-form-text">Gene Lookup</h1>
          </Form.Item>
          <Fragment>
            <Form.Item>
              <Input onChange={this.onTextChange} type="text"/>
              { suggestionsListComponent }
            </Form.Item>
          </Fragment>

        {this.state.genes_populated ? (
            <Results genes={this.state.suggested_genes} />
          ) : null
        }
        </Form>
      </div>
    );
  }
}

const WrappedFilterForm = Form.create({ search: "validate_other" })(FilterForm);

export default WrappedFilterForm;
