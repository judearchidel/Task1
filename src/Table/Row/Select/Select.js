import React, {Component} from 'react';
import './Select.css';

class Sel extends Component {
    constructor(props){
        super()
    }

    render(){

        let ren = this.props.sel.map((item,Index) =>{
        
                if(item === this.props.activated.activated){
                    console.log(this.props.activated)
                    return <option value={item} key={Index} selected>{item}</option>
                }else{
                return <option value={item} key={Index}>{item}</option>
                }
            })
       

        return(
            <select onChange={this.props.selectHandler}>
            <option  defaultValue="Nothing"> -- select an option -- </option>
            {ren}
            </select>
        )
    }
}

export default Sel;