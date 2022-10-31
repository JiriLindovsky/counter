import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count:0
     }

     handleIncrement = (product) => {
        console.log("Increment clicked", this);
        this.setState({count: this.state.count+1});// jinak to nejde, state is "read only"
     }

    render() { 
       let product={id:1};
        return (
        <React.Fragment>
            <span className={this.getBadgeClasses1()}>{this.formatCount()}</span>
            <button onClick={() =>this.handleIncrement(product)} className='btn btn-secondary btn-sm'>Increment</button>
        </React.Fragment>
        )
        ;
    }

    getBadgeClasses1() {
        let classes1 = "badge m-2 badge-";
        classes1 += this.state.count === 0 ? "warning" : "primary";
        return classes1;
    }

    formatCount() {
        const {count}=this.state;
        //return count===0 ? <h1>Zero</h1> : count;
        return count===0 ? 'Zero' : count;
    }
}
 
export default Counter;