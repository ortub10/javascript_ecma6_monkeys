let local_ar = localStorage["students"]
  ? JSON.parse(localStorage["students"])
  : [];

const init = () => {
  declareViewEvents();
};

const declareViewEvents = () => {
  let form = document.querySelector("#id_form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let student_obj = {
      name: document.querySelector("#name").value,
      score: document.querySelector("#score").value,
      subject: document.querySelector("#subject").value,
    };
    if (student_obj.name.length < 2) {
      return alert("Name too short, min 2 chars");
    } else if (student_obj.score < 1 || student_obj.score > 100) {
      return alert("Score need to be between 1 to 100");
    }
    // console.log(student_obj);
    local_ar.push(student_obj);

    localStorage.setItem("students", JSON.stringify(local_ar));
  });
};
init();
