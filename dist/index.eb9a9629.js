var t=function(t){var e,n=Object.prototype,r=n.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),s=new k(r||[]);return a(i,"_invoke",{value:j(t,n,s)}),i}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var h="suspendedStart",f="suspendedYield",m="executing",p="completed",v={};function g(){}function y(){}function w(){}var _={};l(_,i,(function(){return this}));var b=Object.getPrototypeOf,E=b&&b(b(N([])));E&&E!==n&&r.call(E,i)&&(_=E);var L=w.prototype=g.prototype=Object.create(_);function $(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function n(a,o,i,s){var c=d(t[a],t,o);if("throw"!==c.type){var l=c.arg,u=l.value;return u&&"object"==typeof u&&r.call(u,"__await")?e.resolve(u.__await).then((function(t){n("next",t,i,s)}),(function(t){n("throw",t,i,s)})):e.resolve(u).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,s)}))}s(c.arg)}var o;a(this,"_invoke",{value:function(t,r){function a(){return new e((function(e,a){n(t,r,e,a)}))}return o=o?o.then(a,a):a()}})}function j(t,e,n){var r=h;return function(a,o){if(r===m)throw new Error("Generator is already running");if(r===p){if("throw"===a)throw o;return P()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var s=S(i,n);if(s){if(s===v)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=m;var c=d(t,e,n);if("normal"===c.type){if(r=n.done?p:f,c.arg===v)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function S(t,n){var r=n.method,a=t.iterator[r];if(a===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,S(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var o=d(a,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function N(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function n(){for(;++a<t.length;)if(r.call(t,a))return n.value=t[a],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}return{next:P}}function P(){return{value:e,done:!0}}return y.prototype=w,a(L,"constructor",{value:w,configurable:!0}),a(w,"constructor",{value:y,configurable:!0}),y.displayName=l(w,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,l(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},$(x.prototype),l(x.prototype,s,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new x(u(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},$(L),l(L,c,"Generator"),l(L,i,(function(){return this})),l(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=N,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(O),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function a(r,a){return s.type="throw",s.arg=t,n.next=r,a&&(n.method="next",n.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;O(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:N(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}({});try{regeneratorRuntime=t}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}const e=async function(t){try{const e=await fetch(t),n=await e.json();if(!e.ok)throw new Error("No Data Found");return n}catch(t){throw t}},n=async function(t){try{const e=fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),n=await Promise.race([e]),r=await n.json();if(!n.ok)throw new Error(`${r.message} (${n.status})`);return r}catch(t){throw t}},r={students:{},ages:[],states:[],levels:[],genders:[],filterOpt:[],filterResults:{data:{},result:{},cummulative:{}},filterError:""},a=async function(){try{const t=await e("https://test.omniswift.com.ng/api/viewAllData");r.students=t.data.students}catch(t){throw t}};!async function(){try{let t=await n("https://test.omniswift.com.ng/api/viewResult/2");r.filterResults=t,r.filterResults.data=t.data,r.filterResults.cummulative=t.data.cummulative,r.filterResults.result=t.data.result}catch(t){throw t}}(),async function(){try{const t=await n("https://test.omniswift.com.ng/api/filterData");r.filterError=t.message}catch(t){throw t}}();var o=new class{_data;_parentElement=document.querySelector(".student-data");render(t){this._data=t;const e=this._generataMarkup();this._clear(),this._parentElement.insertAdjacentHTML("beforeend",e)}_clear(){this._parentElement.innerHTML=""}_generataMarkup(){return this._data.map(((t,e)=>{let n=[t.age,t.gender,t.level,t.state];return`\n      <tr class="row">\n        <td class="id">${(e+1).toString().padStart(2,"0")}</td>\n        <td class="surname">${t.surname}</td>\n        <td class="firstName">${t.firstname}</td>\n        ${n.map(this._generateFilterOpt).join("")}\n        <td class="action">\n       <button type="button">Download Result</button></td>      \n      </tr>`})).join("")}_generateFilterOpt(t){return` <td class="${t}">${t}</td>`}};var i=new class{_data;render(t,e){this._data=t;const n=this._generateMarkup();e.insertAdjacentHTML("beforeend",n)}_generateMarkup(){return this._data.map((t=>`<option value="${t}">${t}</option>`)).join("")}};var s=new class{_data;_parentElement;_overlay=document.querySelector(".overlay");_modal=document.querySelector(".modal");render(t,e){this._data=t,this._parentElement=e;const n=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("beforeend",n)}renderError(t){const e=`<p>${t}</p>`;return this._modal.innerHTML="",this._modal.insertAdjacentHTML("beforeend",e),this._overlay.classList.remove("hidden"),this._modal.classList.remove("hidden"),setTimeout((()=>{this._overlay.classList.add("hidden"),this._modal.classList.add("hidden")}),3e3)}_clear(){this._parentElement.innerHTML=""}_generateMarkup(){return`\n      <header class="result-heading margin-bottom flex">     \n        <img src="${this._data.logo}" alt="college-logo" class="logo" />\n      <div class="result-heading-text">\n        <h2 class="college-program fs-400 gray uppercase">\n          fremont college of education\n        </h2>\n        <h5 class="program-address gray-light fs-300">\n          No.5 Raymond Osuman Street, PMB 2191 Maitama, Abuja, Nigeria\n        </h5>\n        <h1 class="program-name grayish fs-500">\n          Post Graduate Diploma in Education\n        </h1>\n        <h6 class="program-info gray fs-300">\n          Student First Semester Statement Of Result\n        </h6>\n      </div>    \n        <img src="${this._data.profile_picture}" alt="Profile-picture" class="profile-picture" />\n    </header>\n\n    <main>\n      <div class="student-info margin-bottom">\n        <div class="column col-1">\n          <div class="info name flex grayish fs-300">\n            <p class="name">Name:</p>\n            <p>${this._data.data.firstname} ${this._data.data.surname}</p>\n          </div>\n          <div class="info level flex grayish fs-300">\n            <p class="name">Level:</p>\n            <p>${this._data.data.level}</p>\n          </div>\n        </div>\n\n        <div class="column col-2">\n          <div class="info reg-no flex grayish fs-300">\n            <p class="name">Reg. No:</p>\n            <p>${this._data.data.reg_no}</p>\n          </div>\n          <div class="info session flex grayish fs-300">\n            <p class="name">Session:</p>\n            <p>${this._data.data.session}</p>\n          </div>\n        </div>\n      </div>\n\n      <div class="result-table tables margin-bottom">\n        <table class="customTable result margin-bottom">\n          <thead>\n            <tr>\n              <th>S/N</th>\n              <th>Course Code</th>\n              <th>Course Title</th>\n              <th>Unit</th>\n              <th>Grade</th>\n              <th>Total Point</th>\n            </tr>\n          </thead>\n          <tbody class="student-data">${this._data.result.map(((t,e)=>`\n            <tr class="grayish">\n              <td class="${e+1}">${e+1}</td>\n              <td class="${t.coursecode}">${t.coursecode}</td>\n              <td class="${t.title}">${t.title}</td>\n              <td class="${t.credit_unit}">${t.credit_unit}</td>\n              <td class="${t.grade}">${t.grade}</td>\n              <td class="${t.total_point}">${t.total_point}</td>\n            </tr>\n            `)).join("")}\n            \n          </tbody>\n        </table>\n\n        <table class="customTable result result-unit">\n          <thead>\n            <tr>\n              <th>UNTS</th>\n              <th>UNTD</th>\n              <th>GPTS</th>\n              <th>GPTD</th>\n              <th>GPATS</th>\n              <th>GPATD</th>\n            </tr>\n          </thead>\n          <tbody class="student-data">\n            <tr class="grayish">\n              <td class="id">${this._data.cummulative.unts}</td>\n              <td class="id">${this._data.cummulative.unts}</td>\n              <td class="id">${this._data.cummulative.unts}</td>\n              <td class="id">${this._data.cummulative.unts}</td>\n              <td class="id">${this._data.cummulative.unts}</td>\n              <td class="id">${this._data.cummulative.gpatd}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <div class="flex remark fs-300">\n        <h4 class="grayish">Remarks:</h4>\n        <h4>${this._data.cummulative.remarks}</h4>\n      </div>\n\n      <div class="registrar">\n        <h4 class="fs-300 grayish">Registrar</h4>\n      </div>\n    </main>\n      `}};const c=document.querySelector("body"),l=document.querySelector(".form-horizontal"),u=document.getElementById("gender"),d=document.getElementById("age"),h=document.getElementById("state"),f=document.getElementById("level"),m=document.querySelector("table");window.addEventListener("load",(async function(t){try{await a(),o.render(r.students)}catch(t){console.error(t)}})),window.addEventListener("load",(async function(){try{await async function(){try{const t=await e("https://test.omniswift.com.ng/api/viewAllAges"),n=await e("https://test.omniswift.com.ng/api/viewAllLevels"),o=await e("https://test.omniswift.com.ng/api/viewAllStates");r.ages=Object.entries(t.data).map((([t,e])=>e.age)),r.levels=Object.entries(n.data).map((([t,e])=>e.level)),r.states=Object.entries(o.data).map((([t,e])=>e.name)),await a();const i=r.students.map((t=>t.gender)),s=new Set(i);s.delete("female0"),r.genders=Array.from(s)}catch(t){throw t}}(),i.render(r.ages,d),i.render(r.genders,u),i.render(r.states,h),i.render(r.levels,f)}catch(t){console.error(t)}})),l.addEventListener("submit",(async function(t){try{t.preventDefault();const i=+d.options[d.selectedIndex].value,c=f.options[f.selectedIndex].value,m=u.options[u.selectedIndex].value,p=h.options[h.selectedIndex].value,v=new Set([i,m,p,c]),g=Array.from(v).filter((t=>t));if(!g.length)return s.renderError(r.filterError),o.render(r.students);await a();const y=(e=r.students,n=g,e.filter((t=>n.every((e=>Object.values(t).includes(e))))));o.render(y),l.reset()}catch(t){s.renderError(t)}var e,n})),m.addEventListener("click",(function(t){const e=t.target.closest("button");e&&(console.log(e),s.render(r.filterResults,c),c.classList.add("main"))}));
//# sourceMappingURL=index.eb9a9629.js.map