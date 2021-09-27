(this["webpackJsonplist-app"]=this["webpackJsonplist-app"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),i=a.n(r),c=(a(14),a(8)),s=a(1),o=a(2),u=a(4),d=a(3),h=(a(15),a(5)),m=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).handleTextChange=e.handleTextChange.bind(Object(h.a)(e)),e.input=l.a.createRef(),e}return Object(o.a)(a,[{key:"handleTextChange",value:function(e){e.target.value=this.input.current.value}},{key:"render",value:function(){return l.a.createElement("header",null,l.a.createElement("h1",null,l.a.createElement("input",{type:"text",placeholder:"Your List Title...",onChange:this.handleTextChange,ref:this.input})))}}]),a}(n.Component);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=l.a.createElement("path",{d:"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"}),b=function(e){var t=e.svgRef,a=e.title,n=v(e,["svgRef","title"]);return l.a.createElement("svg",f({width:24,height:24,viewBox:"0 0 24 24",fill:"#333",ref:t},n),a?l.a.createElement("title",null,a):null,p)},g=l.a.forwardRef((function(e,t){return l.a.createElement(b,f({svgRef:t},e))})),O=(a.p,function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).handleChangeCheckedState=function(){e.setState((function(e){return{isChecked:!e.isChecked}}))},e.state={isChecked:!1},e.textInput=l.a.createRef(),e.checkbox=l.a.createRef(),e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.value,a=e.id,n=e.deleteListItem;e.deleteButtonRef;return l.a.createElement("div",{className:"list-item"},l.a.createElement("li",null,l.a.createElement("input",{type:"checkbox",ref:this.checkbox,checked:this.state.isChecked,onChange:this.handleChangeCheckedState,name:t,"aria-label":"List item "+(a-1)+" "+t+" complete"}),l.a.createElement("textarea",{type:"text",ref:this.textInput,defaultValue:t,className:this.state.isChecked?"checked-item":null}),l.a.createElement("button",{"aria-label":"Delete "+t,id:a,onClick:function(){n(a,t)}},l.a.createElement(g,null))))}}]),a}(n.Component)),y=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.call(this)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=(e.changeCheckedState,e.deleteListItem);e.deleteButtonRef;return l.a.createElement("div",{className:"list-container"},l.a.createElement("ul",null,this.props.listItems.map((function(e,a){return l.a.createElement(O,{value:e.value,key:e.id,id:e.id,deleteListItem:t})}))))}}]),a}(n.Component),I=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={value:"",liveValue:""},e.handleChangeValue=function(t){e.setState({value:t.target.value})},e.handleSubmit=function(t){e.props.addListItem(e.state.value),t.preventDefault(),e.setState({liveValue:e.state.value+" has been added to your list",value:""})},e}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("form",{id:"add-new",onSubmit:this.handleSubmit},l.a.createElement("input",{type:"text",placeholder:"Add new list item...",value:this.state.value,onChange:this.handleChangeValue,"aria-label":"Add new list item",id:"addNew"}),l.a.createElement("button",{type:"submit"},"Add Item"),l.a.createElement("div",{id:"live-region","aria-live":"polite","aria-relevant":"additions"},this.state.liveValue))}}]),a}(n.Component),E=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={listItems:[],deletedStatusMessage:""},e.prevListItemId=0,e.handleAddListItem=function(t){e.setState((function(a){return{listItems:[].concat(Object(c.a)(a.listItems),[{value:t,isChecked:!1,id:e.prevListItemId+=1}])}}))},e.handleDeleteListItem=function(t,a){if(e.state.listItems.length>1){var n=e.state.listItems.filter((function(e){return e.id==t})),l=e.state.listItems.indexOf(n[0]);if(l>0){var r=e.state.listItems[l+1],i=Object.values(r)[2];console.log(i),document.getElementById(i).focus()}else{var c=e.state.listItems[l+1],s=Object.values(c)[0];console.log(s),document.querySelector("input[type=checkbox][name="+s+"]").focus()}}else document.getElementById("addNew").focus();e.setState((function(e){return{listItems:e.listItems.filter((function(e){return e.id!==t})),deletedStatusMessage:a+" was removed from your list"}}))},e}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"app-container"},l.a.createElement(m,null),l.a.createElement(y,{listItems:this.state.listItems,deleteListItem:this.handleDeleteListItem,ref:this.deleteButtonRef}),l.a.createElement("div",{id:"live-region","aria-live":"polite","aria-relevant":"additions"},this.state.deletedStatusMessage),l.a.createElement(I,{addListItem:this.handleAddListItem}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.831f6a78.chunk.js.map