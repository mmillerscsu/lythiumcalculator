import React from 'react';
import CalcButton from '../components/CalcButton';

export default class NumPad extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div style={{width: '100%', height: '100%', marginTop: '10%'}}>
                <div id="row-1" style={{display: 'flex'}}>
                    <CalcButton name="C"></CalcButton>
                    <CalcButton name="+/-"></CalcButton>
                    <CalcButton name="%"></CalcButton>
                    <CalcButton color="orange" name="/"></CalcButton>
                </div>
                <div id="row-2" style={{display: 'flex'}}>
                    <CalcButton name="7"></CalcButton>
                    <CalcButton name="8"></CalcButton>
                    <CalcButton name="9"></CalcButton>
                    <CalcButton color="orange" name="x"></CalcButton>
                </div>
                <div id="row-3" style={{display: 'flex'}}>
                    <CalcButton name="4"></CalcButton>
                    <CalcButton name="5"></CalcButton>
                    <CalcButton name="6"></CalcButton>
                    <CalcButton color="orange" name="-"></CalcButton>
                </div>
                <div id="row-4" style={{display: 'flex'}}>
                    <CalcButton name="1"></CalcButton>
                    <CalcButton name="2"></CalcButton>
                    <CalcButton name="3"></CalcButton>
                    <CalcButton color="orange" name="+"></CalcButton>
                </div>
                <div id="row-5" style={{display: 'flex'}}>
                    <CalcButton size="double" name="0"></CalcButton>
                    <CalcButton name="."></CalcButton>
                    <CalcButton color="orange" name="="></CalcButton>
                </div>
            </div>
        )
    }
}


