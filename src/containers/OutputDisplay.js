import React from 'react';
import NumPad from './NumPad';
import CalcButton from '../components/CalcButton';
import ModeButton from '../components/ModeButton';

export default class OutputDisplay extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Display: '0',
            Clear: 'C',
            Left: '',
            Right: '',
            Op: '',
            EqualsSet: false,
            RightTrigger: false,
            PeriodSet: false,
            Mode: 'dark',
        }
    }

    ButtonPressed(e){

        switch(e.target.id){
            case "clear": this.setState({Display: '0', Clear: 'C', RightTrigger: false, Left: '', Right: '', Op: '', EqualsSet: false, PeriodSet: false})
                break;
            case "invert": this.InvertHandler();
                break;
            case "percent": this.PercentHandler();
                break;
            case "divide": this.OpHandler(e.target.id);
                break;
            case "multiply": this.OpHandler(e.target.id);
                break;
            case "subtract": this.OpHandler(e.target.id);
                break;
            case "add": this.OpHandler(e.target.id);
                break;
            case "equals": this.EqualsHandler();
                break;
            case "dot": this.DotHandler();
                break;
            default : this.AddNumberHandler(e.target.id);
                break;
        }
    }

    AddNumberHandler(e){
        let display = this.state.Display;
        let left = this.state.Left;
        let right = this.state.Right;
        let op = this.state.Op;

        if(parseInt(display) == 0){
            display = '';
        }

        display = display + e;

        !this.state.RightTrigger ? left = left + e : right = right + e

        this.setState({
            Display: display,
            Clear: 'AC',
            Left: left,
            Right: right,
            EqualsSet: false,
        })
    }

    DotHandler(){
        let display = this.state.Display;
        let left = this.state.Left
        let right = this.state.Right
        let op = this.state.Op;

        if(!this.state.PeriodSet){
            !this.state.RightTrigger ? left = left + "." : right = right + "."

            display = display + '.'

            this.setState({
                Display: display,
                Left: left,
                Right: right,
                PeriodSet: true,
            })
        }
    }

    OpHandler(id){
        let display = this.state.Display;
        let left = this.state.Left
        let op = this.state.Op;
        let output = '';

        if(display.length != 0 && op.length == 0 && left.length != 0){
            id == 'multiply' ? output = ' * ' : id == 'add' ? output = ' + ' : id == 'subtract' ? output = ' - ' : output = ' / '

            display = display + output

            this.setState({
                Op: id,
                Display: display,
                RightTrigger: true,
                PeriodSet: false,
            })
        }  
    }

    PercentHandler(){
        let left = this.state.Left;
        let right = this.state.Right;
        let display = parseFloat(this.state.Display)
        let op = this.state.Op;

        if(right.length == 0 && op.length == 0){
            display = display / 100;
            this.setState({
                Display: display
            })
        }
    }

    InvertHandler(){
        let display = parseFloat(this.state.Display);
        let left = this.state.Left;
        let right = this.state.Right;
        let op = this.state.Op;

        if(right.length == 0 && op.length == 0){
            display = -display
            this.setState({
                Display: display
            })
        }
    }

    EqualsHandler(){
        
        let display = this.state.Display;
        let left = this.state.Left;
        let right = this.state.Right;
        let op = this.state.Op;

        if(display.length != 0 && left.length != 0 && right.length != 0 && op.length != 0){
            
            let result = this.Evaluate();

            this.setState({
                Display: result,
                Left: result,
                Right: '',
                RightTrigger: true,
                Op: '',
                EqualsSet: true,
            })
        }
    }

    Evaluate(){
        let left = this.state.Left * 1;
        let right = this.state.Right * 1;
        let op = this.state.Op;
        let result = 0;

        op == 'multiply' ? result = left * right : op == 'add' ? result = left + right : op == 'subtract' ? result = left - right : result = left / right

        return result;
    }

    SwitchMode(){
        let mode = this.state.Mode;

        if(mode == 'dark'){
            mode = 'light';
            document.body.style.background = 'black'
            document.getElementById('calc-output').style.background = '#d1ffe0'
            document.getElementById('calc-body').style.boxShadow = '4px 4px 15px #2ee66a';
        }else{
            mode = 'dark';
            document.body.style.background = 'white'
            document.getElementById('calc-output').style.background = 'floralwhite'
            document.getElementById('calc-body').style.boxShadow = '7px 7px 15px black';
        }

        this.setState({
            Mode: mode,
        })
    }

    render(){
        return(
            <div>
                <div>
                    <p className="engraved-logo">Lythium.io</p>
                </div>
                <div id="calc-output" className="calc-output">
                    <p className="calc-nums"><b style={{fontSize: '30px'}}>{this.state.Display}</b></p>
                </div>
                <div className="button-mode">
                    <ModeButton name={this.state.Mode} color={this.state.Mode == 'dark' ? 'basic' : 'dark'} onclick={this.SwitchMode.bind(this)}></ModeButton>
                </div>
                <div style={{width: '100%', height: '100%'}}>
                    <div id="row-1" style={{display: 'flex'}}>
                        <CalcButton id="clear" color={this.state.Mode == 'dark' ? 'basic' : 'dark'} name={this.state.Clear} onclick={this.ButtonPressed.bind(this)}></CalcButton>
                        <CalcButton id="invert" color={this.state.Mode == 'dark' ? 'basic' : 'dark'} name="+/-" onclick={this.ButtonPressed.bind(this)}></CalcButton>
                        <CalcButton id="percent" color={this.state.Mode == 'dark' ? 'basic' : 'dark'} name="%" onclick={this.ButtonPressed.bind(this)}></CalcButton>
                        <CalcButton id="divide" color={this.state.Mode == 'dark' ? 'orange' : 'green'} name="/" onclick={this.ButtonPressed.bind(this)}></CalcButton>
                    </div>
                    <div id="row-2" style={{display: 'flex'}}>
                        <CalcButton id="7" color={this.state.Mode == 'dark' ? 'basic' : 'dark'} name="7" val={7} onclick={this.ButtonPressed.bind(this)}></CalcButton>
                        <CalcButton id="8" color={this.state.Mode == 'dark' ? 'basic' : 'dark'} name="8" val={8} onclick={this.ButtonPressed.bind(this)}></CalcButton>
                        <CalcButton id="9" color={this.state.Mode == 'dark' ? 'basic' : 'dark'} name="9" val={9} onclick={this.ButtonPressed.bind(this)}></CalcButton>
                        <CalcButton id="multiply" color={this.state.Mode == 'dark' ? 'orange' : 'green'} name="x" onclick={this.ButtonPressed.bind(this)}></CalcButton>
                    </div>
                    <div id="row-3" style={{display: 'flex'}}>
                        <CalcButton id="4" color={this.state.Mode == 'dark' ? 'basic' : 'dark'} name="4" val={4} onclick={this.ButtonPressed.bind(this)}></CalcButton>
                        <CalcButton id="5" color={this.state.Mode == 'dark' ? 'basic' : 'dark'} name="5" val={5} onclick={this.ButtonPressed.bind(this)}></CalcButton>
                        <CalcButton id="6" color={this.state.Mode == 'dark' ? 'basic' : 'dark'} name="6" val={6} onclick={this.ButtonPressed.bind(this)}></CalcButton>
                        <CalcButton id="subtract" color={this.state.Mode == 'dark' ? 'orange' : 'green'} name="-" onclick={this.ButtonPressed.bind(this)}></CalcButton>
                    </div>
                    <div id="row-4" style={{display: 'flex'}}>
                        <CalcButton id="1" color={this.state.Mode == 'dark' ? 'basic' : 'dark'} name="1" onclick={this.ButtonPressed.bind(this)}></CalcButton>
                        <CalcButton id="2" color={this.state.Mode == 'dark' ? 'basic' : 'dark'} name="2" onclick={this.ButtonPressed.bind(this)}></CalcButton>
                        <CalcButton id="3" color={this.state.Mode == 'dark' ? 'basic' : 'dark'} name="3" onclick={this.ButtonPressed.bind(this)}></CalcButton>
                        <CalcButton id="add" color={this.state.Mode == 'dark' ? 'orange' : 'green'} name="+" onclick={this.ButtonPressed.bind(this)}></CalcButton>
                    </div>
                    <div id="row-5" style={{display: 'flex'}}>
                        <CalcButton id="0" color={this.state.Mode == 'dark' ? 'basic' : 'dark'} size="double" name="0" onclick={this.ButtonPressed.bind(this)}></CalcButton>
                        <CalcButton id="dot" color={this.state.Mode == 'dark' ? 'basic' : 'dark'} name="." onclick={this.ButtonPressed.bind(this)}></CalcButton>
                        <CalcButton id="equals" color={this.state.Mode == 'dark' ? 'orange' : 'green'} name="=" onclick={this.ButtonPressed.bind(this)}></CalcButton>
                    </div>
                </div>
            </div>
        )
    }
}