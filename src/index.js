import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import ShoppingList from "./shoppinglist"

class Game extends React.Component{
    render(){
        return(
            <div className = "game">
                <div>
                    <Board />
                </div>
            </div>
        );
    }
}
class Board extends React.Component{

    renderSquare(i){
        return <Square />
    }

    render(){
        const status = 'X"'
        return(
            <div className ="board">
                <div> Next Player: {} </div>
                <div className = "first-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className = "second-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className = "last-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Square extends React.Component{
    render(){
        return(
            <button className = "square">
            {/**/}
            </button>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
