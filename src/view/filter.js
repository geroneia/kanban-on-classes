// шаблон одного из фильтров
const createFilterItemTemplate = ({name, count}, isChecked) => {

  return (
    `<input
      type="radio"
      id="filter__${name}"
      class="filter__input visually-hidden"
      name="filter"
      ${isChecked ? `checked` : ``}
      ${count === 0 ? `disabled` : ``}
    />
    <label for="filter__${name}" class="filter__label">
      ${name} <span class="filter__${name}-count">${count}</span></label
    >`
  );
};

// заполняет шаблон массивом из фильтров
export const createFilterTemplate = (filterItems) => {
  const filterItemsTemplate = filterItems
    .map((filter, index) => createFilterItemTemplate(filter, index === 0))
    .join(``);

  return `<section class="main__filter filter container">
    ${filterItemsTemplate}
  </section>`;
};
