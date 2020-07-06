const credits = 23580;
const pricePerDroid = 3000;
let quantityDroid = prompt("Ведите кол-во дроидов которое хотите купить");
quantityDroid = Number(quantityDroid);
let totalPrice;
let balance;

if (quantityDroid === NaN) {
  let massage = "Отменено пользователем!";
  console.log(massage);
} else if (Number.isNaN(quantityDroid) === true) {
  let massage = "Вы ввели не верное значение, введите кол-во цыфрами";
  console.log(massage);
} else {
  let totalPrice = pricePerDroid * quantityDroid;
  console.log(totalPrice);
  if (totalPrice > credits) {
    let massage = "Недостаточно средств на счету!";
    console.log(massage);
  } else {
    balance = credits - totalPrice;
    let massage = `Вы купили ${quantityDroid} дроидов, на счету осталось ${balance} кредитов`;
    console.log(massage);
  }
}
