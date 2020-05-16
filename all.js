window.onload = function () {

  // multiplication_table 存放html結構
  let multiplication_table = "";
  for (let i = 2; i < 10; i++) {
    multiplication_table += `
    <div class="multiplication_table__item js-multiplication_table__item  color_primary bg_light my-20">
    <div class="multiplication_table__item-container mx-auto">
    <div class="multiplication_table__item-title">
      ${i}
    </div>
    <div class="multiplication_table__item__num">
      <span>${i}</span>
      <span>x</span>
      <span>${1}</span>
      <span>=</span>
      <span>${i * 1}</span>
    </div>
    <div class="multiplication_table__item__num">
      <span>${i}</span>
      <span>x</span>
      <span>${2}</span>
      <span>=</span>
      <span>${i * 2}</span>
    </div>
    <div class="multiplication_table__item__num">
      <span>${i}</span>
      <span>x</span>
      <span>${3}</span>
      <span>=</span>
      <span>${i * 3}</span>
    </div>
    <div class="multiplication_table__item__num mb-20">
    </div>
    <div class="multiplication_table__item__num">
      <span>${i}</span>
      <span>x</span>
      <span>${4}</span>
      <span>=</span>
      <span>${i * 4}</span>
    </div>
    <div class="multiplication_table__item__num">
      <span>${i}</span>
      <span>x</span>
      <span>${5}</span>
      <span>=</span>
      <span>${i * 5}</span>
    </div>
    <div class="multiplication_table__item__num">
      <span>${i}</span>
      <span>x</span>
      <span>${6}</span>
      <span>=</span>
      <span>${i * 6}</span>
    </div>
    <div class="multiplication_table__item__num">
      <span>${i}</span>
      <span>x</span>
      <span>${7}</span>
      <span>=</span>
      <span>${i * 7}</span>
    </div>
    <div class="multiplication_table__item__num">
      <span>${i}</span>
      <span>x</span>
      <span>${8}</span>
      <span>=</span>
      <span>${i * 8}</span>
    </div>
    <div class="multiplication_table__item__num">
      <span>${i}</span>
      <span>x</span>
      <span>${9}</span>
      <span>=</span>
      <span>${i * 9}</span>
    </div>
  </div>
    </div>
    `;
  }
  document.querySelector('.js-multiplication_table-group').insertAdjacentHTML('beforeend', multiplication_table);
};