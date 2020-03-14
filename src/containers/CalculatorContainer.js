import React from 'react'
import '../styles/CalculatorContainer.css'
import OutputDisplay from './OutputDisplay';


export default class CalculatorContainer extends React.Component {
    constructor(props){
        super(props);

        this.state = {}

    }

    render(){
        return(
            <div style={{width: '100%', height: '100%'}}>
                <div id="calc-body" className="calc-body">
                    <OutputDisplay></OutputDisplay>
                </div>
            </div>
        )
    }

}