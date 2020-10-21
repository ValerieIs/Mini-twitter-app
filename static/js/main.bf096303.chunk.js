(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{15:function(e,t,n){},22:function(e,t,n){e.exports=n(39)},28:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(16),o=n.n(i),l=(n(27),n(28),n(8)),c=n(7),s=n(3),u=n(4),m=n(2),d=n(6),f=n(5),b=n(9),p=n(10);function h(){var e=Object(b.a)(["\n    display: flex;\n    align-items: flex-end;\n    justify-content: space-between;\n    h1 {\n        font-size: 26px;\n    }\n    h2 {\n        font-size: 1.2rem;\n        color: grey;\n    }\n"]);return h=function(){return e},e}var v=p.a.div(h()),g=function(e){var t=e.liked,n=e.allPosts;return r.a.createElement(v,null,r.a.createElement("h1",null,"Valeria Isaeva"),r.a.createElement("h2",null,n," \u0437\u0430\u043f\u0438\u0441\u0435\u0439, \u0438\u0437 \u043d\u0438\u0445 \u043f\u043e\u043d\u0440\u0430\u0432\u0438\u043b\u043e\u0441\u044c ",t," "))},j=(n(31),g),k=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={term:""},a.onUpdateSearch=a.onUpdateSearch.bind(Object(m.a)(a)),a}return Object(u.a)(n,[{key:"onUpdateSearch",value:function(e){var t=e.target.value;this.setState({term:t}),this.props.onUpdateSearch(t)}},{key:"render",value:function(){return r.a.createElement("input",{className:"form-control search-input",type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0438\u0441\u044f\u043c",onChange:this.onUpdateSearch})}}]),n}(a.Component),O=(n(32),k),y=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).buttons=[{name:"all",label:"\u0412\u0441\u0435"},{name:"like",label:"\u041f\u043e\u043d\u0440\u0430\u0432\u0438\u043b\u043e\u0441\u044c"}],a}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.buttons.map((function(t){var n=t.name,a=t.label,i=e.props,o=i.filter,l=i.onFilterSelect,c=o===n?"btn-info":"btn-outline-secondary";return r.a.createElement("button",{key:n,type:"button",className:"btn ".concat(c),onClick:function(){return l(n)}},a)}));return r.a.createElement("div",{className:"btn-group"},t)}}]),n}(a.Component),E=(n(15),y),S=n(21),I=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.label,n=e.onDelete,a=e.onToggleImportant,i=e.onToggleLiked,o="app-list-item d-flex justify-content-between";return e.important&&(o+=" important"),e.like&&(o+=" like"),r.a.createElement("div",{className:o},r.a.createElement("span",{className:"app-list-item-label",onClick:i},t),r.a.createElement("div",{className:"d-flex justify-content-center align-items-center"},r.a.createElement("button",{type:"button",className:"btn-star btn-sm",onClick:a},r.a.createElement("i",{className:"fa fa-star"})),r.a.createElement("button",{type:"button",className:"btn-trash btn-sm",onClick:n},r.a.createElement("i",{className:"fa fa-trash-o"})),r.a.createElement("i",{className:"fa fa-heart"})))}}]),n}(a.Component),x=n(41),N=function(e){var t=e.posts,n=e.onDelete,a=e.onToggleImportant,i=e.onToggleLiked,o=t.map((function(e){if("object"===typeof e&&function(e){for(var t in e)return!0;return!1}(e)){var t=e.id,o=Object(S.a)(e,["id"]);return r.a.createElement("li",{key:t,className:"list-group-item"},r.a.createElement(I,Object.assign({},o,{onDelete:function(){n(t)},onToggleImportant:function(){return a(t)},onToggleLiked:function(){return i(t)}})))}}));return r.a.createElement(x.a,{className:"app-list"},r.a.createElement("div",{className:"likes-tip"},"\u0427\u0442\u043e\u0431\u044b \u043b\u0430\u0439\u043a\u043d\u0443\u0442\u044c, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u043f\u043e\u0441\u0442"),o)},T=(n(35),N),C=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={text:""},a.onValueChange=a.onValueChange.bind(Object(m.a)(a)),a.onSubmit=a.onSubmit.bind(Object(m.a)(a)),a}return Object(u.a)(n,[{key:"onValueChange",value:function(e){this.setState({text:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault(),this.props.onAdd(this.state.text),this.setState({text:""})}},{key:"render",value:function(){return r.a.createElement("form",{className:"bottom-panel d-flex",onSubmit:this.onSubmit},r.a.createElement("input",{type:"text",placeholder:"\u041e \u0447\u0451\u043c \u0432\u044b \u0434\u0443\u043c\u0430\u0435\u0442\u0435 \u0441\u0435\u0439\u0447\u0430\u0441?",className:"form-control new-post-label",onChange:this.onValueChange,value:this.state.text}),r.a.createElement("button",{type:"submit",className:"btn btn-outline-secondary"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"))}}]),n}(a.Component),U=(n(36),C);n(37);function L(){var e=Object(b.a)(["\n    margin: 0 auto;\n    max-width: 800px;\n"]);return L=function(){return e},e}var w=p.a.div(L()),F=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={data:[{label:"Going to learn React",like:!1,important:!0,id:1},{label:"This is so good",like:!1,important:!1,id:2},{label:"I need a break",like:!0,important:!1,id:3}],term:"",filter:"all"},a.deleteItem=a.deleteItem.bind(Object(m.a)(a)),a.addItem=a.addItem.bind(Object(m.a)(a)),a.onToggleImportant=a.onToggleImportant.bind(Object(m.a)(a)),a.onToggleLiked=a.onToggleLiked.bind(Object(m.a)(a)),a.onUpdateSearch=a.onUpdateSearch.bind(Object(m.a)(a)),a.onFilterSelect=a.onFilterSelect.bind(Object(m.a)(a)),a.maxId=4,a}return Object(u.a)(n,[{key:"deleteItem",value:function(e){this.setState((function(t){var n=t.data,a=n.findIndex((function(t){return t.id===e})),r=n.slice(0,a),i=n.slice(a+1);return{data:[].concat(Object(c.a)(r),Object(c.a)(i))}}))}},{key:"addItem",value:function(e){var t={label:e,important:!1,id:this.maxId++};this.setState((function(e){var n=e.data;return{data:[].concat(Object(c.a)(n),[t])}}))}},{key:"onToggleImportant",value:function(e){this.setState((function(t){var n=t.data,a=n.findIndex((function(t){return t.id===e})),r=n[a],i=Object(l.a)(Object(l.a)({},r),{},{important:!r.important});return{data:[].concat(Object(c.a)(n.slice(0,a)),[i],Object(c.a)(n.slice(a+1)))}}))}},{key:"onToggleLiked",value:function(e){this.setState((function(t){var n=t.data,a=n.findIndex((function(t){return t.id===e})),r=n[a],i=Object(l.a)(Object(l.a)({},r),{},{like:!r.like});return{data:[].concat(Object(c.a)(n.slice(0,a)),[i],Object(c.a)(n.slice(a+1)))}}))}},{key:"searchPost",value:function(e,t){return 0===t.length?e:e.filter((function(e){return e.label.indexOf(t)>-1}))}},{key:"filterPost",value:function(e,t){return"like"===t?e.filter((function(e){return e.like})):e}},{key:"onUpdateSearch",value:function(e){this.setState({term:e})}},{key:"onFilterSelect",value:function(e){this.setState({filter:e})}},{key:"render",value:function(){var e=this.state,t=e.data,n=e.term,a=e.filter,i=t.filter((function(e){return e.like})).length,o=t.length,l=this.filterPost(this.searchPost(t,n),a);return r.a.createElement(w,null,r.a.createElement(j,{liked:i,allPosts:o}),r.a.createElement("div",{className:"search-panel d-flex"},r.a.createElement(O,{onUpdateSearch:this.onUpdateSearch}),r.a.createElement(E,{filter:a,onFilterSelect:this.onFilterSelect})),r.a.createElement(T,{posts:l,onDelete:this.deleteItem,onToggleImportant:this.onToggleImportant,onToggleLiked:this.onToggleLiked}),r.a.createElement(U,{onAdd:this.addItem}))}}]),n}(a.Component),P=(n(38),F);o.a.render(r.a.createElement(P,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.bf096303.chunk.js.map