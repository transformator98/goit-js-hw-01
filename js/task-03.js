let massage;
const ADMIN_PASSWORD = "jqueryismyjam";
const enterPassword = prompt("Введите пароль:");

if (enterPassword === null) {
  massage = "Отменено пользователем!";
} else if (ADMIN_PASSWORD === enterPassword) {
  massage = "Добро пожаловать!";
} else {
  massage = "Доступ запрещен, неверный пароль!";
}
console.log(massage);
