import"./assets/styles-72347031.js";const a={email:"",message:""},e=document.querySelector(".feedback-form"),l=e.elements.email,o=e.elements.message,s="feedback-form-state",t=JSON.parse(localStorage.getItem(s))??{};t.email&&(e.elements.email.value=t.email,a.email=t.email);t.message&&(e.elements.message.value=t.message,a.message=t.message);e.addEventListener("input",m=>{a.email=l.value,a.message=o.value,localStorage.setItem(s,JSON.stringify(a))});e.addEventListener("submit",m=>{m.preventDefault(),console.log(a),localStorage.removeItem(s),e.reset()});
//# sourceMappingURL=commonHelpers2.js.map
