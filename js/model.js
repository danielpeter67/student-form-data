import { async } from "regenerator-runtime";
import {
  ALLSTUDENTDATA,
  ALLAGES,
  ALLEVELS,
  ALLSTATES,
  FILTERDATA,
  VIEWRESULT,
} from "./config.js";

import { AJAX, sendJSON } from "./helper.js";

export const datas = {
  students: {},
  ages: [],
  states: [],
  levels: [],
  genders: [],
  filterOpt: [],
  filterResults: {
    data: {},
    result: {},
    cummulative: {},
  },
  filterError: "",
};
export const fetchData = async function () {
  try {
    const data = await AJAX(ALLSTUDENTDATA);

    datas.students = data.data.students;
  } catch (err) {
    throw err;
  }
};
export const fetchFormOpt = async function () {
  try {
    const data1 = await AJAX(ALLAGES);
    const data2 = await AJAX(ALLEVELS);
    const data3 = await AJAX(ALLSTATES);

    datas.ages = Object.entries(data1.data).map(([key, val]) => val.age);
    datas.levels = Object.entries(data2.data).map(([key, val]) => val.level);
    datas.states = Object.entries(data3.data).map(([key, val]) => val.name);

    await fetchData();
    const filterd = datas.students.map((d) => {
      return d.gender;
    });

    const set = new Set(filterd);
    set.delete("female0");
    datas.genders = Array.from(set);
  } catch (err) {
    throw err;
  }
};

export const filterByOpt = function (arr, keys) {
  const res = arr.filter((obj) =>
    keys.every((term) => Object.values(obj).includes(term))
  );
  return res;
};

export const fetchPostRequest = async function () {
  try {
    let request = await sendJSON(VIEWRESULT);
    datas.filterResults = request;
    datas.filterResults.data = request.data;
    datas.filterResults.cummulative = request.data.cummulative;
    datas.filterResults.result = request.data.result;
  } catch (err) {
    throw err;
  }
};

export const fetchFilterResult = async function () {
  try {
    const request = await sendJSON(FILTERDATA);
    datas.filterError = request.message;
  } catch (err) {
    throw err;
  }
};
fetchPostRequest();
fetchFilterResult();
