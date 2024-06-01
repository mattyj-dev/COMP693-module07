(()=>{"use strict";var e,t,n,r={295:(e,t,n)=>{var r=n(294),l=n(745),o=n(655),a=n(307),i=n(459),c=n(250),u=n(25),m=n(977),s=n(147),p=n(5),f=n(881);function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(){var e,t,n=(0,c.s0)(),l=(e=(0,o.lr)(),t=1,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,o=[],a=!0,i=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){i=!0,l=e}finally{try{a||null==n.return||n.return()}finally{if(i)throw l}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0];return r.createElement(u.Z,null,r.createElement(u.Z.Header,{as:"h5"},"Filter"),r.createElement(u.Z.Body,null,r.createElement(u.Z.Text,null,"Currently Employed:"," ",r.createElement("select",{value:l.get("employed")||"",onChange:function(e){return n(e.target.value?"/employees?employed=".concat(e.target.value):"/employees")}},r.createElement("option",{value:""},"All"),r.createElement("option",{value:"true"},"Employed"),r.createElement("option",{value:"false"},"Not Employed")))))}var h=n(682),E=n(51),b=n(555);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Z(e,t){return Z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Z(e,t)}function O(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return w(e)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Z(e,t)}(i,e);var t,n,l,o,a=(l=i,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(l);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return O(this,e)});function i(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(e=a.call(this)).state={modalVisible:!1},e.handleSubmit=e.handleSubmit.bind(w(e)),e.handleShowModal=e.handleShowModal.bind(w(e)),e.handleHideModal=e.handleHideModal.bind(w(e)),e}return t=i,(n=[{key:"handleShowModal",value:function(){this.setState({modalVisible:!0})}},{key:"handleHideModal",value:function(){this.setState({modalVisible:!1})}},{key:"handleSubmit",value:function(e){var t=document.forms.employeeAdd,n={name:t.name.value,extension:t.ext.value,email:t.email.value,title:t.title.value};this.props.createEmployee(n),t.name.value="",t.ext.value="",t.email.value="",t.title.value="",this.setState({modalVisible:!1})}},{key:"render",value:function(){return r.createElement(r.Fragment,null,r.createElement("div",{className:"addEmployee"},r.createElement(p.Z,{variant:"primary",size:"sm",onClick:this.handleShowModal},"New Employee")),r.createElement(f.Z,{show:this.state.modalVisible,onHide:this.handleHideModal,centered:!0},r.createElement(f.Z.Header,{closeButton:!0},r.createElement(f.Z.Title,null,"Add New Employee")),r.createElement(f.Z.Body,null,r.createElement(h.Z,{fluid:!0},r.createElement("form",{name:"employeeAdd"},r.createElement(E.Z,null,r.createElement(b.Z,{md:3},"Name:"),r.createElement(b.Z,{md:"auto"},r.createElement("input",{type:"text",name:"name"}))),r.createElement(E.Z,null,r.createElement(b.Z,{md:3},"Extension:"),r.createElement(b.Z,{md:"auto"},r.createElement("input",{type:"text",name:"ext",maxLength:4}))),r.createElement(E.Z,null,r.createElement(b.Z,{md:3},"Email: "),r.createElement(b.Z,{md:"auto"},r.createElement("input",{type:"text",name:"email"}))),r.createElement(E.Z,null,r.createElement(b.Z,{md:3},"Title: "),r.createElement(b.Z,{md:"auto"},r.createElement("input",{type:"text",name:"title"})))))),r.createElement(f.Z.Footer,null,r.createElement(p.Z,{type:"submit",variant:"success",size:"sm",className:"mt-4",onClick:this.handleSubmit},"Add Employee"))))}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),i}(r.Component);function x(e){return x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(e)}function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t,n){return t&&P(e.prototype,t),n&&P(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function T(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&M(e,t)}function M(e,t){return M=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},M(e,t)}function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=A(e);if(t){var l=A(this).constructor;n=Reflect.construct(r,arguments,l)}else n=r.apply(this,arguments);return H(this,n)}}function H(e,t){if(t&&("object"===x(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return D(e)}function D(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A(e){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},A(e)}function R(e){var t=(0,c.TH)().search,n=new URLSearchParams(t).get("employed"),l=e.employees.filter((function(e){return!n||String(e.currentlyEmployed)===n})).map((function(t){return r.createElement(B,{key:t._id,employee:t,deleteEmployee:e.deleteEmployee})}));return r.createElement(u.Z,null,r.createElement(u.Z.Header,{as:"h5"},"All Employees",r.createElement(m.Z,{bg:"secondary"},l.length)),r.createElement(u.Z.Body,null,r.createElement(u.Z.Text,null,r.createElement(s.Z,{striped:!0,size:"sm"},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Name"),r.createElement("th",null,"Extension"),r.createElement("th",null,"Email"),r.createElement("th",null,"Title"),r.createElement("th",null,"Date Hired"),r.createElement("th",null,"Currently Employed?"),r.createElement("th",null))),r.createElement("tbody",null,l)))))}var B=function(e){T(n,e);var t=C(n);function n(e){var r;return k(this,n),(r=t.call(this,e)).state={showModal:!1},r.toggleModal=r.toggleModal.bind(D(r)),r.handleDelete=r.handleDelete.bind(D(r)),r}return _(n,[{key:"toggleModal",value:function(){this.setState((function(e){return{showModal:!e.showModal}}))}},{key:"handleDelete",value:function(){this.props.deleteEmployee(this.props.employee._id),this.toggleModal()}},{key:"render",value:function(){return r.createElement(r.Fragment,null,r.createElement("tr",null,r.createElement("td",null,r.createElement(o.rU,{to:"/edit/".concat(this.props.employee._id)},this.props.employee.name)),r.createElement("td",null,this.props.employee.extension),r.createElement("td",null,this.props.employee.email),r.createElement("td",null,this.props.employee.title),r.createElement("td",null,this.props.employee.dateHired.toDateString()),r.createElement("td",null,this.props.employee.currentlyEmployed?"Yes":"No"),r.createElement("td",null,r.createElement(p.Z,{variant:"danger",size:"sm",onClick:this.toggleModal}," X "))),r.createElement(f.Z,{show:this.state.showModal,onHide:this.toggleModal},r.createElement(f.Z.Header,{closeButton:!0},r.createElement(f.Z.Title,null,"Delete Employee")),r.createElement(f.Z.Body,null,"Are you sure you want to delete this employee?"),r.createElement(f.Z.Footer,null,r.createElement(p.Z,{variant:"secondary",onClick:this.toggleModal},"Cancel"),r.createElement(p.Z,{variant:"danger",onClick:this.handleDelete},"Yes"))))}}]),n}(r.Component);const V=function(e){T(n,e);var t=C(n);function n(){var e;return k(this,n),(e=t.call(this)).state={employees:[]},e.createEmployee=e.createEmployee.bind(D(e)),e.deleteEmployee=e.deleteEmployee.bind(D(e)),e}return _(n,[{key:"componentDidMount",value:function(){this.loadData()}},{key:"loadData",value:function(){var e=this;fetch("/api/employees").then((function(e){return e.json()})).then((function(t){console.log("Total count of employees:",t.count),t.employees.forEach((function(e){e.dateHired=new Date(e.dateHired)})),e.setState({employees:t.employees})})).catch((function(e){console.log(e)}))}},{key:"createEmployee",value:function(e){var t=this;fetch("/api/employees",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){e.employee.dateHired=new Date(e.employee.dateHired);var n=t.state.employees.concat(e.employee);t.setState({employees:n}),console.log("Total count of employees:",n.length)})).catch((function(e){console.log(e)}))}},{key:"deleteEmployee",value:function(e){var t=this;fetch("/api/employees/".concat(e),{method:"DELETE"}).then((function(e){e.ok?t.loadData():console.log("Failed to delete employee.")}))}},{key:"render",value:function(){return r.createElement(r.Fragment,null,r.createElement(S,{createEmployee:this.createEmployee}),r.createElement(d,null),r.createElement(R,{employees:this.state.employees,deleteEmployee:this.deleteEmployee}))}}]),n}(r.Component);function N(){return r.createElement(u.Z,null,r.createElement(u.Z.Header,{as:"h5"},"Employee Reports"),r.createElement(u.Z.Body,null,r.createElement(u.Z.Text,null,"This is a placeholder for the employee report.")))}var F=n(957);function U(e){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U(e)}function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function I(e,t){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},I(e,t)}function L(e,t){if(t&&("object"===U(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return W(e)}function W(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function J(e){return J=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},J(e)}var Y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&I(e,t)}(i,e);var t,n,l,o,a=(l=i,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=J(l);if(o){var n=J(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return L(this,e)});function i(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(e=a.call(this)).state={employee:[],alertVisible:!1,alertColor:"success",alertMessage:""},e.handleSubmit=e.handleSubmit.bind(W(e)),e}return t=i,(n=[{key:"componentDidMount",value:function(){this.loadData()}},{key:"loadData",value:function(){var e=this,t=window.location.pathname.split("/")[2];fetch("/api/employees/".concat(t)).then((function(e){return e.json()})).then((function(t){t.employee.dateHired=new Date(t.employee.dateHired),e.setState({employee:t.employee})})).catch((function(e){console.log(e)}))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var n=document.forms.employeeUpdate,r=n.id.value,l=n.name.value,o=n.extension.value,a=n.email.value,i=n.title.value,c=n.currentlyEmployed.checked,u="/api/employees/".concat(r);fetch(u,{method:"PATCH",headers:{Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},body:JSON.stringify({name:l,extension:o,email:a,title:i,currentlyEmployed:c})}).then((function(e){return e.json()})).then((function(e){t.setState({alertVisible:!0,alertMessage:e.msg})}))}},{key:"render",value:function(){var e=this;return r.createElement(u.Z,null,r.createElement(u.Z.Header,{as:"h5"},"Edit ",this.state.employee.name),r.createElement(u.Z.Body,null,r.createElement(u.Z.Text,null,r.createElement(h.Z,{fluid:!0},r.createElement("form",{name:"employeeUpdate",onSubmit:this.handleSubmit},r.createElement(E.Z,null,r.createElement(b.Z,{md:2},"ID:"),r.createElement(b.Z,{md:"auto"},r.createElement("input",{type:"text",name:"id",readOnly:"readOnly",defaultValue:this.state.employee._id})," ")),r.createElement(E.Z,null,r.createElement(b.Z,{md:2},"Name:"),r.createElement(b.Z,{md:"auto"},r.createElement("input",{type:"text",name:"name",defaultValue:this.state.employee.name}))),r.createElement(E.Z,null,r.createElement(b.Z,{md:2},"Extension:"),r.createElement(b.Z,{md:"auto"},r.createElement("input",{type:"text",name:"extension",defaultValue:this.state.employee.extension}))),r.createElement(E.Z,null,r.createElement(b.Z,{md:2},"Email:"),r.createElement(b.Z,{md:"auto"},r.createElement("input",{type:"text",name:"email",defaultValue:this.state.employee.email}))),r.createElement(E.Z,null,r.createElement(b.Z,{md:2},"Title:"),r.createElement(b.Z,{md:"auto"},r.createElement("input",{type:"text",name:"title",defaultValue:this.state.employee.title}))),r.createElement(E.Z,null,r.createElement(b.Z,{md:2},"Date Hired:"),r.createElement(b.Z,{md:"auto"},r.createElement("input",{type:"text",name:"dateHired",readOnly:"readOnly",defaultValue:this.state.employee.dateHired}))),r.createElement(E.Z,null,r.createElement(b.Z,{md:2},"Currently Employed?"),r.createElement(b.Z,{md:"auto"},r.createElement("input",{type:"checkbox",name:"currentlyEmployed",defaultChecked:this.state.employee.currentlyEmployed}))),r.createElement(p.Z,{type:"submit",variant:"primary",size:"sm",className:"my-3",value:"Update"},"Update Employee"),r.createElement(F.Z,{variant:this.state.alertColor,show:this.state.alertVisible,onClose:function(){return e.setState({alertVisible:!1})},dismissible:!0},this.state.alertMessage))))))}}])&&z(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),i}(r.Component);function K(){var e=function(){return r.createElement("h1",null,"Page Not Found")};return r.createElement(c.Z5,null,r.createElement(c.AW,{path:"/employees",element:r.createElement(V,null)}),r.createElement(c.AW,{path:"/edit/:id",element:r.createElement(Y,null)}),r.createElement(c.AW,{path:"/report",element:r.createElement(N,null)}),r.createElement(c.AW,{path:"/",element:r.createElement(c.Fg,{replace:!0,to:"/employees"})}),r.createElement(c.AW,{path:"*",element:r.createElement(e,null)}))}function X(){return r.createElement(a.Z,{bg:"dark",variant:"dark"},r.createElement(a.Z.Brand,{href:"/"},"Employee Management Application"),r.createElement(i.Z,null,r.createElement(i.Z.Link,{href:"/employees"},"All Employees"),r.createElement(i.Z.Link,{href:"/report"},"Reports")))}function $(){return r.createElement("div",null,r.createElement(X,null),r.createElement(K,null))}(0,l.s)(document.getElementById("content")).render(r.createElement(o.VK,null,r.createElement(r.StrictMode,null,r.createElement($,null))))}},l={};function o(e){var t=l[e];if(void 0!==t)return t.exports;var n=l[e]={exports:{}};return r[e](n,n.exports,o),n.exports}o.m=r,e=[],o.O=(t,n,r,l)=>{if(!n){var a=1/0;for(m=0;m<e.length;m++){for(var[n,r,l]=e[m],i=!0,c=0;c<n.length;c++)(!1&l||a>=l)&&Object.keys(o.O).every((e=>o.O[e](n[c])))?n.splice(c--,1):(i=!1,l<a&&(a=l));if(i){e.splice(m--,1);var u=r();void 0!==u&&(t=u)}}return t}l=l||0;for(var m=e.length;m>0&&e[m-1][2]>l;m--)e[m]=e[m-1];e[m]=[n,r,l]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var l=Object.create(null);o.r(l);var a={};t=t||[null,n({}),n([]),n(n)];for(var i=2&r&&e;"object"==typeof i&&!~t.indexOf(i);i=n(i))Object.getOwnPropertyNames(i).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,o.d(l,a),l},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={624:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,l,[a,i,c]=n,u=0;if(a.some((t=>0!==e[t]))){for(r in i)o.o(i,r)&&(o.m[r]=i[r]);if(c)var m=c(o)}for(t&&t(n);u<a.length;u++)l=a[u],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(m)},n=self.webpackChunkmodule01=self.webpackChunkmodule01||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var a=o.O(void 0,[736],(()=>o(295)));a=o.O(a)})();
//# sourceMappingURL=employees.bundle.js.map