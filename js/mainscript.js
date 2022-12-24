const o = function() {
  const n = () => {
    alert("hola");
  };
  return {
    getChildsForm: function() {
      n();
    }
  };
}(), t = () => {
  o.getChildsForm();
};
window.addEventListener("load", () => {
  t();
});
