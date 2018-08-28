import React, { Component } from 'react';

class Factoriel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number: ''
        }
    }

    num = (e) => {
        let val = e.target.value
        this.setState((prevState) => {
            return {
                number: val
            }
        })
    }
    calcul = () => {
        if (this.state.number) { 
            return this.state.number * this.state.number 
        } else { 
            return '' 
        }
    }
    render() {
        return (
            <div>
                <button value="0" onClick={this.num}>0</button>
                <button value="1" onClick={this.num}>1</button>
                <button value="2" onClick={this.num}>2</button>
                <button value="3" onClick={this.num}>3</button>
                <button value="4" onClick={this.num}>4</button>
                <button value="5" onClick={this.num}>5</button>
                <button value="6" onClick={this.num}>6</button>
                <button value="7" onClick={this.num}>7</button>
                <button value="8" onClick={this.num}>8</button>
                <button value="9" onClick={this.num}>9</button>
                <p>
                    The SQUARE of {this.state.number} is: {this.calcul()}
                </p>
            </div>
        );
    }
}

export default Factoriel;