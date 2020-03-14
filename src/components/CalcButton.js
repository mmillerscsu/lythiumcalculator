import React from 'react'
import '../styles/CalcButton.css'

export default class CalcButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div className='button-container'>
                <button className={`calc-button ${this.props.size} ${this.props.color}`} value={this.props.value} id={this.props.id} onClick={this.props.onclick}>{this.props.name}</button>
            </div>
        )
    }
}