class RenderTableOpt {
  _data;

  render(data, parentElement) {
    this._data = data;
    const markup = this._generateMarkup();

    parentElement.insertAdjacentHTML("beforeend", markup);
  }

  _generateMarkup() {
    return this._data
      .map((d) => {
        return `<option value="${d}">${d}</option>`;
      })
      .join("");
  }
}

export default new RenderTableOpt();
