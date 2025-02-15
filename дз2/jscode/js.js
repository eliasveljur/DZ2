document.addEventListener("DOMContentLoaded", function () {

    // задача1

    let age = prompt("Введите ваш возраст:");
    if (age < 65) {
        alert("Вам ещё рано на пенсию");
    } else {
        alert("Поздравляем с пенсионным возрастом!");
    }

    // задача2

    let a = prompt("Введите первое число");
    let b = prompt("Введите второе число");
    if (a > b) {
        alert("Первое число больше");
    }
    else if (b > a) {
        alert("Второе число больше");
    }

    else {
        alert("Числа равны");
    }

    // задача3

    let num = prompt("Введите число");
    if (num % 2 === 0) {
      alert("Чётное")
    }
    else{
      alert("Нечётное")
    }

});