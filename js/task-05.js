const creditChina = 100;
const creditChile = 250;
const creditAustralia = 170;
const creditIndia = 80;
const creditJamaica = 120;

const china = "КИТАЙ";
const chile = "ЧИЛИ";
const australia = "АВСТРАЛИЯ";
const india = "ИНДИЯ";
const jamaica = "ЯМАЙКА";
let message = prompt("В какую страну необходимо оформить доставку?");

if (message === null) {
  alert("Отмена ввода пользователем!");
} else {
  switch (message.toUpperCase()) {
    case china: {
      alert(`'Доставка в ${china} будет стоить ${creditChina} кредитов'`);
      break;
    }
    case chile: {
      alert(`'Доставка в ${chile} будет стоить ${creditChile} кредитов'`);
      break;
    }
    case australia: {
      alert(
        `'Доставка в ${australia} будет стоить ${creditAustralia} кредитов'`
      );
      break;
    }
    case india: {
      alert(`'Доставка в ${india} будет стоить ${creditIndia} кредитов'`);
      break;
    }
    case jamaica: {
      alert(`'Доставка в ${jamaica} будет стоить ${creditJamaica} кредитов'`);
      break;
    }
    default: {
      alert("В вашей стране доставка не доступна");
    }
  }
}
