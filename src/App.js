import Counters from './components/counters.jsx'
import React, { Component } from 'react';
import Navbar from './components/navbar.jsx'

class App extends Component {
  
  state = { 
    counters:[],
    count: 1
 }

 handleIncrement = (counter) =>{
     let counters = [...this.state.counters];
     const index = counters.indexOf(counter);
     counters[index].value++;
     this.setState({counters});

     
 };

 handleDelete = (counterId) => {
     const counters = this.state.counters.filter(counter => counter.id !== counterId);
     this.setState({ counters })
 };

 handleAdd = () => {
    let counters = this.state.counters;
    counters.push({id:this.state.count,value:0});
    this.setState({counters});
    this.state.count += 1;
 };

 handleReset = () => {
     const counters = this.state.counters.map(counter => {counter.value = 0; return counter; } );

     this.setState({counters})
 }

 handleDecrement = (counter) =>{
  let counters = [...this.state.counters];
  const index = counters.indexOf(counter);
  counters[index].value--;
  this.setState({counters});
 }

 handleNum = () =>{

     const no = this.state.counters.length;
     if (no === 0){
         return "There are NO Counters"
     }

     if (no === 1){
         return "There is 1 Counter"
     }

     return "There are "+ this.state.counters.length +" Counters"
 }


  render() { 
    return (     
    <React.Fragment>
      <Navbar counterNum={this.handleNum()} />
    <div className = "container">
      <Counters onNew={this.handleAdd} onDecre={this.handleDecrement} onReset={this.handleReset} onIncre={this.handleIncrement} onDelete={this.handleDelete} cList={this.state.counters} />
      </div>
    </React.Fragment>
     );
  }
}
 
export default App;