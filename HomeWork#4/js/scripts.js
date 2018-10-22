console.log ("***Задание №1***");

  function numObj(num){
    if (isNaN(num)){
      console.log('Ошибка: параметр не является числом');
    } else if(num > 999 || num < 0){
        console.log('Ошибка: допустимый диапазон 0-999');
      var obj={};
      return obj;
    } else {
        var digits=['единицы','десятки','сотни'];
      var obj={};
      var i = 0;
      for(var i = 0; num != 0; i++) {
        obj[digits[i]] = num%10;
        num = (num - num%10) /10;
        }
        }  
        return obj;
    }
console.log(numObj(245));
console.log(numObj(45));
console.log(numObj(5));
console.log(numObj(1005));
console.log(numObj(0));
console.log(numObj(999));

console.log('***Задание №2***');

let bask = new Array ("smartphone", "tablet","notebook");
let smartphone = {
  make: "Samsung",
  model: "P720",
  year: 2015,
  color: "black",
  diagonal: 5
  };
  
console.log (bask[0]);
console.log (smartphone.make);
console.log (smartphone.model);
console.log (smartphone.year);
console.log (smartphone.color);
console.log (smartphone.diagonal);

let tablet = {
  make: "Asus",
  model: "Nexus",
  year: 2016,
  color: "silver",
  diagonal: 7 
};

console.log (bask[1]);
console.log (tablet.make);
console.log (tablet.model);
console.log (tablet.year);
console.log (tablet.color);
console.log (tablet.diagonal);

let notebook = {
  make: "Lenovo",
  model: "ThinkPad",
  year: 2018,
  color: "white",
  diagonal: 14 
};

console.log (bask[2]);
console.log (notebook.make);
console.log (notebook.model);
console.log (notebook.year);
console.log (notebook.color);
console.log (notebook.diagonal);

console.log("Количество товаров в корзине:", bask.length);


  
  

