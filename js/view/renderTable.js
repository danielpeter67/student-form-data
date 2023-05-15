class RenderTableData {
  _data;
  _parentElement = document.querySelector(".student-data");

  render(data) {
    this._data = data;
    const markup = this._generataMarkup();

    this._clear();
    this._parentElement.insertAdjacentHTML("beforeend", markup);
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }
  _generataMarkup() {
    return this._data
      .map((d, index) => {
        let filterStrings = [d.age, d.gender, d.level, d.state];
        return `
      <tr class="row">
        <td class="id">${(index + 1).toString().padStart(2, "0")}</td>
        <td class="surname">${d.surname}</td>
        <td class="firstName">${d.firstname}</td>
        ${filterStrings.map(this._generateFilterOpt).join("")}
        <td class="action">
       <button type="button">Download Result</button></td>      
      </tr>`;
      })
      .join("");
  }

  _generateFilterOpt(data) {
    return ` <td class="${data}">${data}</td>`;
  }
}

export default new RenderTableData();
