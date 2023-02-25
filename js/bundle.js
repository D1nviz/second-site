!function () { "use strict"; const e = (e, t) => { const s = document.querySelector(e); s.classList.add("show"), s.classList.remove("hide"), document.body.style.overflow = "hidden", t && clearInterval(t) }, t = e => { const t = document.querySelector(e); t.classList.add("hide"), t.classList.remove("show"), document.body.style.overflow = "" }; var s = () => { class e { constructor(e, t, s, o, a, r) { this.src = e, this.alt = t, this.title = s, this.descr = o, this.price = a; for (var n = arguments.length, c = new Array(n > 6 ? n - 6 : 0), l = 6; l < n; l++)c[l - 6] = arguments[l]; this.classes = c, this.parent = document.querySelector(r), this.transfer = 37, this.changeToUAH() } changeToUAH() { this.price = this.price * this.transfer } render() { const e = document.createElement("div"); 0 === this.classes.length && (this.classes = ["menu__item"]), this.classes.forEach((t => e.classList.add(t))), e.innerHTML = `\n                        <img src=${this.src} alt=${this.alt}>\n                        <h3 class="menu__item-subtitle">${this.title}</h3>\n                        <div class="menu__item-descr">${this.descr}</div>\n                        <div class="menu__item-divider"></div>\n                        <div class="menu__item-price">\n                            <div class="menu__item-cost">Цена:</div>\n                            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>\n                        </div>\n                `, this.parent.append(e) } } axios.get("http://localhost:3000/menu").then((t => { t.data.forEach((t => { let { img: s, altimg: o, title: a, descr: r, price: n } = t; new e(s, o, a, r, n, ".menu .container").render() })) })) }, o = (s, o, a) => { const r = document.querySelectorAll(s), n = document.querySelector(a); let c, l; r.forEach((e => { var t; (t = e).addEventListener("submit", (e => { e.preventDefault(); let s = document.createElement("img"); s.src = "img/form/spinner.svg", s.style.cssText = "\n                display: block;\n                margin: 0 auto;\n            ", t.insertAdjacentElement("afterend", s); const o = new FormData(t); (async (e, t) => { let s = await fetch("http://localhost:3000/requests", { method: "POST", headers: { "Content-Type": "application/json" }, body: t }); return await s.json() })(0, JSON.stringify(Object.fromEntries(o.entries()))).then((e => { console.log(e), i("Спасибо! Скоро мы с вами свяжемся"), s.remove() })).catch((() => { i("Что-то пошло не так...") })).finally((() => { t.reset() })) })) })); const i = t => { c = document.createElement("div"), l = document.querySelector(".modal__dialog"), l.classList.add("hide"), e(a, o), c.classList.add("modal__dialog"), c.innerHTML = `\n            <div class="modal__content">\n                <div class="modal__close" data-close>×</div>\n                <div class="modal__title">${t}</div>\n            </div>\n        `, n.append(c) }, d = (e, s) => { e.remove(), s.classList.add("show"), s.classList.remove("hide"), t(a) }; n.addEventListener("click", (e => { (e.target === n && c || "" == e.target.getAttribute("data-close") && c) && d(c, l) })), document.addEventListener("keydown", (e => { "Escape" === e.code && c && d(c, l) })) }; document.addEventListener("DOMContentLoaded", (() => { const a = setTimeout((() => e(".modal", a)), 5e4); ((e, t, s, o) => { const a = document.querySelectorAll(e), r = document.querySelectorAll(t), n = document.querySelector(s), c = () => { r.forEach((e => { e.classList.add("hide"), e.classList.remove("show", "fade") })), a.forEach((e => { e.classList.remove(o) })) }, l = function () { let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0; r[e].classList.add("show", "fade"), r[e].classList.remove("hide"), a[e].classList.add(o) }; c(), l(), n.addEventListener("click", (t => { const s = t.target; s && s.classList.contains(e.replace(/\./, "")) && a.forEach(((e, t) => { s == e && (c(), l(t)) })) })) })(".tabheader__item", ".tabcontent", ".tabheader__items", "tabheader__item_active"), (() => { const e = document.querySelector(".calculating__result span"), t = document.querySelector(".calculating__result p"); let s, o, a, r, n; localStorage.getItem("sex") ? s = localStorage.getItem("sex") : (s = "female", localStorage.setItem("sex", "female")), localStorage.getItem("ratio") ? n = localStorage.getItem("ratio") : (n = 1.375, localStorage.setItem("ratio", 1.375)); const c = () => { e.textContent = s && o && a && r && n ? "female" === s ? Math.round((447.6 + 9.2 * a + 3.1 * o - 4.3 * r) * n) : Math.round((88.36 + 13.4 * a + 4.8 * o - 5.7 * r) * n) : "____" }; c(); const l = (e, t) => { document.querySelectorAll(e).forEach((e => { e.classList.remove(t), e.getAttribute("id") === localStorage.getItem("sex") && e.classList.add(t), e.getAttribute("data-ratio") === localStorage.getItem("ratio") && e.classList.add(t) })) }; l("#gender p", "calculating__choose-item_active"), l(".calculating__choose_big p", "calculating__choose-item_active"); const i = (e, t) => { const o = document.querySelectorAll(e); o.forEach((e => { e.addEventListener("click", (e => { e.target.getAttribute("data-ratio") ? (n = +e.target.getAttribute("data-ratio"), localStorage.setItem("ratio", +e.target.getAttribute("data-ratio"))) : (s = e.target.getAttribute("id"), localStorage.setItem("sex", e.target.getAttribute("id"))), o.forEach((e => { e.classList.remove(t) })), e.target.classList.add(t), c() })) })) }; i("#gender p", "calculating__choose-item_active"), i(".calculating__choose_big p", "calculating__choose-item_active"); const d = s => { const n = document.querySelector(s); n.addEventListener("input", (() => { if (n.value <= 350 && n.value >= 0 && !n.value.match(/\D/g)) { switch (n.getAttribute("id")) { case "height": o = +n.value; break; case "weight": a = +n.value; break; case "age": r = +n.value }c(), n.style.border = "none", t.textContent = "ккал", e.style.fontSize = "" } else e.textContent = "Неверные данные", e.style.fontSize = "28px", n.style.border = "2px solid red", t.textContent = "" })) }; d("#height"), d("#weight"), d("#age") })(), ((s, o, a) => { const r = document.querySelectorAll(s), n = document.querySelector(o); r.forEach((t => { t.addEventListener("click", (() => e(o))) })), n.addEventListener("click", (e => { e.target !== n && "" != e.target.getAttribute("data-close") || t(o) })), document.addEventListener("keydown", (e => { "Escape" === e.code && n.classList.contains("show") && t(o) })); const c = () => { window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1 && (e(o, a), window.removeEventListener("scroll", c)) }; window.addEventListener("scroll", c) })("[data-modal]", ".modal", a), ((e, t) => { const s = e => e >= 0 && e < 10 ? `0${e}` : e; (t => { const o = document.querySelector(e), a = o.querySelector("#days"), r = o.querySelector("#hours"), n = o.querySelector("#minutes"), c = o.querySelector("#seconds"), l = () => { const e = (e => { let t, s, o, a; const r = Date.parse(e) - Date.now(); return r <= 0 ? (t = 0, s = 0, o = 0, a = 0) : (t = Math.floor(r / 864e5), s = Math.floor(r / 36e5 % 24), o = Math.floor(r / 6e4 % 60), a = Math.floor(r / 1e3 % 60)), { total: r, days: t, hours: s, minutes: o, seconds: a } })(t); a.innerHTML = s(e.days), r.innerHTML = s(e.hours), n.innerHTML = s(e.minutes), c.innerHTML = s(e.seconds), e.total <= 0 && clearInterval(i) }, i = setInterval(l, 1e3); l() })(t) })(".timer", "2024-01-30"), s(), o("form", a, ".modal"), (e => { let { container: t, slide: s, nextArrow: o, prevArrow: a, totalCount: r, currentCount: n, wrapper: c, field: l } = e; const i = document.querySelectorAll(s), d = document.querySelector(t), u = document.querySelector(a), m = document.querySelector(o), h = document.querySelector(r), g = document.querySelector(n), v = document.querySelector(c), _ = document.querySelector(l), y = window.getComputedStyle(v).width; let f = 1, p = 0; const L = () => g.textContent = f > 10 ? f : `0${f}`, S = e => e.replace(/\D/g, ""); L(), h.textContent = i.length > 10 ? i.length : `0${i.length}`, _.style.width = 100 * i.length + "%", _.style.display = "flex", _.style.transition = "0.5s all", v.style.overflow = "hidden", i.forEach((e => e.style.width = y)), d.style.position = "relative"; const E = document.createElement("ol"), w = []; E.classList.add("carousel-indicators"), d.append(E); for (let e = 0; e < i.length; e++) { const t = document.createElement("li"); t.setAttribute("data-slide-to", e + 1), t.classList.add("dot"), 0 === e && (t.style.opacity = 1), E.append(t), w.push(t) } const q = () => { w.forEach((e => e.style.opacity = ".5")), w[f - 1].style.opacity = 1 }; m.addEventListener("click", (() => { p == +S(y) * (i.length - 1) ? p = 0 : p += +S(y), _.style.transform = `translateX(-${p}px)`, f == i.length ? f = 1 : f++, L(), q() })), u.addEventListener("click", (() => { 0 == p ? p = +S(y) * (i.length - 1) : p -= +S(y), _.style.transform = `translateX(-${p}px)`, 1 == f ? f = i.length : f--, L(), q() })), w.forEach((e => { e.addEventListener("click", (e => { const t = e.target.getAttribute("data-slide-to"); f = t, p = +S(y) * (t - 1), _.style.transform = `translateX(-${p}px)`, q(), L() })) })) })({ container: ".offer__slider", slide: ".offer__slide", nextArrow: ".offer__slider-next", prevArrow: ".offer__slider-prev", totalCount: "#total", currentCount: "#current", wrapper: ".offer__slider-wrapper", field: ".offer_slider-inner" }) })) }();
//# sourceMappingURL=bundle.js.map