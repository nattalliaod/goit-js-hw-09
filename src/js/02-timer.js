import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import 'Notiflix/dist/notiflix-3.1.0.min.css'
const refs = {
    start: document.querySelector('[data-start]'),
    daysC: document.querySelector('[data-days]'),
    hoursC: document.querySelector('[data-hours]'),
    minsC: document.querySelector('[data-minutes]'),
    secondsC: document.querySelector('[data-seconds]')
}

const { start, daysC, hoursC, minsC, secondsC} = refs;
start.disabled = true;

const selector = 'input#datetime-picker';
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        start.disabled = false;
        if (selectedDates[0] < Date.now()) {
          Notiflix.Notify.failure('Please choose a date in the future');
        } else {
            
              setInterval(() => {
                const deltaTime = selectedDates[0] - Date.now();
                console.log(deltaTime);
                  insertValues(convertMs(deltaTime));
                }, 1000);
      }
    console.log(selectedDates[0]);
  },
};

flatpickr(selector, options);

start.addEventListener('click', flatpickr)

function pad(value) {
    return String(value).padStart(2, '0');
}
  
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = pad(Math.floor(ms / day));
  const hours = pad(Math.floor((ms % day) / hour));
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function insertValues({ days, hours, minutes, seconds }) {
    daysC.innerHTML = days;
    hoursC.innerHTML = hours;
    minsC.innerHTML = minutes;
    secondsC.innerHTML = seconds;
}
