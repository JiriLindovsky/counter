import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count:0
     }

    render() { 

        let classes1= "badge m-2 badge-";
        classes1+=this.state.count ===0? "warning":"primary";

        return (
        <React.Fragment>
            
            <span className={classes1}>{this.formatCount()}</span>
           

            <button className='btn btn-secondary btn-sm'>Increment</button>
        </React.Fragment>
        )
        ;
    }

    formatCount() {
        const {count}=this.state;
        //return count===0 ? <h1>Zero</h1> : count;
        return count===0 ? 'Zero' : count;
    }
}
 
export default Counter;