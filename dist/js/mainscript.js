(function() {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload"))
    return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
    a(e);
  new MutationObserver((e) => {
    for (const o of e)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && a(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(e) {
    const o = {};
    return e.integrity && (o.integrity = e.integrity), e.referrerpolicy && (o.referrerPolicy = e.referrerpolicy), e.crossorigin === "use-credentials" ? o.credentials = "include" : e.crossorigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
  }
  function a(e) {
    if (e.ep)
      return;
    e.ep = !0;
    const o = i(e);
    fetch(e.href, o);
  }
})();
const L = function() {
  const h = {
    user: /^[a-zA-ZÀ-ÿ\s\.-_@]{3,40}/,
    nameComplete: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
    phone: /^(\+)?[\d\s\-\.]{5,30}$/,
    email: /^[\w\d\.\-]+@+[\w\d]+\.+[\w\d\.]+$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/,
    message: /.{20,200}/
  }, r = {
    user: !1,
    nameComplete: !1,
    phone: !1,
    email: !1,
    password: !1,
    message: !1
  }, i = () => {
    const a = document.getElementById("form"), e = document.querySelectorAll("#form .input");
    document.querySelector("#password");
    const o = document.querySelector("#terms"), s = document.querySelector(".form__block--terms"), y = (n) => {
      const { user: d, nameComplete: m, phone: u, email: f, password: p, message: g } = h, t = (c, l) => {
        c.test(n.target.value) ? (document.querySelector(`.form__block--${l}`).classList.add("fine"), document.querySelector(`.form__block--${l}`).classList.remove("wrong"), r[l] = !0) : (document.querySelector(`.form__block--${l}`).classList.add("wrong"), document.querySelector(`.form__block--${l}`).classList.remove("fine"), r[l] = !1);
      };
      switch (n.target.name) {
        case "user":
          t(d, "user");
          break;
        case "nameComplete":
          t(m, "nameComplete");
          break;
        case "phone":
          t(u, "phone");
          break;
        case "email":
          t(f, "email");
          break;
        case "password":
          t(p, "password");
          break;
        case "confirmPass":
          break;
        case "message":
          t(g, "message");
          break;
      }
    };
    e.forEach((n) => {
      n.addEventListener("keyup", y), n.addEventListener("blur", y);
    }), o.addEventListener("change", () => {
      o.checked ? (s.classList.add("fine"), s.classList.remove("wrong")) : (s.classList.add("wrong"), s.classList.remove("fine"));
    }), a.addEventListener("submit", (n) => {
      const d = document.querySelectorAll(".form__block"), { user: m, nameComplete: u, phone: f, email: p, password: g, message: t } = r;
      n.preventDefault(), m && u && f && p && g && t && o.checked ? console.log("bien") : console.log("mal"), d.forEach((c) => {
        c.classList.contains("fine") ? c.classList.remove("wrong") : c.classList.add("wrong");
      });
    });
  };
  return {
    getChildsForm: function() {
      i();
    }
  };
}(), w = () => {
  L.getChildsForm();
};
window.addEventListener("load", () => {
  w();
});
