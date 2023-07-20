import React, { Fragment } from "react";
import Navbar from "../navbar/Navbar";
import { Product } from "../productList/ProductList";

export default function Home() {
  return (
    <div>
      {/* The Navbar component contains navigation elements */}
      <Navbar>
        {/* The Product component displays a list of products with filters and sort options */}
        <Product />
      </Navbar>
    </div>
  );
}
