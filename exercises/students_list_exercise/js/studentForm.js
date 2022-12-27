const init = () => {
  declareViewEvents();
};

const declareViewEvents = () => {
  let form = document.querySelector("#id_form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
};
init();
