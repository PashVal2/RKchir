// task 1
var centeredElement = document.getElementById('centeredElement');
var centeredImage = document.getElementById('centeredImage');

function centerElement() {
    var centerX = window.innerWidth / 2;
    var centerY = window.innerHeight / 2;

    centeredElement.style.left = centerX + 'px';
    centeredElement.style.top = centerY + 'px';

    centeredImage.style.marginLeft = -centeredImage.width / 2 + 'px';
    centeredImage.style.marginTop = -centeredImage.height / 2 + 'px';
}
document.addEventListener('click', function (event) {
    var clickX = event.clientX;
    var clickY = event.clientY;
    console.log('Click: (' + clickX + ', ' + clickY + ')');
});

window.addEventListener('resize', centerElement);
centerElement();



// task 2
function createNotification(message) {
  const container = document.getElementById('notification-container');

  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.innerHTML = message;

  const closeButton = document.createElement('span');
  closeButton.className = 'close-button';
  closeButton.innerHTML = '&times;';

  closeButton.addEventListener('click', function () {
      container.removeChild(notification);
  });

  notification.appendChild(closeButton);

  container.appendChild(notification);
}

setInterval(createNotification, 1000, 'U')




// task 3
var ficusTemp = document.getElementsByClassName("ficus")[0];
var ficusTemp1 = document.getElementsByClassName("ficus")[1];
var containerFicus = document.getElementById("ficusContainer");
var ficuses = [];
var speeds = [];
var dY = []; // Change variable name to dY for displacement along the y-axis
var amount = 200;
var maxSpeed = 0.5;
var maxScale = 10;
var maxScale1 = 20;
var resetThreshold = 1000; // Порог сброса позиции

// Для первого элемента ficusTemp
for (let i = 0; i < amount / 2; i++) {
  var clone = ficusTemp.cloneNode(true);
  ficuses.push(clone);
  dY.push(0); // Change array name to dY
  var a = Math.random();
  speeds.push(a * maxSpeed);
  ficuses[i].style.opacity = a + 0.1;
  ficuses[i].style.zIndex = Math.round(speeds[i] * 100);
  ficuses[i].style.width = lerp(0, maxScale1, a) + "px";
  ficuses[i].style.left = Math.random() * (window.innerWidth - 100) + "px";
  ficuses[i].style.top = Math.random() * (window.innerHeight - 100) + "px";
  containerFicus.appendChild(clone);
  ficuses[i].style.transform = 'rotate(0deg) translate(0, ' + (-dY[i]) + 'px)'; // Adjust the translate property
}

// Для второго элемента ficusTemp1
for (let i = amount / 2; i < amount; i++) {
  var clone = ficusTemp1.cloneNode(true);
  ficuses.push(clone);
  dY.push(0); // Change array name to dY
  var a = Math.random();
  speeds.push(a * maxSpeed);
  ficuses[i].style.opacity = a + 0.1;
  ficuses[i].style.zIndex = Math.round(speeds[i] * 100);
  ficuses[i].style.width = lerp(0, maxScale, a) + "px";
  ficuses[i].style.left = Math.random() * (window.innerWidth - 100) + "px";
  ficuses[i].style.top = Math.random() * (window.innerHeight - 100) + "px";
  containerFicus.appendChild(clone);
  ficuses[i].style.transform = 'rotate(0deg) translate(0, ' + (-dY[i]) + 'px)'; // Adjust the translate property
}

ficusTemp.style.display = "none";
ficusTemp1.style.display = "none";

function lerp(a, b, alpha) {
  return a + alpha * (b - a);
}

document.addEventListener('wheel', function (event) {
  var scrolled = event.deltaY;
  for (let i = 0; i < amount; i++) {
    dY[i] += (scrolled * speeds[i]);

    // Проверка на превышение порога
    if (Math.abs(dY[i]) > resetThreshold) {
      dY[i] = 0; // Сброс в исходную точку
    }

    ficuses[i].style.transform = 'rotate(0deg) translate(0, ' + (-dY[i]) + 'px)';
  }
});









// task 4
var scrolls = [220, 640, 810];
var alltetxs = document.getElementsByClassName("text");

document.addEventListener('wheel', function(event) {

  for(let i = 0; i < scrolls.length; i++){
    if (window.scrollY >= scrolls[i] && !alltetxs[i].classList.contains("appearAnim"))
      {
        alltetxs[i].classList.remove("disappearAnim");
        alltetxs[i].classList.add("appearAnim");
      }
    else if (window.scrollY < scrolls[i] && alltetxs[i].classList.contains("appearAnim"))
      {
        alltetxs[i].classList.add("disappearAnim");
        alltetxs[i].classList.remove("appearAnim");
      }

  }
});
