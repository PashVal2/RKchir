capchaDiv = document.getElementById('capcha')
button = document.getElementById('button')
inp = document.getElementById('inp')
button1 = document.getElementById('button1')

let capcha = {
    result: "",
    b: 0,
    c: 0,
    flag: 0,
    generate() {
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var charactersLength = characters.length;
        for (var i = 0; i < 5; i++) {
            this.result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        console.log(this.result);
    },
    check(a) {
        return a == this.result
    },
    generate1() {
        this.b = Math.floor(Math.random() * 10)
        this.c = Math.floor(Math.random() * 10)
        this.result = this.b + " + " + this.c
        this.flag = 1
    },
    check1(a) {
        return parseInt(a) == this.b + this.c
    },
}

capcha.generate();
capchaDiv.innerHTML = capcha.result;

button.addEventListener('click', function(e) {
    if (capcha.flag == 0) {
        flag = capcha.check(inp.value); 
        if (flag) {
            alert("верно")
            button1.removeAttribute("disabled")
        }
        else
            capcha.generate1();
        capchaDiv.innerHTML = capcha.result;
    }
    else {
        flag = capcha.check1(inp.value); 
        if (flag) {
            alert("верно")
            button1.removeAttribute("disabled")
        }
        else
        alert("ошибка")
    }
})

card = document.getElementById('cards')
bForCard = document.getElementById('bForCard')
inpForCard = document.getElementById('inpForCard')
maxlengh = 12
card.innerHTML = ""

function truncate(str, maxlengh) {
    if (str.length <= maxlengh) {
        return str
    }
    else {
        return str = str.substring(0, maxlengh - 3) + "..."
    }
}
bForCard.addEventListener('click', function(e) {
    card.innerHTML = truncate(card.innerHTML + inpForCard.value, maxlengh)
})

class bucket {
    value = 0
    constructor(value) {
        this.value = value
    }
    read() {
        var tmp = prompt("Введите значение");
        this.value += parseInt(tmp)
    }
}

bucket = new bucket(0);

bucket.read();
bucket.read();
bucket.read();
console.log(bucket.value)
