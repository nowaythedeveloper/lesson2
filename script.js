'use strict';

let money, time, x, a;

function start () {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}

start();



let appData = {
    moneyData: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income:[],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце"),
            b = prompt("Во сколько обойдется?");
        if( typeof(a) === "string" && typeof(a) != null && typeof(b) != null && a!='' && b !='' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            --i;
        }
        
    }
}

chooseExpenses();

function chooseOptExpenses() {
    for (let i = 1; i < 4; i++) {
        let a = prompt("Статья необязательных расходов?")
        if( typeof(a) === "string" && typeof(a) != null && a!='' && a.length < 50) {
            console.log("done");
            appData.optionalExpenses[i] = a;
        } else {
            --i;
        }
        
    } 
}

chooseOptExpenses();

function calcPerDayMoney(a) {
    x = (a/30).toFixed();
    return x;
}  

appData.moneyPerDay = calcPerDayMoney(appData.moneyData);

alert("Ежедневный бюджет: " + appData.moneyPerDay);

function detectLevel() {
        if(appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Ошибка");
    }
}

detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();