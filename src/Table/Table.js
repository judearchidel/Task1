import React, {Component} from 'react';
import Row from './Row/Row';
import './Table.css';

class Table extends Component {
    constructor(props){
        super()
        this.state = {
            addedtab: [],
        }
    }

    

    addChangeHandler = () => {
        let arr=[...this.props.tab,{activated: null}]
        let abb=[...this.state.addedtab]
        abb.push(arr);
        this.setState({
        addedtab: abb
        })
    }
    removeHandler = (ind) => {
       let abb=[...this.state.addedtab]
       abb.splice(ind,1);
       console.log(abb);
       this.setState({
        addedtab: abb
        })

    }
    selectHandler= (item,index) => {
        console.log(item)
        let abb=[...this.state.addedtab]
        abb[index][abb[index].length-1].activated = item
        this.setState({
            addedtab: abb
        })
       console.log(this.state.addedtab);
    
    }

  render(){
      let ren = null;

   ren = (<tbody>{this.state.addedtab.map((item,index) => {
        return <Row tab={item} key={index*4} ind={index} activated={item[item.length-1]} removeHandler={this.removeHandler.bind(this,index)} selectHandler={this.selectHandler}></Row>
     }) }
     </tbody>
    );



      return(
          <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>InputType</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                 {ren}
            </table>
            <button onClick={this.addChangeHandler}>Add item</button>
          </div>
            )
  }  
}

export default Table;