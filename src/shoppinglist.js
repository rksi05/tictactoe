import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

class ShoppingList extends React.Component{
    render() {
        return(
            <div className="shopping-list">
                <h1>Shopping list for {this.props.name}</h1>
                <ul>
                    <li>matcha ice cream</li>
                    <li>tomato</li>
                    <li>golden kiwi</li>
                    <li>ramune soda</li>
                    <li>{this.props.item}</li>
                </ul>
            </div>
        );
    }
}
export default ShoppingList;