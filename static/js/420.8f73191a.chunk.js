"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[420],{420:function(e,n,t){t.r(n),t.d(n,{ContactsView:function(){return q}});var r=t(2791),a=t(9434),c=t(9365),s=t(2814),i="filter_label__fR+Y+",o="filter_formInput__WpZya",l=t(3329);function u(e){var n=e.onChangeFilter;return(0,l.jsxs)("label",{className:i,children:[(0,l.jsx)("span",{children:" Find contacts by name"}),(0,l.jsx)("input",{className:o,type:"text",name:"filter",onChange:n})]})}var m="ContactForm_form__zqkUM",d="ContactForm_formLabel__tYqsJ",f="ContactForm_formInput__4newl",_="ContactForm_btn__iuGIk",h=t(5705),x=t(7103),j=function(e){return e.contacts.items},b=function(e){return e.contacts.isLoading},v=function(e){return e.contacts.error},p=function(e){return e.contacts.filter},C=function(e){var n=e.name;return(0,l.jsx)(h.Bc,{name:n,render:function(e){return(0,l.jsx)("p",{children:e})}})},w=x.Ry().shape({name:x.Z_().required(),number:x.Z_().required()});function N(e){var n=e.submitForm,t=(0,a.v9)(b);return(0,l.jsx)(h.J9,{onSubmit:function(e,t){var r=e.name,a=e.number,c=t.resetForm;n({name:r,number:a}),c()},initialValues:{name:"",number:""},validationSchema:w,children:(0,l.jsxs)(h.l0,{className:m,children:[(0,l.jsxs)("label",{className:d,children:[(0,l.jsx)("span",{children:"Name"}),(0,l.jsx)(h.gN,{className:f,type:"text",name:"name"}),(0,l.jsx)(C,{name:"name",title:"title"})]}),(0,l.jsxs)("label",{className:d,children:[(0,l.jsx)("span",{children:"Number"}),(0,l.jsx)(h.gN,{className:f,type:"tel",name:"number"}),(0,l.jsx)(C,{name:"number",title:"title"})]}),(0,l.jsx)("button",{className:_,type:"submit",disabled:t,children:t?"Loading...":"Add contact"})]})})}var F="contactItem_item__ifrrP",y="contactItem_btnItem__PLQwQ";function k(e){var n=e.id,t=e.name,r=e.number,a=e.deleteBtn;return(0,l.jsxs)("li",{className:F,children:[t,": ",r,(0,l.jsx)("button",{className:y,type:"button",onClick:function(){a(n)},children:"Delete"})]})}function g(e){var n=e.contacts,t=e.deleteBtn;return(0,l.jsx)("ul",{children:n.map((function(e){var n=e.id,r=e.name,a=e.number;return(0,l.jsx)(k,{id:n,name:r,number:a,deleteBtn:t},n)}))})}var L=t(9750),I=t(7689),B="ContactsView_contactsView__FGDn+",V="ContactsView_contactsViewAll__GBQ74";function q(){var e=(0,a.v9)(j),n=(0,a.v9)(p),t=(0,a.v9)(v),i=(0,a.v9)(L.M7),o=(0,a.I0)(),m=(0,I.s0)();t&&alert("Error)"),(0,r.useEffect)((function(){o((0,s.yF)())}),[o,i,m]);var d=function(n){return e.find((function(e){return e.name.toLowerCase()===n.toLowerCase()}))};return(0,l.jsxs)("div",{className:B,children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{children:"Add a new contact"}),(0,l.jsx)(N,{submitForm:function(e){d(e.name)?alert("".concat(e.name," is already in contacts.")):o((0,s.uK)(e))}})]}),(0,l.jsxs)("div",{className:V,children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"All your contacts"}),(0,l.jsx)(u,{onChangeFilter:function(e){return o((0,c.M)(e.target.value))}})]}),(0,l.jsx)("div",{children:(0,l.jsx)(g,{contacts:e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})),deleteBtn:function(e){return o((0,s.GK)(e))}})})]})]})}}}]);
//# sourceMappingURL=420.8f73191a.chunk.js.map