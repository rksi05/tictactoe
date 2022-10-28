import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import ShoppingList from "./shoppinglist"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ShoppingList name = "Christina" item="TGCF 5"/>);
