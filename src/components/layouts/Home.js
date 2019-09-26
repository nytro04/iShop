import React, { Component } from "react";
import Header from "./Header";
import ItemListbk from "../product/ItemListbk";

class Home extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center display-4 mt-4">Top Trending...</h2>
        <Header />
        <div className="mt-5">
          <h3 className="text-center display-4 nav_line mb-5 pb-4">
            Latest products from Apple available in shop...
          </h3>
          <ItemListbk />
        </div>
      </div>
    );
  }
}

export default Home;
