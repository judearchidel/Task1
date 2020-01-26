import React, {Component} from 'react';
import Sel from './Select/Select';
import Inp from './Input/Input';
import './Row.css';

class Row extends Component{
    constructor(props){
        super()
  
    }
    selectorHandler=(event)=>{
        this.props.selectHandler(event.target.value,this.props.ind);
    }


    render(){
    
       let sel = this.props.tab.map(item => {
            return item.name
        });
        return(
            
            <tr>
            <td><Sel sel={sel} selectHandler={this.selectorHandler} activated={this.props.activated}></Sel></td>
                <td><Inp np={this.props.activated} tab={this.props.tab} > </Inp></td>
                <td><button onClick={this.props.removeHandler} value={this.props.tab}>remove</button></td>
            </tr>
            
        );
    }
}

export default Row;