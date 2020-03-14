import React from 'react'
import '../styles/CalcButton.css'

export default class ModeButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div className='button-container'>
                <button className={`mode-button ${this.props.color}`} id={this.props.id} onClick={this.props.onclick}>{this.props.name}</button>
            </div>
        )
    }
}