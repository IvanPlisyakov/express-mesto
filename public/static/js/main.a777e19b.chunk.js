(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{30:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n(1),r=n.n(i),s=n(21),c=n.n(s),o=(n(30),n(23)),l=n(2),u=n(3),d=n(8),m=n.p+"static/media/header-logo.c2821b38.svg",h=n.p+"static/media/Header__button-menu.54f0a7ac.svg",f=n.p+"static/media/Header__button-close.6f2e1d54.svg";var j=function(e){var t=r.a.useState(null),n=Object(l.a)(t,2),i=n[0],s=n[1],c=r.a.useState(null),o=Object(l.a)(c,2),j=o[0],b=o[1],_=Object(u.g)(),p=r.a.useState(document.documentElement.clientWidth),O=Object(l.a)(p,2),g=O[0],x=O[1];function v(){x(document.documentElement.clientWidth)}r.a.useEffect((function(){return window.addEventListener("resize",v),function(){window.removeEventListener("resize",v)}}),[]);var N=Object(a.jsx)("div",{className:"header__menu-overlay ".concat(!0===j&&"header__menu-overlay_active"," ").concat(!1===j&&"header__menu-overlay_inActive"),children:Object(a.jsxs)("div",{className:"header__menu",children:[Object(a.jsx)("p",{className:"header__menu-mail",children:e.userEmail}),Object(a.jsx)("button",{className:"header__menu-btn",onClick:function(){localStorage.removeItem("jwt"),_.push("/signin")},children:"\u0412\u044b\u0439\u0442\u0438"})]})});return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(u.d,{children:Object(a.jsx)(u.b,{exact:!0,path:"/",children:g<882&&N})}),Object(a.jsx)("header",{className:"header",children:Object(a.jsxs)("div",{className:"header__column",children:[Object(a.jsx)("img",{className:"header__logo",src:m,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f Mesto Russia"}),Object(a.jsxs)(u.d,{children:[Object(a.jsxs)(u.b,{exact:!0,path:"/",children:[Object(a.jsx)("img",{className:"header__button-menu ".concat(!0===j&&"header__button-menu_active"," ").concat(!1===j&&"header__button-menu_inActive"),src:i?f:h,onClick:function(){b(null===j||!j),setTimeout((function(){s(!i)}),500)},alt:"\u0418\u043a\u043e\u043d\u043a\u0430 \u043c\u0435\u043d\u044e"}),g>=882&&N]}),Object(a.jsx)(u.b,{path:"/signup",children:Object(a.jsx)(d.b,{className:"header__link",to:"/signin",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(a.jsx)(u.b,{path:"/signin",children:Object(a.jsx)(d.b,{className:"header__link",to:"/signup",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})]})]})})]})};var b=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("p",{className:"footer__copyright",children:"\xa9 2021 Mesto Russia"})})},_=r.a.createContext(),p=n.p+"static/media/element__img-cap.e690a784.svg",O=n.p+"static/media/element__img-urn.c87bb95f.svg";var g=function(e){var t=r.a.useContext(_),n=e.card.owner._id===t._id;return Object(a.jsxs)("div",{className:"element",children:[Object(a.jsx)("div",{className:"element__overlay",children:Object(a.jsx)("img",{className:"element__image",src:e.card.link,onClick:function(){e.onCardClick(e.card)},alt:""})}),Object(a.jsxs)("button",{className:"element__btn-delete ".concat(!n&&"element__btn-delete_inactive"),type:"button",onClick:function(){e.onCardDelete(e.card)},children:[Object(a.jsx)("img",{className:"element__img-cap",src:p,alt:""}),Object(a.jsx)("img",{className:"element__img-urn",src:O,alt:""})]}),Object(a.jsxs)("div",{className:"element__column",children:[Object(a.jsx)("h4",{className:"element__title",children:e.card.name}),Object(a.jsxs)("div",{className:"element__column-like",children:[Object(a.jsx)("button",{className:"element__btn-like ".concat(e.card.likes.some((function(e){return e._id===t._id}))&&"element__btn-like_active"),type:"button",onClick:function(){e.onCardLike(e.card)}}),Object(a.jsx)("p",{className:"element__number-like",children:e.card.likes.length})]})]})]})};var x=function(e){var t=r.a.useContext(_);return Object(a.jsxs)("main",{className:"main",children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsx)("div",{className:"profile__overlay",children:Object(a.jsxs)("button",{className:"profile__avatar-button",type:"button",onClick:e.onEditAvatar,children:[Object(a.jsx)("img",{className:"profile__avatar",src:t?t.avatar:"https://i.gifer.com/g0R5.gif",alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u0432\u0430\u0448\u0435\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b"}),Object(a.jsx)("div",{className:"profile__avatar-icon"})]})}),Object(a.jsxs)("div",{className:"profile__column",children:[Object(a.jsxs)("div",{className:"profile__info",children:[Object(a.jsx)("h1",{className:"profile__user-name",children:t?t.name:""}),Object(a.jsx)("button",{className:"profile__edit-button",type:"button",onClick:e.onEditProfile}),Object(a.jsx)("p",{className:"profile__user-info",children:t?t.about:""})]}),Object(a.jsx)("button",{className:"profile__add-button",type:"button",onClick:e.onAddPlace})]})]}),Object(a.jsx)("section",{className:"elements",children:e.cards&&e.cards.map((function(t){return Object(a.jsx)(g,{onCardLike:e.onCardLike,onCardDelete:e.onCardDelete,onCardClick:e.onCardClick,card:t},t._id)}))})]})};var v=function(e){return Object(a.jsx)("section",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen&&"popup_opened"),children:Object(a.jsxs)("form",{className:"profile-form",name:e.formName,onSubmit:e.onSubmit,noValidate:!0,children:[Object(a.jsx)("h2",{className:"profile-form__title",children:e.title}),e.children,Object(a.jsx)("button",{className:"profile-form__btn-save",type:"submit",children:e.buttonSubmitText}),Object(a.jsx)("button",{className:"profile-form__btn-close",type:"reset",onClick:e.onClose})]})})};var N=function(e){var t=r.a.useRef("");return Object(a.jsx)(v,{isOpen:e.isOpen,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},formName:"avatar-\u0441hange",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonSubmitText:"\u0421\u043e\u0445\u0430\u043d\u0438\u0442\u044c",onClose:e.onClose,children:Object(a.jsxs)("label",{className:"profile-form__field",children:[Object(a.jsx)("input",{className:"profile-form__user profile-form__user_data_info",id:"avatar-input",ref:t,type:"url",name:"adding-a-picture",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",required:!0}),Object(a.jsx)("span",{className:"profile-form__user-error",id:"avatar-input-error"})]})})};var C=function(e){var t=r.a.useState(""),n=Object(l.a)(t,2),i=n[0],s=n[1],c=r.a.useState(""),o=Object(l.a)(c,2),u=o[0],d=o[1],m=r.a.useContext(_);return r.a.useEffect((function(){s(m.name||""),d(m.about||"")}),[m]),Object(a.jsxs)(v,{isOpen:e.isOpen,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:i,about:u})},formName:"profile-\u0441hange",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonSubmitText:"\u0421\u043e\u0445\u0430\u043d\u0438\u0442\u044c",onClose:e.onClose,children:[Object(a.jsxs)("label",{className:"profile-form__field",children:[Object(a.jsx)("input",{className:"profile-form__user profile-form__user_data_name",id:"name-input",value:i,onChange:function(e){s(e.target.value)},type:"text",name:"profile-\u0441hange",minLength:"2",maxLength:"40",required:!0}),Object(a.jsx)("span",{className:"profile-form__user-error",id:"name-input-error"})]}),Object(a.jsxs)("label",{className:"profile-form__field",children:[Object(a.jsx)("input",{className:"profile-form__user profile-form__user_data_info",id:"info-input",value:u,onChange:function(e){d(e.target.value)},type:"text",name:"profile-\u0441hange",minLength:"2",maxLength:"200",required:!0}),Object(a.jsx)("span",{className:"profile-form__user-error",id:"info-input-error"})]})]})};var S=function(e){var t=r.a.useState(""),n=Object(l.a)(t,2),i=n[0],s=n[1],c=r.a.useState(""),o=Object(l.a)(c,2),u=o[0],d=o[1];return Object(a.jsxs)(v,{isOpen:e.isOpen,onSubmit:function(t){t.preventDefault(),e.onAddPlace({title:i,link:u}),s(""),d("")},formName:"adding-a-picture",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonSubmitText:"\u0421\u043e\u0445\u0430\u043d\u0438\u0442\u044c",onClose:e.onClose,children:[Object(a.jsxs)("label",{className:"profile-form__field",children:[Object(a.jsx)("input",{className:"profile-form__user profile-form__user_data_name",id:"title-input",value:i,onChange:function(e){s(e.target.value)},type:"text",name:"adding-a-picture",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",required:!0}),Object(a.jsx)("span",{className:"profile-form__user-error",id:"title-input-error"})]}),Object(a.jsxs)("label",{className:"profile-form__field",children:[Object(a.jsx)("input",{className:"profile-form__user profile-form__user_data_info",id:"link-input",value:u,onChange:function(e){d(e.target.value)},type:"url",name:"adding-a-picture",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),Object(a.jsx)("span",{className:"profile-form__user-error",id:"link-input-error"})]})]})};var k=function(e){return Object(a.jsx)("div",{className:"popup picture-opening ".concat(e.isOpen&&"popup_opened"),children:Object(a.jsxs)("div",{className:"picture-opening__box",children:[Object(a.jsx)("img",{className:"picture-opening__img",src:e&&e.card.link,alt:e.card.name}),Object(a.jsx)("p",{className:"picture-opening__title",children:e.card.name}),Object(a.jsx)("button",{className:"profile-form__btn-close",type:"reset",onClick:e.onClose})]})})},y=n(12),T=n(18),L=n(19),w=new(function(){function e(t){Object(T.a)(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers,this.editFormName="profile-\u0441hange",this.addFormName="adding-a-picture",this.avatarFormName="avatar-\u0441hange"}return Object(L.a)(e,[{key:"_sendStandartThen",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"_sendStandartCatch",value:function(e){console.log(e)}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers}).then((function(t){return e._sendStandartThen(t)}))}},{key:"getInitialProfile",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers}).then((function(t){return e._sendStandartThen(t)}))}},{key:"changeProfile",value:function(e,t){var n=this;return this._renderLoading(!0,this.editFormName),fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return n._sendStandartThen(e)})).finally((function(){n._renderLoading(!1,n.editFormName)}))}},{key:"addCard",value:function(e,t){var n=this;return this._renderLoading(!0,this.addFormName),fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})).finally((function(){n._renderLoading(!1,n.addFormName)}))}},{key:"addLikeItem",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then((function(e){return t._sendStandartThen(e)}))}},{key:"removeLikeItem",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._sendStandartThen(e)}))}},{key:"changeLikeCardStatus",value:function(e,t){return t?this.addLikeItem(e):this.removeLikeItem(e)}},{key:"deleteItem",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._sendStandartThen(e)}))}},{key:"changeAvatarProfile",value:function(e){var t=this;return this._renderLoading(!0,this.avatarFormName),fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return t._sendStandartThen(e)})).finally((function(){t._renderLoading(!1,t.avatarFormName)}))}},{key:"_renderLoading",value:function(e,t){document.querySelector("form[name=".concat(t,"]")).querySelector(".profile-form__btn-save").textContent=e?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}}]),e}())({baseUrl:"http://localhost:3000",headers:{authorization:"12ba02f1-21d1-4be5-b67c-2a240b5b5b87","Content-Type":"application/json"}}),E=new(function(){function e(t){Object(T.a)(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}return Object(L.a)(e,[{key:"register",value:function(e,t){return fetch("".concat(this._baseUrl,"/signup"),{method:"POST",headers:this._headers,body:JSON.stringify({password:String(e),email:String(t)})}).then((function(e){try{if(201===e.status)return e.json()}catch(t){return t}})).then((function(e){return e})).catch((function(e){return console.log(e)}))}},{key:"authorize",value:function(e,t){return fetch("".concat(this._baseUrl,"/signin"),{method:"POST",headers:this._headers,body:JSON.stringify({password:String(e),email:String(t)})}).then((function(e){return e.json()})).then((function(e){if(e.token)return localStorage.setItem("jwt",e.token),e})).catch((function(e){console.log(e)}))}},{key:"getContent",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:Object(y.a)(Object(y.a)({},this._headers),{},{Authorization:"Bearer ".concat(e)})}).then((function(e){return e.json()})).then((function(e){return e}))}}]),e}())({baseUrl:"http://localhost:3000",headers:{Accept:"application/json","Content-Type":"application/json"}});var P=function(e){return Object(a.jsxs)("form",{className:"sign-form",name:e.formName,onSubmit:e.handleSubmit,noValidate:!0,children:[Object(a.jsx)("h2",{className:"sign-form__title",children:e.title}),Object(a.jsxs)("label",{className:"sign-form__field",children:[Object(a.jsx)("input",{className:"sign-form__input sign-form__input_data_mail",id:"mail-input",value:e.email,onChange:e.handleEmailChange,type:"text",name:e.formName,minLength:"2",maxLength:"40",required:!0,placeholder:"Email"}),Object(a.jsx)("span",{className:"sign-form__input-error",id:"mail-input-error"})]}),Object(a.jsxs)("label",{className:"sign-form__field",children:[Object(a.jsx)("input",{className:"sign-form__input sign-form__input_data_password",id:"password-input",value:e.password,onChange:e.handlePasswordChange,type:"password",name:e.formName,minLength:"2",maxLength:"40",required:!0,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(a.jsx)("span",{className:"sign-form__input-error",id:"password-input-error"})]}),Object(a.jsx)("button",{className:"sign-form__btn-save",type:"submit",children:e.buttonSubmitText})]})};var U=Object(u.h)((function(e){var t=r.a.useState(""),n=Object(l.a)(t,2),i=n[0],s=n[1],c=r.a.useState(""),o=Object(l.a)(c,2),u=o[0],m=o[1];return Object(a.jsxs)("section",{class:"register",children:[Object(a.jsx)(P,{title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",formName:"register",buttonSubmitText:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",handleEmailChange:function(e){return s(e.target.value)},email:i,handlePasswordChange:function(e){return m(e.target.value)},password:u,handleSubmit:function(t){t.preventDefault(),e.handleSubmitRegister({password:u,email:i}),s(""),m("")}}),Object(a.jsxs)("div",{className:"register__signin",children:[Object(a.jsx)("p",{className:"register__signin-text",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?\u2002"}),Object(a.jsx)(d.b,{to:"signin",className:"register__login-link",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})}));var I=function(e){var t=r.a.useState(""),n=Object(l.a)(t,2),i=n[0],s=n[1],c=r.a.useState(""),o=Object(l.a)(c,2),u=o[0],d=o[1];return Object(a.jsx)("section",{class:"login",children:Object(a.jsx)(P,{title:"\u0412\u0445\u043e\u0434",formName:"login",buttonSubmitText:"\u0412\u043e\u0439\u0442\u0438",handleEmailChange:function(e){return s(e.target.value)},email:i,handlePasswordChange:function(e){return d(e.target.value)},password:u,handleSubmit:function(t){t.preventDefault(),e.handleSubmitLogin({password:u,email:i}),s(""),d("")}})})},A=n(24),F=function(e){var t=e.component,n=Object(A.a)(e,["component"]);return Object(a.jsx)(u.b,{children:function(){return n.loggedIn?Object(a.jsx)(t,Object(y.a)({},n)):Object(a.jsx)(u.a,{to:"/signin"})}})};var D=function(e){return Object(a.jsx)("section",{className:"popup ".concat(e.isOpen&&"popup_opened"),children:Object(a.jsxs)("div",{className:"infoTooltip",children:[Object(a.jsx)("img",{className:"infoTooltip__image",src:e.image,alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u0441 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u043c \u0412\u0430\u0448\u0435\u0439 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438"}),Object(a.jsx)("h2",{className:"infoTooltip__title",children:e.title}),Object(a.jsx)("button",{className:"infoTooltip__btn-close",type:"reset",onClick:e.onClose})]})})},q=n.p+"static/media/InfoTooltip_ok.1b6082f8.svg",J=n.p+"static/media/InfoTooltip_badly.df8eddf6.svg";var z=function(){function e(e){console.log(e),alert("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a.")}function t(e){ie(e),be()}var n=r.a.useState(!1),i=Object(l.a)(n,2),s=i[0],c=i[1],d=r.a.useState(!1),m=Object(l.a)(d,2),h=m[0],f=m[1],p=r.a.useState(!1),O=Object(l.a)(p,2),g=O[0],v=O[1],y=r.a.useState(!1),T=Object(l.a)(y,2),L=T[0],P=T[1],A=r.a.useState(!1),z=Object(l.a)(A,2),R=z[0],H=z[1],B=r.a.useState({}),G=Object(l.a)(B,2),M=G[0],V=G[1],W=r.a.useState(!1),K=Object(l.a)(W,2),Q=K[0],X=K[1],Y=r.a.useState(""),Z=Object(l.a)(Y,2),$=Z[0],ee=Z[1],te=r.a.useState({}),ne=Object(l.a)(te,2),ae=ne[0],ie=ne[1],re=r.a.useState(""),se=Object(l.a)(re,2),ce=se[0],oe=se[1],le=r.a.useState(""),ue=Object(l.a)(le,2),de=ue[0],me=ue[1],he=Object(u.g)();function fe(){H(!R),oe(q),me("\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!")}function je(){H(!R),oe(J),me("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.")}function be(){c(!1),f(!1),v(!1),P(!1),H(!1),V({})}r.a.useEffect((function(){w.getInitialProfile().then(ie).catch(e),function(){if(localStorage.getItem("jwt")){var e=localStorage.getItem("jwt");E.getContent(e).then((function(e){ee(e.data.email),X(!0),he.push("/")}))}else X(!1)}()}),[]);var _e=r.a.useState([]),pe=Object(l.a)(_e,2),Oe=pe[0],ge=pe[1];return r.a.useEffect((function(){w.getInitialCards().then((function(e){ge(e)})).catch((function(t){e(t)}))}),[]),Object(a.jsx)(_.Provider,{value:ae,children:Object(a.jsxs)("div",{className:"page",children:[Object(a.jsx)(j,{userEmail:$}),Object(a.jsxs)(u.d,{children:[Object(a.jsx)(F,{exact:!0,path:"/",onCardClick:function(e){V(e),P(!L)},onEditAvatar:function(){c(!s)},onEditProfile:function(){f(!h)},onAddPlace:function(){v(!g)},cards:Oe,onCardLike:function(t){var n=t.likes.some((function(e){return e._id===ae._id}));w.changeLikeCardStatus(t._id,!n).then((function(e){var n=Oe.map((function(n){return n._id===t._id?e:n}));ge(n)})).catch((function(t){e(t)}))},onCardDelete:function(t){w.deleteItem(t._id).then((function(e){var n=Oe.filter((function(e){return e._id!==t._id}));ge(n)})).catch((function(t){e(t)}))},loggedIn:Q,component:x}),Object(a.jsx)(u.b,{path:"/signup",children:Object(a.jsx)(U,{handleSubmitRegister:function(e){E.register(e.password,e.email).then((function(e){e?(fe(),he.push("/signin")):je()}))}})}),Object(a.jsx)(u.b,{path:"/signin",children:Object(a.jsx)(I,{handleSubmitLogin:function(e){E.authorize(e.password,e.email).then((function(e){e||je(),e.token&&(fe(),X(!0),he.push("/"))})).catch((function(e){console.log(e)}))}})}),Object(a.jsx)(u.b,{exact:!0,path:"/",children:Q?Object(a.jsx)(u.a,{to:"/"}):Object(a.jsx)(u.a,{to:"/signin"})})]}),Object(a.jsx)(b,{}),Object(a.jsx)(N,{isOpen:s,onClose:be,onUpdateAvatar:function(n){w.changeAvatarProfile(n.avatar).then((function(e){t(e)})).catch((function(t){e(t)}))}}),Object(a.jsx)(C,{isOpen:h,onClose:be,onUpdateUser:function(n){w.changeProfile(n.name,n.about).then((function(e){t(e)})).catch((function(t){e(t)}))}}),Object(a.jsx)(S,{isOpen:g,onClose:be,onAddPlace:function(t){w.addCard(t.title,t.link).then((function(e){ge([e].concat(Object(o.a)(Oe))),be()})).catch((function(t){e(t)}))}}),Object(a.jsx)(k,{card:M,isOpen:L,onClose:be}),Object(a.jsx)(D,{isOpen:R,onClose:be,image:ce,title:de})]})})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),r(e),s(e)}))};c.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(d.a,{children:Object(a.jsx)(z,{})})}),document.getElementById("root")),R()}},[[36,1,2]]]);
//# sourceMappingURL=main.a777e19b.chunk.js.map