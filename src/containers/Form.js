import React from "react";
import {
  Form,
  Input,
  Button,
  Spin
} from "antd";
import axios from "axios";
import Results from "./Results";

const Search = Input.Search;

class FilterForm extends React.Component {
  state = {
    results: [],
    loading: false,
    error: null
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      const search =
          values["geneName"] === undefined ? null : values["geneName"];

      this.setState({ loading: true });

      if (!err) {
        axios
          .get("invitae-cc.herokuapp.com/api/genes/", {
            params: {
              search
            }
          })
          .then(res => {
            this.setState({
              loading: false,
              results: res.data
            });
          })
          .catch(err => {
            this.setState({ error: "There was an error" });
            console.log(err);
          });
        console.log("Received values of form: ", values);
      }
    });
  };

  render() {
    const { error, loading, results } = this.state;
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
              <Search
                placeholder="Gene Name"
                onSearch={value => console.log(value)}
                enterButton
              />
            )}
          </Form.Item>

          <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>

        {loading ? (
          <div className="loader-div">
            <Spin />
          </div>
        ) : (
          <Results genes={results} />
        )}
      </div>
    );
  }
}

const WrappedFilterForm = Form.create({ search: "validate_other" })(FilterForm);

export default WrappedFilterForm;
