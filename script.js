'use strict';





let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY--MM--DD");
let answer1 = prompt("Введите обязательную статью расходов в этом месяце");
let answer2 = +prompt("Во сколько обойдется?");

let appData = {
    moneyData: money,
    timeData: time,
    expenses : {
        answer1,
        answer2
    },
    optionalExpenses: 0,
    income:[],
    savings: false
};

console.log(typeof(money));
console.log(typeof(answer2));

alert((appData.moneyData - appData.expenses.answer2)/30);


