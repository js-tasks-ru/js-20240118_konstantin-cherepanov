export default class SortableTable {
  element;
  subElements = {};

  constructor(headerConfig = [], data = []) {
    this.headerConfig = headerConfig;
    this.data = Array.isArray(data) ? data : data.data;
    this.createElement();
    this.subElements = {};
  }

  sort(fieldValue, orderValue = 'asc') {
    const sortedArray = [...this.data];
    const direction = {
      'asc': 1,
      'desc': -1
    };
    const sortFunctions = {
      'number': (a, b) => a - b,
      'string': (a, b) => a.localeCompare((b), ['ru', 'en'])
    };
    const sortType = this.headerConfig.find((headerValue) => headerValue.id === fieldValue).sortType;
    sortedArray.sort((a, b) => direction[orderValue] * sortFunctions[sortType](a[fieldValue], b[fieldValue]));
    this.update(sortedArray);
  }

  createTemplateHeader() {
    return (`
      <div class = "sortable-table__header sortable-table__row">
        ${this.headerConfig.map((headerItem) => this.createTemplateHeaderCell(headerItem)).join('')}
      </div>
    `);
  }

  createTemplateHeaderCell({
    title
  }) {
    return (`
      <div class="sortable-table__cell" data-id="images" data-sortable="false" data-order="">
        <span>${title}</span>
        <span data-element="arrow" class="sortable-table__sort-arrow">
        <span class="sort-arrow"></span>
      </span>
      </div>
    `);
  }

  createTemplateCell(dataValue, template) {
    return (
      template ? template(dataValue) : `<div class="sortable-table__cell">${dataValue}</div>`
    );
  }

  createTemplateRow(dataRow) {
    const cell = this.headerConfig
      .map(({
        id,
        template
      }) => this.createTemplateCell(dataRow[id], template))
      .join('');
    return (`<div class="sortable-table__row">${cell}</div>`);
  }

  createTemplateTableBody() {
    return (
      this.data.map((dataRow) => this.createTemplateRow(dataRow))
    );
  }

  createTemplateTable() {
    return (`
      <div class="sortable-table">
         ${this.createTemplateHeader()}
         <div class="sortable-table__body" data-role="body">
           ${this.createTemplateTableBody().join('')}
         </div>
      </div>
    `);
  }

  update(sortedData) {
    this.data = sortedData;
    if (!this.subElements.body) {
      this.subElements = {
        body: document.querySelector('[data-role="body"]')
      };
    }
    this.subElements.body.innerHTML = this.createTemplateTableBody().join('');
  }

  createElement() {
    const element = document.createElement('div');
    element.innerHTML = this.createTemplateTable();
    this.element = element.firstElementChild;
  }

  remove() {
    this.element.remove();
  }

  destroy() {
    this.remove();
  }
}
