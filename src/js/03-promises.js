import Notiflix from 'notiflix';
import 'Notiflix/dist/notiflix-3.1.0.min.css';

const onFormSubmit = document.querySelector('.form');

function createPromise(position, delay) {
return new Promise((resolve, reject) => {
   const shouldResolve = Math.random() > 0.3;
      setTimeout(() => {
       if (shouldResolve) {
        resolve({position, delay});
        } else {
      reject({position, delay});
  }
  }, delay);
})
  .then(({ position, delay }) => {
          Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.warning(`❌ Rejected promise ${position} in ${delay}ms`);
        });

};

onFormSubmit.addEventListener('submit', onBtnClick)

function onBtnClick(e) {
  e.preventDefault();
  
  let delay = Number(e.target[0].value);
  let delays = Number(e.target[1].value);
  let position = Number(e.target[2].value);
  
  for (let i = 1; i <= position; i += 1) {
    if (i === 1) {
      delay;
    }
    else {
      delay += delays;
    }
    createPromise(i, delay);
   
  }
}






