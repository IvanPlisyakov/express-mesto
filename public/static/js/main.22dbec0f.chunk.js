(this['webpackJsonpmesto-react'] = this['webpackJsonpmesto-react'] || []).push([[0], {
  15(e, t, n) {},
  16(e, t, n) {
    n.r(t); const a = n(0); const r = n(1); const i = n.n(r); const c = n(6); const s = n.n(c); const o = (n(15), n(9)); const l = n(2); const u = `${n.p}static/media/header-logo.c2821b38.svg`; const d = function () { return Object(a.jsx)('header', { className: 'header', children: Object(a.jsx)('img', { className: 'header__logo', src: u, alt: '\u041b\u043e\u0433\u043e\u0442\u0438\u043f Mesto Russia' }) }); }; const m = function () { return Object(a.jsx)('footer', { className: 'footer', children: Object(a.jsx)('p', { className: 'footer__copyright', children: '\xa9 2020 Mesto Russia' }) }); }; const f = i.a.createContext(); const h = `${n.p}static/media/element__img-cap.e690a784.svg`; const _ = `${n.p}static/media/element__img-urn.c87bb95f.svg`; const b = function (e) {
      const t = i.a.useContext(f); const n = e.card.owner._id === t._id; return Object(a.jsxs)('div', {
        className: 'element',
        children: [Object(a.jsx)('div', {
          className: 'element__overlay',
          children: Object(a.jsx)('img', {
            className: 'element__image', src: e.card.link, onClick() { e.onCardClick(e.card); }, alt: '',
          }),
        }), Object(a.jsxs)('button', {
          className: 'element__btn-delete '.concat(!n && 'element__btn-delete_inactive'), type: 'button', onClick() { e.onCardDelete(e.card); }, children: [Object(a.jsx)('img', { className: 'element__img-cap', src: h, alt: '' }), Object(a.jsx)('img', { className: 'element__img-urn', src: _, alt: '' })],
        }), Object(a.jsxs)('div', { className: 'element__column', children: [Object(a.jsx)('h4', { className: 'element__title', children: e.card.name }), Object(a.jsxs)('div', { className: 'element__column-like', children: [Object(a.jsx)('button', { className: 'element__btn-like '.concat(e.card.likes.some(((e) => e._id === t._id)) && 'element__btn-like_active'), type: 'button', onClick() { e.onCardLike(e.card); } }), Object(a.jsx)('p', { className: 'element__number-like', children: e.card.likes.length })] })] })],
      });
    }; const j = function (e) {
      const t = i.a.useContext(f); return Object(a.jsxs)('main', {
        className: 'main',
        children: [Object(a.jsxs)('section', {
          className: 'profile',
          children: [Object(a.jsx)('div', {
            className: 'profile__overlay',
            children: Object(a.jsxs)('button', {
              className: 'profile__avatar-button', type: 'button', onClick: e.onEditAvatar, children: [Object(a.jsx)('img', { className: 'profile__avatar', src: t ? t.avatar : 'https://i.gifer.com/g0R5.gif', alt: '\u0410\u0432\u0430\u0442\u0430\u0440 \u0432\u0430\u0448\u0435\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b' }), Object(a.jsx)('div', { className: 'profile__avatar-icon' })],
            }),
          }), Object(a.jsxs)('div', { className: 'profile__column', children: [Object(a.jsxs)('div', { className: 'profile__info', children: [Object(a.jsx)('h1', { className: 'profile__user-name', children: t ? t.name : '' }), Object(a.jsx)('button', { className: 'profile__edit-button', type: 'button', onClick: e.onEditProfile }), Object(a.jsx)('p', { className: 'profile__user-info', children: t ? t.about : '' })] }), Object(a.jsx)('button', { className: 'profile__add-button', type: 'button', onClick: e.onAddPlace })] })],
        }), Object(a.jsx)('section', {
          className: 'elements',
          children: e.cards && e.cards.map(((t) => Object(a.jsx)(b, {
            onCardLike: e.onCardLike, onCardDelete: e.onCardDelete, onCardClick: e.onCardClick, card: t,
          }, t._id))),
        })],
      });
    }; const p = function (e) {
      return Object(a.jsx)('section', {
        className: 'popup popup_type_'.concat(e.name, ' ').concat(e.isOpen && 'popup_opened'),
        children: Object(a.jsxs)('form', {
          className: 'profile-form', name: e.formName, onSubmit: e.onSubmit, noValidate: !0, children: [Object(a.jsx)('h2', { className: 'profile-form__title', children: e.title }), e.children, Object(a.jsx)('button', { className: 'profile-form__btn-save', type: 'submit', children: e.buttonSubmitText }), Object(a.jsx)('button', { className: 'profile-form__btn-close', type: 'reset', onClick: e.onClose })],
        }),
      });
    }; const v = function (e) {
      const t = i.a.useRef(''); const n = Object(a.jsxs)('label', {
        className: 'profile-form__field',
        children: [Object(a.jsx)('input', {
          className: 'profile-form__user profile-form__user_data_info', id: 'avatar-input', ref: t, type: 'url', name: 'adding-a-picture', placeholder: '\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440', required: !0,
        }), Object(a.jsx)('span', { className: 'profile-form__user-error', id: 'avatar-input-error' })],
      }); return Object(a.jsx)(p, {
        isOpen: e.isOpen, children: n, onSubmit(n) { n.preventDefault(), e.onUpdateAvatar({ avatar: t.current.value }); }, formName: 'avatar-\u0441hange', title: '\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440', buttonSubmitText: '\u0421\u043e\u0445\u0430\u043d\u0438\u0442\u044c', onClose: e.onClose,
      });
    }; const O = function (e) {
      const t = i.a.useState(''); const n = Object(l.a)(t, 2); const r = n[0]; const c = n[1]; const s = i.a.useState(''); const o = Object(l.a)(s, 2); const u = o[0]; const d = o[1]; const m = i.a.useContext(f); i.a.useEffect((() => { c(m.name), d(m.about); }), [m]); const h = Object(a.jsxs)(a.Fragment, {
        children: [Object(a.jsxs)('label', {
          className: 'profile-form__field',
          children: [Object(a.jsx)('input', {
            className: 'profile-form__user profile-form__user_data_name', id: 'name-input', value: r, onChange(e) { c(e.target.value); }, type: 'text', name: 'profile-\u0441hange', minLength: '2', maxLength: '40', required: !0,
          }), Object(a.jsx)('span', { className: 'profile-form__user-error', id: 'name-input-error' })],
        }), Object(a.jsxs)('label', {
          className: 'profile-form__field',
          children: [Object(a.jsx)('input', {
            className: 'profile-form__user profile-form__user_data_info', id: 'info-input', value: u, onChange(e) { d(e.target.value); }, type: 'text', name: 'profile-\u0441hange', minLength: '2', maxLength: '200', required: !0,
          }), Object(a.jsx)('span', { className: 'profile-form__user-error', id: 'info-input-error' })],
        })],
      }); return Object(a.jsx)(p, {
        isOpen: e.isOpen, children: h, onSubmit(t) { t.preventDefault(), e.onUpdateUser({ name: r, about: u }); }, formName: 'profile-\u0441hange', title: '\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c', buttonSubmitText: '\u0421\u043e\u0445\u0430\u043d\u0438\u0442\u044c', onClose: e.onClose,
      });
    }; const x = function (e) {
      const t = i.a.useState(''); const n = Object(l.a)(t, 2); const r = n[0]; const c = n[1]; const s = i.a.useState(''); const o = Object(l.a)(s, 2); const u = o[0]; const d = o[1]; const m = Object(a.jsxs)(a.Fragment, {
        children: [Object(a.jsxs)('label', {
          className: 'profile-form__field',
          children: [Object(a.jsx)('input', {
            className: 'profile-form__user profile-form__user_data_name', id: 'title-input', value: r, onChange(e) { c(e.target.value); }, type: 'text', name: 'adding-a-picture', placeholder: '\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435', minLength: '2', maxLength: '30', required: !0,
          }), Object(a.jsx)('span', { className: 'profile-form__user-error', id: 'title-input-error' })],
        }), Object(a.jsxs)('label', {
          className: 'profile-form__field',
          children: [Object(a.jsx)('input', {
            className: 'profile-form__user profile-form__user_data_info', id: 'link-input', value: u, onChange(e) { d(e.target.value); }, type: 'url', name: 'adding-a-picture', placeholder: '\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443', required: !0,
          }), Object(a.jsx)('span', { className: 'profile-form__user-error', id: 'link-input-error' })],
        })],
      }); return Object(a.jsx)(p, {
        isOpen: e.isOpen, children: m, onSubmit(t) { t.preventDefault(), e.onAddPlace({ title: r, link: u }); }, formName: 'adding-a-picture', title: '\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e', buttonSubmitText: '\u0421\u043e\u0445\u0430\u043d\u0438\u0442\u044c', onClose: e.onClose,
      });
    }; const g = function (e) { return Object(a.jsx)('div', { className: 'popup picture-opening '.concat(e.isOpen && 'popup_opened'), children: Object(a.jsxs)('div', { className: 'picture-opening__box', children: [Object(a.jsx)('img', { className: 'picture-opening__img', src: e && e.card.link, alt: '' }), Object(a.jsx)('p', { className: 'picture-opening__title', children: e.card.name }), Object(a.jsx)('button', { className: 'profile-form__btn-close', type: 'reset', onClick: e.onClose })] }) }); }; const N = n(7); const C = n(8); const k = new (function () { function e(t) { Object(N.a)(this, e), this._baseUrl = t.baseUrl, this._headers = t.headers, this.editFormName = 'profile-\u0441hange', this.addFormName = 'adding-a-picture', this.avatarFormName = 'avatar-\u0441hange'; } return Object(C.a)(e, [{ key: '_sendStandartThen', value(e) { return e.ok ? e.json() : Promise.reject('\u041e\u0448\u0438\u0431\u043a\u0430: '.concat(e.status)); } }, { key: '_sendStandartCatch', value(e) { console.log(e); } }, { key: 'getInitialCards', value() { const e = this; return fetch(''.concat(this._baseUrl, '/cards'), { method: 'GET', headers: this._headers }).then(((t) => e._sendStandartThen(t))); } }, { key: 'getInitialProfile', value() { const e = this; return fetch(''.concat(this._baseUrl, '/users/me'), { method: 'GET', headers: this._headers }).then(((t) => e._sendStandartThen(t))); } }, { key: 'changeProfile', value(e, t) { const n = this; return this._renderLoading(!0, this.editFormName), fetch(''.concat(this._baseUrl, '/users/me'), { method: 'PATCH', headers: this._headers, body: JSON.stringify({ name: e, about: t }) }).then(((e) => n._sendStandartThen(e))).finally((() => { n._renderLoading(!1, n.editFormName); })); } }, { key: 'addCard', value(e, t) { const n = this; return this._renderLoading(!0, this.addFormName), fetch(''.concat(this._baseUrl, '/cards'), { method: 'POST', headers: this._headers, body: JSON.stringify({ name: e, link: t }) }).then(((e) => (e.ok ? n.getInitialCards() : Promise.reject('\u041e\u0448\u0438\u0431\u043a\u0430: '.concat(e.status))))).finally((() => { n._renderLoading(!1, n.addFormName); })); } }, { key: 'addLikeItem', value(e) { const t = this; return fetch(''.concat(this._baseUrl, '/cards/likes/').concat(e), { method: 'PUT', headers: this._headers }).then(((e) => t._sendStandartThen(e))); } }, { key: 'removeLikeItem', value(e) { const t = this; return fetch(''.concat(this._baseUrl, '/cards/likes/').concat(e), { method: 'DELETE', headers: this._headers }).then(((e) => t._sendStandartThen(e))); } }, { key: 'changeLikeCardStatus', value(e, t) { return t ? this.addLikeItem(e) : this.removeLikeItem(e); } }, { key: 'deleteItem', value(e) { const t = this; return fetch(''.concat(this._baseUrl, '/cards/').concat(e), { method: 'DELETE', headers: this._headers }).then(((e) => t._sendStandartThen(e))); } }, { key: 'changeAvatarProfile', value(e) { const t = this; return this._renderLoading(!0, this.avatarFormName), fetch(''.concat(this._baseUrl, '/users/me/avatar'), { method: 'PATCH', headers: this._headers, body: JSON.stringify({ avatar: e }) }).then(((e) => t._sendStandartThen(e))).finally((() => { t._renderLoading(!1, t.avatarFormName); })); } }, { key: '_renderLoading', value(e, t) { document.querySelector('form[name='.concat(t, ']')).querySelector('.profile-form__btn-save').textContent = e ? '\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...' : '\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c'; } }]), e; }())({ baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-16', headers: { authorization: '12ba02f1-21d1-4be5-b67c-2a240b5b5b87', 'Content-Type': 'application/json' } }); const y = function () {
      function e(e) { console.log(e), alert('\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a.'); } function t(e) { w(e), J(); } const n = i.a.useState(!1); const r = Object(l.a)(n, 2); const c = r[0]; const s = r[1]; const u = i.a.useState(!1); const h = Object(l.a)(u, 2); const _ = h[0]; const b = h[1]; const p = i.a.useState(!1); const N = Object(l.a)(p, 2); const C = N[0]; const y = N[1]; const S = i.a.useState(!1); const L = Object(l.a)(S, 2); const T = L[0]; const P = L[1]; const U = i.a.useState({}); const E = Object(l.a)(U, 2); const F = E[0]; const I = E[1]; const A = i.a.useState({}); const D = Object(l.a)(A, 2); const q = D[0]; var w = D[1]; function J() { s(!1), b(!1), y(!1), P(!1), I({}); }i.a.useEffect((() => { k.getInitialProfile().then(((e) => { w(e); })).catch(((t) => { e(t); })); }), []); const R = i.a.useState([]); const M = Object(l.a)(R, 2); const B = M[0]; const G = M[1]; return i.a.useEffect((() => { k.getInitialCards().then(((e) => { G(e); })).catch(((t) => { e(t); })); }), []), Object(a.jsx)(f.Provider, {
        value: q,
        children: Object(a.jsxs)('div', {
          className: 'page',
          children: [Object(a.jsx)(d, {}), Object(a.jsx)(j, {
            onCardClick(e) { I(e), P(!T); }, onEditAvatar() { s(!c); }, onEditProfile() { b(!_); }, onAddPlace() { y(!C); }, cards: B, onCardLike(t) { const n = t.likes.some(((e) => e._id === q._id)); k.changeLikeCardStatus(t._id, !n).then(((e) => { const n = B.map(((n) => (n._id === t._id ? e : n))); G(n); })).catch(((t) => { e(t); })); }, onCardDelete(t) { k.deleteItem(t._id).then(((e) => { const n = B.filter(((e) => e._id !== t._id)); G(n); })).catch(((t) => { e(t); })); },
          }), Object(a.jsx)(m, {}), Object(a.jsx)(v, { isOpen: c, onClose: J, onUpdateAvatar(n) { k.changeAvatarProfile(n.avatar).then(((e) => { t(e); })).catch(((t) => { e(t); })); } }), Object(a.jsx)(O, { isOpen: _, onClose: J, onUpdateUser(n) { k.changeProfile(n.name, n.about).then(((e) => { t(e); })).catch(((t) => { e(t); })); } }), Object(a.jsx)(x, { isOpen: C, onClose: J, onAddPlace(t) { k.addCard(t.title, t.link).then(((e) => { const t = e.find(((e) => e.owner._id === q._id)); G([t].concat(Object(o.a)(B))), J(); })).catch(((t) => { e(t); })); } }), Object(a.jsx)(g, { card: F, isOpen: T, onClose: J })],
        }),
      });
    }; const S = function (e) { e && e instanceof Function && n.e(3).then(n.bind(null, 17)).then(((t) => { const n = t.getCLS; const a = t.getFID; const r = t.getFCP; const i = t.getLCP; const c = t.getTTFB; n(e), a(e), r(e), i(e), c(e); })); }; s.a.render(Object(a.jsx)(i.a.StrictMode, { children: Object(a.jsx)(y, {}) }), document.getElementById('root')), S();
  },
}, [[16, 1, 2]]]);
// # sourceMappingURL=main.22dbec0f.chunk.js.map
