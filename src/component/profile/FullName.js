import React, { Component } from "react";
import './Fullname.css';
export default class Fullname extends Component {

    constructor() {
        super();
        this.state = {
            src: "https://risingotaku.com/wp-content/uploads/2021/10/%D8%A3%D9%86%D9%85%D9%8A-One-Piece-%D9%8A%D9%83%D8%B4%D9%81-%D8%B9%D9%86-%D9%85%D9%84%D8%B5%D9%82-%D8%AC%D8%AF%D9%8A%D8%AF-%D9%82%D8%A8%D9%84-%D8%A7%D9%84%D8%AD%D9%84%D9%82%D8%A9-%D8%A3%D9%84%D9%81-1000.webp",
            counter: 0

        }
    }

    increse = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    decrese = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    muftah = () => {
        this.setState({
            counter: 0
        })

    }

    decrese = () => {
        if (this.state.counter > 0) {
            this.setState({
                counter: this.state.counter - 1
            });
        }
    }


    render() {
        return (
            <div className="vv">
                <h3>pirate King</h3>

                <p> {this.state.counter} </p>

                <img className="kk" src={this.state.src} alt="img in src" />

                <div className="mn">
                    <button onClick={this.increse}  >+</button>
                    <button onClick={this.decrese}>-</button>
                    <button onClick={this.muftah}>reset</button>
                </div>


            </div>
        )
    }






}