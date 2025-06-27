import { Component } from "react";

class FormHandler extends Component {
  constructor(props) {
    super(props);

    this.state = props.initialState;
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };
}

export default FormHandler;
