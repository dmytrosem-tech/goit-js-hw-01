let credits = 23580;
let pricePerDroid = 3000;
let totalPrice = 0;

const quantity = prompt('How many droids you want?')

if (quantity === null) {
    console.log('Отменено пользователем!');
} else {
    totalPrice = quantity * pricePerDroid;
    if (totalPrice > credits) {
       console.log('Недостаточно средств на счету!');
    } else if (totalPrice === NaN) {
       console.log('Maybe give as correct value?))');
    } else {
       console.log(`Вы купили ${quantity} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);
    }
}

