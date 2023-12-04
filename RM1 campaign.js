/*hover effect on the title*/
const titleElement = document.querySelector('.campaign-title');
titleElement.addEventListener('mouseover', () => {
  titleElement.style.color = 'black';
  titleElement.style.textShadow = '0 0 5px rgba(0, 0, 0, 0.2)';
});
titleElement.addEventListener('mouseout', () => {
  titleElement.style.color = 'green';
  titleElement.style.textShadow = 'none';
});

/*click on baqarah :261*/
const quranicverse = document.querySelector('p b');
quranicverse.addEventListener('click', () => {
  window.location.href = 'https://quran.com/2/261?translations=17,18,19,20,21,22,23,25,31,32,33,34,39,52,75,77,27,95,84,38,101';
});
/*click on iium logo*/
const iiumlogo = document.querySelector('.logo');
iiumlogo.addEventListener('click', () => {
  window.location.href = 'https://www.iium.edu.my/v2/';
});