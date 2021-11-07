const routeChange = (path) => {
  var win = window.open(path, "_blank");
  win.focus();
};

export default routeChange;