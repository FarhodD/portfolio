// dropdown
const selectLang = document.querySelector('.change__languages-select');
const selectedLang = document.querySelector('.change__languages-selected');
const arrLang = document.querySelector('.change__languages-arr');
const listLang = document.querySelector('.change__languages-list');
const itemLangs = document.querySelectorAll('.change__languages-item');

selectLang.addEventListener('click', () => {
  arrLang.classList.toggle('change__languages-arr--rotate');
  listLang.classList.toggle('change__languages-list--open')
})

itemLangs.forEach(itemLang => {
  itemLang.addEventListener('click', () => {
    selectedLang.innerText = itemLang.innerText;
    arrLang.classList.remove('change__languages-arr--rotate');
    listLang.classList.remove('change__languages-list--open');

    itemLangs.forEach(itemLang => {
      itemLang.classList.remove('active');
    })
    itemLang.classList.add('active')
  })
})


// burger
const menuBtn = document.querySelector(".burger__menu"),
  submenu = document.querySelector(".menu");

function toggleMenu() {
  menuBtn.classList.toggle("active");
  submenu.classList.toggle("vis__submenu");
}