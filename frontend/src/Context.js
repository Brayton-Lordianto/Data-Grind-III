import React, { Component } from "react";
import axios from 'axios'

const Context = React.createContext();

export class Provider extends Component() {
  state = {
    details: [
      {
        name: "html5",
        imageUrl: require("../images/pexels-trinity-kubassek-445109.jpg"),
        starsTotal: 3,
        starsActive: 3,
      },
      {
        name: "cSS3",
        imageUrl: require("../images/pexels-trinity-kubassek-445109.jpg"),
        starsTotal: 3,
        starsActive: 3,
      },
    ],
  };

  // async componentDidMount() {
  //   // api goes here in place of "url"
  //   const response = await axios.get("https://www.google.com");

  //   console.log(response.data.isSeccesful);

  //   if (response.data.isSuccesful) {
  //     this.setState({
  //       details: response.data.results,
  //     });
  //   }
  // }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
