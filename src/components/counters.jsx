import Counter from './counter.jsx';

function Counters(props){
    
    
        return ( <div>             
                <button onClick={props.onNew} className= "btn btn-info btn-lg m-3">Add New +</button>
                <br />
                <button onClick={props.onReset} className= "btn btn-success btn-lg m-5">Reset</button>
                <br />
        {props.cList.map(counter => <Counter key={counter.id} onDecre={props.onDecre} counter={counter} onDelete={props.onDelete} onIncre={props.onIncre} />)}
                </div>
         );
    
}
 
export default Counters;