import React from "react";
import {
  Form,
  Input,
  Button,
  Spin
} from "antd";
import axios from "axios";
import Results from "./Results";

class FilterForm extends React.Component {
  state = {
    results: [],
    gene_names: [],
    loading: false,
    error: null,
    genes: [],
    genes_populated: false
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

  onTextChange = (e) => {
    const value = e.target.value;
    let genes = [];
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp('{value}*');
      suggestions = this.state.genes.map( x => {
        if (regex.test(x.name)) {
          return([x])
        }
      })
      suggestions = suggestions.flat()
    };

    genes = this.state.results.map(x => {
        if (suggestions.indexOf(x.name) > -1) {
          return([x])
        }
    });
    if (suggestions.length > 0) {
      this.setState({
        genes_populated: true
      })
    } else {
        this.setState({
          genes_populated: false
        })
    }
    this.setState({genes: genes});
  }

  render() {
    const { error, loading, genes} = this.state;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      wrapperCol: { span: 12, offset: 6 }
    };
    return (
      <div>
        {error && <span>There was an error</span>}

        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item>
            <h1 className="ant-form-text">Gene Lookup</h1>
          </Form.Item>

          <Form.Item>
            {getFieldDecorator("geneName")(
              <Input onChange={this.onTextChange} type="text"/>
            )}
          </Form.Item>

          <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>

        {loading ? (
          <div className="loader-div">
            <Spin />
          </div>
        ): null}

        {this.state.genes_populated ? (
            <Results genes={genes} />
          ) : null
        }

        </Form>
      </div>
    );
  }
}

const WrappedFilterForm = Form.create({ search: "validate_other" })(FilterForm);

export default WrappedFilterForm;
