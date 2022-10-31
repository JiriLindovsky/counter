import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count:0,
        tags :[]//['tag1','tag2','tag3']
     }
    renderTags(){
        if (this.state.tags.length===0) return <p>There are no tags.</p>
        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }  
    render() { 

        
        return (
        <React.Fragment>
               
            {this.renderTags()}    
            {this.state.tags.length==0 && "Please create anew tag!"}

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