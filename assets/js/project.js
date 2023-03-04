const form = document.querySelector(".login");
const dataProjects = [];
const contentProject = document.querySelector(".wrapperProject");
const inputTitle = document.getElementById("title");
const inputTimeStart = document.getElementById("start");
const inputDec = document.getElementById("info");
const inputTimeEnd = document.getElementById("end");
const inputAddImg = document.querySelector(".container-upload");
const fileInputAddImg = document.getElementById("image");
const technologies = Array.from(
  document.querySelectorAll('input[type="checkbox"]')
);

const checkNext = document.getElementById("next");
const checkReact = document.getElementById("react");
const checkTypescript = document.getElementById("typescript");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let img = fileInputAddImg.files[0];
  img = URL.createObjectURL(img);
  let dataProject = {
    nameProject: inputTitle.value,
    starDate: inputTimeStart.value,
    endDate: inputTimeEnd.value,
    info: inputDec.value,
    img: img,
    technologies: technologies,
  };

  dataProjects.push(dataProject);
  addProject();
});

const addProject = () => {
  let wrapper = "";

  dataProjects.forEach((dataProject) => {
    wrapper += `          <div class="wrapper">
    <div class="content-card card">
      <div class="profile">
        <div class="card-img">
          <img
            src="${dataProject.img}"
            alt="${dataProject.nameProject}"
          />
        </div>
        <div class="name">
          <a href="project-detail.html"
            >${dataProject.nameProject}</a
          >
          <p>durasi : ${duration(dataProject.starDate, dataProject.endDate)}</p>
        </div>
      </div>
      <div class="text-info">
        <p>
        ${dataProject.info} 
          liquid ratione dolorum reprehenderit lore
        </p>
      </div>
      <div class="tech-icons-card mt">
      ${getTech(dataProject.technologies)}
      </div>
      <div class="btn-card-group">
        <button>edit</button>
        <button>delete</button>
      </div>
    </div>
  </div>`;
    contentProject.innerHTML = wrapper;
  });
};

const duration = (startDate, endDate) => {
  const dateStart = new Date(startDate).getTime();
  const dateEnd = new Date(endDate).getTime();
  const selisih = dateEnd - dateStart;

  let day = selisih / (1000 * 60 * 60 * 24);
  const week = Math.floor(selisih / (1000 * 60 * 60 * 24 * 7));
  const month = Math.floor(selisih / (1000 * 60 * 60 * 24 * 30));
  const year = Math.floor(selisih / (1000 * 60 * 60 * 24 * 365));

  const getWeek =
    day < 7
      ? day === 1
        ? ` ${day} day`
        : ` ${day} days`
      : week === 1
      ? ` ${week} week`
      : ` ${week} weeks`;

  const getMonth =
    day < 7
      ? day === 1
        ? ` ${day} day`
        : ` ${day} days`
      : month === 1
      ? ` ${month} month`
      : ` ${month} months`;

  const getYear =
    day < 365
      ? day === 1
        ? ` ${day} day`
        : ` ${day} days`
      : year === 1
      ? ` ${year} year`
      : ` ${year} years`;

  const getWeekMont = day < 30 ? getWeek : getMonth;
  const result = day < 365 ? getWeekMont : getYear;

  return result;
};

const getTech = (technologies) => {
  technologies[0].dataset.icon = "fa-brands fa-node";
  technologies[1].dataset.icon = "fa-brands fa-vuejs";
  technologies[2].dataset.icon = "fa-brands fa-react";
  technologies[3].dataset.icon = "fa-brands fa-java";

  let techIcons = "";
  technologies.forEach((s) => {
    techIcons += s.checked ? `<i class='${s.dataset.icon}'></i>` : "";
  });

  return techIcons;
};
