
var contents = document.getElementById("contents");
var l1temp = document.getElementsByClassName("l1")[0];
var l2temp = document.getElementsByClassName("l2")[0];
var randAmount = 1 + Math.random() * 5;
for(let i = 0; i < randAmount; i++){
  if (Math.random() <= 0.5){
    var temp = l1temp.cloneNode(true);
    contents.appendChild(temp);
  }
  else{
    var temp = l2temp.cloneNode(true);
    contents.appendChild(temp);
  }
}

document.getElementById('contents').addEventListener('click', function (event) {
  var targetElement = event.target;
  while (targetElement && targetElement.tagName !== 'A') {
      targetElement = targetElement.parentNode;
  }

  if (targetElement && targetElement.tagName === 'A') {
      var isConfirmed = window.confirm('Do you really want to leave the page?');
      if (!isConfirmed) {
          event.preventDefault();
      }
  }
});

var allPics = ["Рисунок1.jpg", "Рисунок2.png", "fredy.png", "papich.png", "clown.jpg"];
var mainPic = document.getElementById("mainImg");
function changePic(id){
  mainPic.src = allPics[id];
}

document.getElementById('selectableList').addEventListener('click', function(event) {
  var listItem = event.target;

  var isCtrlPressed = event.ctrlKey || event.metaKey;

  var listItems = this.getElementsByTagName('li');
  if (!isCtrlPressed){
    for (var i = 0; i < listItems.length; i++) {
      listItems[i].classList.remove('selected');
    }
  }

  if (listItem.tagName === 'LI') {
    if (listItem.classList.contains("selected"))
      listItem.classList.remove('selected');
    else
      listItem.classList.add('selected');
  }

  event.preventDefault();
});

document.getElementById('selectableList').addEventListener('selectstart', function(e) {
  e.preventDefault();
  return false;
});



var sliderBar = document.getElementById('sliderBar');
var slider = document.getElementById('slider');
let isDragging = false;

slider.addEventListener('mousedown', () => {
  isDragging = true;
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    var sliderBarRect = sliderBar.getBoundingClientRect();
    let newPosition = e.clientX - sliderBarRect.left;

    newPosition = Math.max(0, Math.min(newPosition, sliderBarRect.width - slider.offsetWidth));

    slider.style.left = newPosition + "px";
  }
});

document.addEventListener('mouseleave', () => {
  if (isDragging) {
    var sliderBarRect = sliderBar.getBoundingClientRect();
    slider.style.left = (sliderBarRect.width - slider.offsetWidth) + "px";
    isDragging = false;
  }
});


let totalCost = 0;

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.dataset.price);
}
  
function allowDrop(ev) {
  ev.preventDefault();
}
  
function drop(ev) {
  ev.preventDefault();
  const price = parseInt(ev.dataTransfer.getData("text"));
  totalCost += price;

  const totalCostElement = document.getElementById("total-cost");
  totalCostElement.textContent = "Total Cost: $" + totalCost;

  const draggedProduct = document.createElement("p");
  draggedProduct.textContent = "Product - $" + price;
  draggedProduct.style.marginBottom = "0px";

  document.getElementById("cart").appendChild(draggedProduct);  // Append the dragged product to the drop target
}
  
const containerAnim = document.getElementById('containerAnim');
const floatingBox = document.getElementById('floatingBox');
let speed = 0.5; // Скорость анимации (подстройте по необходимости)
let angle = 0;
let time = 0;

function updatePosition() {
  const containerRect = containerAnim.getBoundingClientRect();
  const boxRect = floatingBox.getBoundingClientRect();
  const centerX = containerRect.width / 2;
  const centerY = containerRect.height / 2;
  const radius = Math.min(containerRect.width, containerRect.height) / 3;

  // Рандомизируем скорость в диапазоне от 0.5 до 1.5
  speed = 0.5 * Math.sin(time);
  time += 0.01; 
  angle += speed;

  const newX = centerX + radius * Math.cos(angle) + 550; // 50 - радиус вращения, подстройте по необходимости
  const newY = centerY + radius * Math.sin(angle) + 50;

  floatingBox.style.left = `${newX - boxRect.width / 2}px`;
  floatingBox.style.top = `${newY - boxRect.height / 2}px`;

  requestAnimationFrame(updatePosition);
}

updatePosition()


const floatingBox1 = document.getElementById('floatingBox1');

function updatePosition1() {
  const docWidth = document.documentElement.clientWidth;
  const docHeight = document.documentElement.clientHeight;
  const boxRect1 = floatingBox1.getBoundingClientRect();

  // Задаем случайные координаты в пределах всего документа
  const randomX = Math.random() * (docWidth - boxRect1.width);
  const randomY = Math.random() * (docHeight - boxRect1.height);

  // Используем CSS transition для плавного передвижения
  floatingBox1.style.transition = 'left 2s ease-in-out, top 2s ease-in-out';

  const newX = randomX;
  const newY = randomY;

  floatingBox1.style.left = `${newX}px`;
  floatingBox1.style.top = `${newY}px`;

  // Сбрасываем transition после завершения анимации
  setTimeout(() => {
    floatingBox1.style.transition = 'none';
    requestAnimationFrame(updatePosition1);
  }, 3000);
}



// Запускаем анимацию
updatePosition1();








