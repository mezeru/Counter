import React from 'react';

function Counter(props){
    
 
        return ( 
            <React.Fragment>
                 <div class="row">
                 <div class="col-1">
                <span className={handleColour(props)} style={{fontSize: 30}}>{handleZero(props)}</span>
                </div>
                <div class="col">
                <button className="m-2 btn btn-secondary btn-lg" onClick={() => { props.onIncre(props.counter) }} >+</button>
                <button className="m-2 btn btn-lg btn-secondary" onClick={() => { props.onDecre(props.counter)}} disabled= {props.counter.value === 0 ? "disabled":""} >-</button>
                <button onClick={() => props.onDelete(props.counter.id)} className="btn btn-danger m-2">Delete</button>
                </div>
                </div>
                <br/>
            </React.Fragment>
         );

        
    }

    function handleColour(props){
        let fir = "btn m-2 btn-sm btn-";

        if(props.counter.value === 0){
            return fir + "warning";
        }
        return fir+"primary";
    }

    function handleZero(props){ 
        const {value} = props.counter;
        if (value === 0){
            return "Zero"
        }
        return value
    }


 
export default Counter;