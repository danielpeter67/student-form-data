import * as model from "./model.js";
import renderTable from "./view/renderTable.js";
import RenderTableOpt from "./view/renderOptView.js";
import renderResult from "./view/renderResult.js";

const body = document.querySelector("body");
const form = document.querySelector(".form-horizontal");
const selectGender = document.getElementById("gender");
const selectAge = document.getElementById("age");
const selectState = document.getElementById("state");
const selectLevel = document.getElementById("level");
const table = document.querySelector("table");

const renderStudentsData = async function (filterOpt) {
  try {
    await model.fetchData();
    renderTable.render(model.datas.students);
  } catch (err) {
    console.error(err);
  }
};

const renderFormOpt = async function () {
  try {
    await model.fetchFormOpt();

    RenderTableOpt.render(model.datas.ages, selectAge);
    RenderTableOpt.render(model.datas.genders, selectGender);
    RenderTableOpt.render(model.datas.states, selectState);
    RenderTableOpt.render(model.datas.levels, selectLevel);
  } catch (err) {
    console.error(err);
  }
};

const renderFilterData = async function (el) {
  try {
    el.preventDefault();
    const age = +selectAge.options[selectAge.selectedIndex].value;
    const level = selectLevel.options[selectLevel.selectedIndex].value;
    const gender = selectGender.options[selectGender.selectedIndex].value;
    const state = selectState.options[selectState.selectedIndex].value;

    const set = new Set([age, gender, state, level]);
    const fil = Array.from(set).filter((opt) => opt);
    if (!fil.length) {
      renderResult.renderError(model.datas.filterError);
      return renderTable.render(model.datas.students);
    }
    await model.fetchData();

    const filtered = model.filterByOpt(model.datas.students, fil);
    renderTable.render(filtered);
    form.reset();
  } catch (err) {
    renderResult.renderError(err);
  }
};

const renderStudentResult = function (e) {
  const btn = e.target.closest("button");
  if (!btn) return;
  console.log(btn);
  renderResult.render(model.datas.filterResults, body);
  body.classList.add("main");
};

window.addEventListener("load", renderStudentsData);
window.addEventListener("load", renderFormOpt);
form.addEventListener("submit", renderFilterData);
table.addEventListener("click", renderStudentResult);
