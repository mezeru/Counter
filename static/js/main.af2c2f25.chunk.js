(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],{13:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(4),a=n.n(s),o=(n(13),n(3)),u=n(5),i=n(6),l=n(8),b=n(7),d=n(0);function h(e){var t="btn m-2 btn-sm btn-";return 0===e.counter.value?t+"warning":t+"primary"}function j(e){var t=e.counter.value;return 0===t?"Zero":t}var m=function(e){return Object(d.jsxs)(r.a.Fragment,{children:[Object(d.jsxs)("div",{class:"row",children:[Object(d.jsx)("div",{class:"col-1",children:Object(d.jsx)("span",{className:h(e),style:{fontSize:30},children:j(e)})}),Object(d.jsxs)("div",{class:"col",children:[Object(d.jsx)("button",{className:"m-2 btn btn-secondary btn-lg",onClick:function(){e.onIncre(e.counter)},children:"+"}),Object(d.jsx)("button",{className:"m-2 btn btn-lg btn-secondary",onClick:function(){e.onDecre(e.counter)},disabled:0===e.counter.value?"disabled":"",children:"-"}),Object(d.jsx)("button",{onClick:function(){return e.onDelete(e.counter.id)},className:"btn btn-danger m-2",children:"Delete"})]})]}),Object(d.jsx)("br",{})]})};var f=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{onClick:e.onNew,className:"btn btn-info btn-lg m-3",children:"Add New +"}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{onClick:e.onReset,className:"btn btn-success btn-lg m-5",children:"Reset"}),Object(d.jsx)("br",{}),e.cList.map((function(t){return Object(d.jsx)(m,{onDecre:e.onDecre,counter:t,onDelete:e.onDelete,onIncre:e.onIncre},t.id)}))]})};var v=function(e){return Object(d.jsx)("nav",{className:"navbar navbar-light bg-dark ",children:Object(d.jsx)("h2",{className:"p-3",style:{color:"white",fontFamily:"Times New Roman"},children:e.counterNum})})},O=function(e){Object(l.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var c=arguments.length,r=new Array(c),s=0;s<c;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={counters:[],count:1},e.handleIncrement=function(t){var n=Object(o.a)(e.state.counters),c=n.indexOf(t);n[c].value++,e.setState({counters:n})},e.handleDelete=function(t){var n=e.state.counters.filter((function(e){return e.id!==t}));e.setState({counters:n})},e.handleAdd=function(){var t=e.state.counters;t.push({id:e.state.count,value:0}),e.setState({counters:t}),e.state.count+=1},e.handleReset=function(){var t=e.state.counters.map((function(e){return e.value=0,e}));e.setState({counters:t})},e.handleDecrement=function(t){var n=Object(o.a)(e.state.counters),c=n.indexOf(t);n[c].value--,e.setState({counters:n})},e.handleNum=function(){var t=e.state.counters.length;return 0===t?"There are NO Counters":1===t?"There is 1 Counter":"There are "+e.state.counters.length+" Counters"},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsxs)(r.a.Fragment,{children:[Object(d.jsx)(v,{counterNum:this.handleNum()}),Object(d.jsx)("div",{className:"container",children:Object(d.jsx)(f,{onNew:this.handleAdd,onDecre:this.handleDecrement,onReset:this.handleReset,onIncre:this.handleIncrement,onDelete:this.handleDelete,cList:this.state.counters})})]})}}]),n}(c.Component),x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};n(15);a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),x()}},[[16,1,2]]]);
//# sourceMappingURL=main.af2c2f25.chunk.js.map