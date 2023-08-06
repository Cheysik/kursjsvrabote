window.addEventListener('DOMContentLoaded', () => {
  const tabItem = document.querySelectorAll('.tabheader__item'),tabContent = document.querySelectorAll('.tabcontent'),
  tabItems = document.querySelector('.tabheader__items');

function hideTabContent() { 
tabContent.forEach(item => {
  item.style.display = 'none';
})
tabItem.forEach(item =>{
    item.classList.remove('tabheader__item_active');
})
};
function showTabContent(i = 0) {
  tabContent[i].style.display = 'block';
  tabItem[i].classList.add('tabheader__item_active');
}
hideTabContent();
showTabContent();

tabItems.addEventListener('click', (event) => {
  const target = event.target;
  
  if(target && target.classList.contains('tabheader__item')) {
    tabItem.forEach((item, i) => {
      if(target == item) {
hideTabContent();
showTabContent(i);
      }
    });
  }
});

});







