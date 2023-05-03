const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const dateEl = document.querySelector('.date')
const timeEl = document.querySelector('.time')

const days = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


function setTime() {
    const time = new Date();
    
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours>= 12 ? 'PM' : 'AM'

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`
  
    // timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}`: minutes} ${ampm}`
    timeEl.innerHTML = time.toLocaleTimeString();
    // dateEl.innerHTML = `${days[day]}, ${months[month]} ${date}`
    dateEl.innerHTML = time.toLocaleDateString('ru-RU', {day: '2-digit', weekday: 'long', month: 'long'})
}
const scale = (num, in_min, in_max, out_min, out_max) => (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min

setTime()
setInterval(setTime, 1000)


const hourEl1 = document.querySelector('.hour1')
const minuteEl1 = document.querySelector('.minute1')
const secondEl1 = document.querySelector('.second1')
const dateEl1 = document.querySelector('.date1')
const timeEl1 = document.querySelector('.time1')


function setTime1() {
    const time = new Date();
    
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours()-7;
    const hoursForClock = hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours>= 12 ? 'PM' : 'AM'

    hourEl1.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
    minuteEl1.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
    secondEl1.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`
  
    // timeEl1.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}`: minutes} ${ampm}`
    timeEl1.innerHTML = time.toLocaleTimeString('en-US', {timeZone: 'America/New_York'});
    // dateEl1.innerHTML = `${days[day]}, ${months[month]} ${date}`
    dateEl1.innerHTML = time.toLocaleDateString('en-US', {day: '2-digit', weekday: 'long', month: 'long'})
}
const scale1 = (num, in_min, in_max, out_min, out_max) => (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min

setTime1()
setInterval(setTime1, 1000)



const hourEl2 = document.querySelector('.hour2')
const minuteEl2 = document.querySelector('.minute2')
const secondEl2 = document.querySelector('.second2')
const dateEl2 = document.querySelector('.date2')
const timeEl2 = document.querySelector('.time2')


function setTime2() {
    const time = new Date();
    
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours()-1;
    const hoursForClock = hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours>= 12 ? 'PM' : 'AM'

    hourEl2.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
    minuteEl2.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
    secondEl2.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`
  
    // timeEl2.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}`: minutes} ${ampm}`
    timeEl2.innerHTML = time.toLocaleTimeString('de-DE', {timeZone: 'Europe/Berlin'})
    
   
    // dateEl2.innerHTML = `${days[day]}, ${months[month]} ${date}`;
    dateEl2.innerHTML = time.toLocaleDateString('de-DE', {day: '2-digit', weekday: 'long', month: 'long'})
}
const scale2 = (num, in_min, in_max, out_min, out_max) => (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min

setTime2()
setInterval(setTime2, 1000)