import React,{Component} from 'react';
import './Input.css';

class Inp extends Component {
    constructor (props){
        super()
    }
    render(){
        let ren=null;

        ren= (this.props.tab.map((item,index) => {
            if(item.name === this.props.np.activated){
                if(item.inputType === 'select'){
                    return <div key={index}><input type='text' ></input></div>
                }
                else if (item.inputType === 'currency'){
                    return <div key={index}><span className="fas fa-dollar-sign"></span><input type='text' ></input></div>
                }
            }
            else{
                return null;
            } 
        }))
        return(
            <div>
            {ren}
            </div>
        )
    }
}

export default Inp ;