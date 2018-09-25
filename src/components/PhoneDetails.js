import React from "react";

import api from "../api.js";

class PhoneDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: "",
      brand: "",
      model: "",
      image: "",
      specs: [],
      createdAt: "",
    };
  }

  // called automatically by React when the COMPONENT LOADS
  componentDidMount() {
    const { params } = this.props.match;

    // make the request to the API as soon as the component loads
    api.get(`/phones/${params.phoneId}`)
      .then(response => {
        console.log("Phone details ☎️", response.data);
        // when we get the data back setState() to update
        this.setState(response.data);
      })
      .catch(err => {
        console.log(err);
        alert("Sorry! Something went wrong. 💩");
      });
  }

  render() {
    const { _id, brand, model, image, specs, createdAt } = this.state;
    return (
      <section>
        <h2>Phone Details</h2>

        <h3>{model}</h3>
        <p>by <i>{brand}</i></p>

        <img src={image} />

        <h4>Specs</h4>
        <ul>
          {specs.map((oneSpec, index) =>
            <li key={index}>{oneSpec}</li>
          )}
        </ul>

        <p>Product #{_id}</p>
        <p>Added on {createdAt}</p>
      </section>
    );
  }
}

export default PhoneDetails;
