const hourHand = document.querySelector(".hourHand");
const minuteHand = document.querySelector(".minuteHand");
const secondHand = document.querySelector(".secondHand");
const timeDisplay = document.querySelector(".time");

function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const secondDeg = (seconds / 60) * 360;
  const minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
  const hourDeg = (hours % 12 / 12) * 360 + (minutes / 60) * 30;

  secondHand.style.transform = `translate(-50%, 0) rotate(${secondDeg}deg)`;
  minuteHand.style.transform = `translate(-50%, 0) rotate(${minuteDeg}deg)`;
  hourHand.style.transform = `translate(-50%, 0) rotate(${hourDeg}deg)`;

  timeDisplay.innerHTML = `
    ${hours.toString().padStart(2, '0')} :
    ${minutes.toString().padStart(2, '0')} :
    <small>${seconds.toString().padStart(2, '0')}</small>
  `;
}

setInterval(updateClock, 1000);
updateClock();