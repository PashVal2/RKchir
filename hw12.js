let cartItems = [
  { name: "Товар 1 ", price: 10, quantity: 1 },
  { name: "Товар 2 ", price: 20, quantity: 1 },
  { name: "Товар 3 ", price: 30, quantity: 1 },
  { name: "Товар 4 ", price: 40, quantity: 1 }
];
var sortId = 1;

function updateCartDisplay() {
  const itemList = document.getElementById("itemList");
  const itemList_filtered = document.getElementById("itemList_filtered");
  const totalCostElement = document.getElementById("totalCost");
  itemList.innerHTML = "";
  itemList_filtered.innerHTML = "";

  let totalCost = 0;

  cartItems.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.name;
    itemList.appendChild(li);

    var spanElement = document.createElement("span");
    spanElement.textContent = item.quantity + "шт.";
    li.appendChild(spanElement);

    spanElement = document.createElement("span");
    spanElement.textContent = "$" + item.price * item.quantity;
    li.appendChild(spanElement);

    totalCost += item.price * item.quantity;
  });
  totalCostElement.textContent = `Итоговая стоимость: $${totalCost}`;

  cartItems_filtered = filterArray(cartItems, getVal("a"), getVal("b"));
  cartItems_filtered.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.name;
    itemList_filtered.appendChild(li);

    var spanElement = document.createElement("span");
    spanElement.textContent = item.quantity + "шт.";
    li.appendChild(spanElement);

    spanElement = document.createElement("span");
    spanElement.textContent = "$" + item.price * item.quantity;
    li.appendChild(spanElement);
  });

  sortItems();
}

function removeItem() {
  if (cartItems.length > 0) {
    const randomIndex = Math.floor(Math.random() * cartItems.length);
    cartItems.splice(randomIndex, 1);
    updateCartDisplay();
  } else {
    alert("Корзина пуста!");
  }
}

function addItem() {
  const itemName = prompt("Введите название товара:");
  const itemQuantity = parseInt(prompt("Введите количество товара:"));

  if (itemName && !isNaN(itemQuantity) && itemQuantity > 0) {
    const newItem = { name: itemName + " ", price: 50, quantity: itemQuantity };
    cartItems.push(newItem);

    updateCartDisplay();
  } else {
    alert("Введите корректные данные.");
  }
}

function clearCart() {
  cartItems = [];
  updateCartDisplay();
}
updateCartDisplay();


function filter(){
  updateCartDisplay();
}

function filterArray(arr, a, b) {
  var filteredArray = arr.filter(item => item.price * item.quantity >= a && item.price * item.quantity <= b);
  return filteredArray;
}

function getVal(a) {
  const inputElement = document.getElementById("inptNum" + a);
  const inputValue = parseInt(inputElement.value);

  if (!isNaN(inputValue)) {
   return inputValue;
  } else {
    if (a == "a") return 0
    else return 100000000;
  }
}

function sortAscending(arr) {
  return arr.slice().sort((a, b) => a.price * a.quantity - b.price * b.quantity);
}
function sortDescending(arr) {
  return arr.slice().sort((a, b) => b.price * b.quantity - a.price * a.quantity);
}

function changeSort(){
  sortId = -sortId;
  sortItems();
}

function sortItems(){
  const itemList_sorted = document.getElementById("itemList_sorted");
  itemList_sorted.innerHTML = "";
  if (sortId == 1)
    var sortedArr = sortAscending(cartItems);
  else
    var sortedArr = sortDescending(cartItems);

  sortedArr.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.name;
    itemList_sorted.appendChild(li);

    var spanElement = document.createElement("span");
    spanElement.textContent = item.quantity + "шт.";
    li.appendChild(spanElement);

    spanElement = document.createElement("span");
    spanElement.textContent = "$" + item.price * item.quantity;

    li.appendChild(spanElement);
  });
}