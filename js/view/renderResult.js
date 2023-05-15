class RenderResult {
  _data;
  _parentElement;

  _overlay = document.querySelector(".overlay");
  _modal = document.querySelector(".modal");

  render(data, parentElement) {
    this._data = data;
    this._parentElement = parentElement;
    const markup = this._generateMarkup();

    this._clear();
    this._parentElement.insertAdjacentHTML("beforeend", markup);
  }

  renderError(message) {
    const markup = `<p>${message}</p>`;
    this._modal.innerHTML = "";
    this._modal.insertAdjacentHTML("beforeend", markup);
    this._overlay.classList.remove("hidden");
    this._modal.classList.remove("hidden");

    return setTimeout(() => {
      this._overlay.classList.add("hidden");
      this._modal.classList.add("hidden");
    }, 3000);
  }
  _clear() {
    this._parentElement.innerHTML = "";
  }

  _generateMarkup() {
    return `
      <header class="result-heading margin-bottom flex">     
        <img src="${this._data.logo}" alt="college-logo" class="logo" />
      <div class="result-heading-text">
        <h2 class="college-program fs-400 gray uppercase">
          fremont college of education
        </h2>
        <h5 class="program-address gray-light fs-300">
          No.5 Raymond Osuman Street, PMB 2191 Maitama, Abuja, Nigeria
        </h5>
        <h1 class="program-name grayish fs-500">
          Post Graduate Diploma in Education
        </h1>
        <h6 class="program-info gray fs-300">
          Student First Semester Statement Of Result
        </h6>
      </div>    
        <img src="${
          this._data.profile_picture
        }" alt="Profile-picture" class="profile-picture" />
    </header>

    <main>
      <div class="student-info margin-bottom">
        <div class="column col-1">
          <div class="info name flex grayish fs-300">
            <p class="name">Name:</p>
            <p>${this._data.data.firstname} ${this._data.data.surname}</p>
          </div>
          <div class="info level flex grayish fs-300">
            <p class="name">Level:</p>
            <p>${this._data.data.level}</p>
          </div>
        </div>

        <div class="column col-2">
          <div class="info reg-no flex grayish fs-300">
            <p class="name">Reg. No:</p>
            <p>${this._data.data.reg_no}</p>
          </div>
          <div class="info session flex grayish fs-300">
            <p class="name">Session:</p>
            <p>${this._data.data.session}</p>
          </div>
        </div>
      </div>

      <div class="result-table tables margin-bottom">
        <table class="customTable result margin-bottom">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>Unit</th>
              <th>Grade</th>
              <th>Total Point</th>
            </tr>
          </thead>
          <tbody class="student-data">${this._data.result
            .map((d, index) => {
              return `
            <tr class="grayish">
              <td class="${index + 1}">${index + 1}</td>
              <td class="${d.coursecode}">${d.coursecode}</td>
              <td class="${d.title}">${d.title}</td>
              <td class="${d.credit_unit}">${d.credit_unit}</td>
              <td class="${d.grade}">${d.grade}</td>
              <td class="${d.total_point}">${d.total_point}</td>
            </tr>
            `;
            })
            .join("")}
            
          </tbody>
        </table>

        <table class="customTable result result-unit">
          <thead>
            <tr>
              <th>UNTS</th>
              <th>UNTD</th>
              <th>GPTS</th>
              <th>GPTD</th>
              <th>GPATS</th>
              <th>GPATD</th>
            </tr>
          </thead>
          <tbody class="student-data">
            <tr class="grayish">
              <td class="id">${this._data.cummulative.unts}</td>
              <td class="id">${this._data.cummulative.unts}</td>
              <td class="id">${this._data.cummulative.unts}</td>
              <td class="id">${this._data.cummulative.unts}</td>
              <td class="id">${this._data.cummulative.unts}</td>
              <td class="id">${this._data.cummulative.gpatd}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="flex remark fs-300">
        <h4 class="grayish">Remarks:</h4>
        <h4>${this._data.cummulative.remarks}</h4>
      </div>

      <div class="registrar">
        <h4 class="fs-300 grayish">Registrar</h4>
      </div>
    </main>
      `;
  }
}

export default new RenderResult();
