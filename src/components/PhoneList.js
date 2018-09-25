import React from "react";
import { Link } from "react-router-dom";

import api from "../api.js";

class PhoneList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phoneArray: []
    };
  }

  // called automatically by React when the COMPONENT LOADS
  componentDidMount() {
    // make the request to the API as soon as the component loads
    api.get("/phones")
      .then(response => {
        console.log("List of PHONES 📞", response.data);
        // when we get the data back setState() to update
        this.setState({ phoneArray: response.data })
      })
      .catch(err => {
        console.log(err);
        alert("Sorry! Something went wrong. 💩");
      });
  }

  render() {
    const { phoneArray } = this.state;
    return (
      <section>
        <h2>Our Phones</h2>

        <ul>
          {phoneArray.map(onePhone =>
            <li key={onePhone._id}>
              <h3>
                <Link to={`/phone-details/${onePhone._id}`}>
                  {onePhone.model}
                </Link>
              </h3>
              <p>by {onePhone.brand}</p>
              <img src={onePhone.image} />
            </li>
          )}
        </ul>
      </section>
    );
  }
}

export default PhoneList;
