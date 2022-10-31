import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count:0,
        imageUrl:'https://picsum.photos/200'
     }
     styles1 = {
        fontSize:10,
        fontWight:"bold"
     } 
    render() { 

        let classes1= "badge m-2 badge-";
        classes1+=this.state.count ===0? "warning":"primary";

        return (
        <React.Fragment>
            <img src={this.state.imageUrl} alt=""/><br />
            <span style={ { fontSize:30 }} className={classes1}>{this.formatCount()}</span>
            {/* <span style={this.styles1} className="badge badge-primary m-2">{this.formatCount()}</span> */}

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