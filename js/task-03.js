let massage;
const ADMIN_PASSWORD = "jqueryismyjam";
const enterPassword = prompt("Введите пароль:");

if (enterPassword === null) {
  massage = "Отменено пользователем!";
  console.log(massage);
} else if (ADMIN_PASSWORD === enterPassword) {
  massage = "Добро пожаловать!";
  console.log(massage);
} else {
  massage = "Доступ запрещен, неверный пароль!";
  console.log(massage);
}
