webpackJsonp([0],{200:function(e,r,n){"use strict";n.d(r,"a",function(){return t});var t="ON_DRAG_END"},225:function(e,r,n){n(226),e.exports=n(428)},428:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=n(9),a=n.n(t),o=n(433),i=(n.n(o),n(445)),c=(n.n(i),n(450)),d=(n.n(c),n(472)),u=n.n(d),l=Object(c.configureStore)();Object(o.render)(a.a.createElement(i.AppContainer,null,a.a.createElement(u.a,{store:l})),document.getElementById("root"))},450:function(e,r,n){e.exports=n(451)},451:function(e,r,n){"use strict";function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(a.createStore)(c.a,e,u)}Object.defineProperty(r,"__esModule",{value:!0}),r.configureStore=t;var a=n(97),o=n(199),i=n.n(o),c=n(467),d=[i.a],u=a.applyMiddleware.apply(void 0,d)},467:function(e,r,n){"use strict";var t=n(97),a=n(468);r.a=Object(t.combineReducers)({lanes:a.a})},468:function(e,r,n){"use strict";function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e){if(Array.isArray(e)){for(var r=0,n=Array(e.length);r<e.length;r++)n[r]=e[r];return n}return Array.from(e)}var o=n(469),i=n.n(o),c=n(200),d=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},u=function(){function e(e,r){var n=[],t=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(t=(i=c.next()).done)&&(n.push(i.value),!r||n.length!==r);t=!0);}catch(e){a=!0,o=e}finally{try{!t&&c.return&&c.return()}finally{if(a)throw o}}return n}return function(r,n){if(Array.isArray(r))return r;if(Symbol.iterator in Object(r))return e(r,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),l=function(e){return Array.from({length:e},function(e,r){return r}).map(function(){return{id:i()()}})},s={"000":{id:"000",cards:l(4)},"001":{id:"001",cards:l(4)},"002":{id:"002",cards:l(4)}},p=function(e,r,n){return d({},e,t({},r.droppableId,d({},e[r.droppableId],{cards:function(e,r,n){var t=[].concat(a(e)),o=t.splice(r,1),i=u(o,1),c=i[0];return t.splice(n,0,c),t}(e[r.droppableId].cards,r.index,n.index)})))},f=function(e,r,n,a){var o,i=e[n.droppableId].cards.find(function(e){return e.id===r});return d({},e,(o={},t(o,n.droppableId,d({},e[n.droppableId],{cards:e[n.droppableId].cards.filter(function(e){return e.id!==r})})),t(o,a.droppableId,d({},e[a.droppableId],{cards:e[a.droppableId].cards.slice(0,a.index).concat([i]).concat(e[a.droppableId].cards.slice(a.index))})),o))};r.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,r=arguments[1],n=r.type,t=r.payload;switch(n){case c.a:return t.src.droppableId===t.dest.droppableId?p(e,t.src,t.dest):f(e,t.cardId,t.src,t.dest);default:return e}}},472:function(e,r,n){e.exports=n(473)},473:function(e,r,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var t=n(9),a=n.n(t),o=n(20),i=n.n(o),c=n(65),d=n(488),u={store:i.a.shape().isRequired},l=function(e){var r=e.store;return a.a.createElement(c.Provider,{store:r},a.a.createElement(d.a,null))};l.propTypes=u,r.default=l},488:function(e,r,n){"use strict";var t=n(9),a=n.n(t),o=n(65),i=n(20),c=n.n(i),d=n(132),u=(n.n(d),n(587)),l=n(589),s=function(e){},p={color:"#424242"},f={display:"flex"},b=function(e){var r=e.lanes,n=e.onDragEnd;return a.a.createElement(d.DragDropContext,{onDragStart:s,onDragEnd:n},a.a.createElement("h1",{style:p},"Board"),a.a.createElement("div",{style:f},Object.keys(r).map(function(e){return a.a.createElement(u.a,{key:e,lane:r[e]})})))};b.propTypes={lanes:c.a.shape().isRequired,onDragEnd:c.a.func.isRequired},r.a=Object(o.connect)(function(e){return{lanes:e.lanes}},function(e){return{onDragEnd:function(r){r.destination&&(console.log(r),e(l.a(r.draggableId,r.source,r.destination)))}}})(b)},587:function(e,r,n){"use strict";var t=n(9),a=n.n(t),o=n(20),i=n.n(o),c=n(132),d=(n.n(c),n(588)),u=function(e){return{border:e?"5px solid #03A9F4":"5px solid #424242",padding:"1rem",width:"20rem",color:"#424242",marginRight:"2rem"}},l=function(e){var r=e.lane;return a.a.createElement(c.Droppable,{droppableId:r.id,type:"CARD"},function(e,n){return a.a.createElement("div",{ref:e.innerRef,style:u(n.isDraggingOver)},a.a.createElement("h1",null,"Lane header"),r.cards.map(function(e){return a.a.createElement(d.a,{key:e.id,id:e.id})}),e.placeholder)})};l.propTypes={lane:i.a.shape().isRequired},r.a=l},588:function(e,r,n){"use strict";var t=n(9),a=n.n(t),o=n(20),i=n.n(o),c=n(132),d=(n.n(c),Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}),u=function(e,r){return d({userSelect:"none",padding:"1rem",margin:"0 0 1rem 0",background:r?"#03A9F4":"#424242",cursor:"pointer",textAlign:"center",color:"#fff",fontSize:"20px",borderRadius:"2px"},e)},l=function(e){var r=e.id;return a.a.createElement(c.Draggable,{draggableId:r,type:"CARD"},function(e,n){return a.a.createElement("div",null,a.a.createElement("div",d({ref:e.innerRef,style:u(e.draggableStyle,n.isDragging)},e.dragHandleProps),a.a.createElement("p",null,r)),e.placeholder)})};l.propTypes={id:i.a.string.isRequired},r.a=l},589:function(e,r,n){"use strict";n.d(r,"a",function(){return a});var t=n(200),a=function(e,r,n){return{type:t.a,payload:{cardId:e,src:r,dest:n}}}}},[225]);