const credits = 23580;
const pricePerDroid = 3000;
let quantityDroid = prompt("Ведите кол-во дроидов которое хотите купить");
let totalPrice;
let balance;
let massage;

if (quantityDroid === null) {
  massage = "Отменено пользователем!";
} else if (Number.isNaN(Number(quantityDroid)) === true) {
  massage = "Вы ввели не верное значение, введите кол-во цыфрами";
} else {
  totalPrice = pricePerDroid * quantityDroid;
  console.log(totalPrice);
  if (totalPrice > credits) {
    massage = "Недостаточно средств на счету!";
  } else {
    balance = credits - totalPrice;
    massage = `Вы купили ${quantityDroid} дроидов, на счету осталось ${balance} кредитов`;
  }
}
console.log(massage);
