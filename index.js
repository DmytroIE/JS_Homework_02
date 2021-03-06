//MAIN TASK

let userInput;
const numbers = [];
let total = 0;

do{
  userInput=prompt('Введите число');
  if ( userInput===null ){
    alert('Прервано пользователем');
    break;
  }

  if ((Number.isNaN(+userInput)) || (+(userInput)===0 && userInput !== '0')){
    alert('Введите нормальное число');
    continue;
  }

  numbers.push(+userInput);
}
while (true);


for (const value of numbers){
  total+=value;
}

if (numbers.length === 0){
  alert('Массив пустой');
}
else{
  alert(`Общая сумма чисел = ${total}`);
}

//ADDITIONAL TASK

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attempts = 3;
let password;

do{
  password = prompt('Введите пароль');

  if (passwords.includes(password)){
    alert('Добро пожаловать!');
    break;
  }
  else if (password === null){
    alert('Прекращено пользователем');
    break;
  }
  else{
    attempts-=1;
    if (attempts>0){
      alert(`Неправильный пароль, осталось ${attempts} попыток`);
    }
    else{
      alert(`Доступ заблокирован`);
      break;
    }
  }

}while (1);