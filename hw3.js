let cartItems = ["abc"];
var sortId = 1;

function updateCartDisplay() {
  const itemList = document.getElementById("itemList");
  itemList.innerHTML = "";

  cartItems.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    itemList.appendChild(li);
  });
}

function addItem() {
  const itemName = prompt("Введите:");

  if (itemName) {
    cartItems.push(itemName);
    updateCartDisplay();
    addItem();
  }
}

updateCartDisplay();

var bellCount = document.getElementById("notifCounter");
var template = document.getElementsByClassName("notif")[0];
var notifParent = document.getElementById("notifContainer");7
var notifShowed = 0;
var allNotif = 0;
var interval = null;
startNotif();

function showNotification(timeout){
  allNotif++;
  bellCount.textContent = allNotif;

  notifShowed++;
  var newnotif = template.cloneNode(true);
  newnotif.style.display = "block";
  newnotif.style.top = notifShowed * 60 + "px";

  notifParent.appendChild(newnotif);

  setTimeout(function() {
    closeNotification(newnotif);
  }, timeout * 1000)
}

function closeNotification(obj){
  notifShowed--;
  obj.remove();
}

function startNotif(){
  showNotification();
  interval = setInterval(showNotification, 3000, 1.5);
}

function stopNotif(){
  if (interval == null) return;
  
  clearInterval(interval);
  interval = null;
  let f = function () {
		setTimeout(startNotif, 10 * 1000);
  }
  f();
}
