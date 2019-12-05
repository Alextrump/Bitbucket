let data = [
  { score: 10, name: 'Bob' , age: 18},
  { score: 9, name: 'Ivan' , age: 24},
  { score: 8, name: 'Boris' , age: 14},
  { score: 7, name: 'Vasya' , age: 34},
  { score: 6, name: 'Ilya' , age: 15},
  { score: 5, name: 'Tod' , age: 54},
  { score: 4, name: 'Petr' , age: 32},
  { score: 3, name: 'Igor' , age: 44},
  { score: 2, name: 'Oleg' , age: 76},
  { score: 1, name: 'Morgan' , age: 37},
];



//Возвращает сумму всех очков
let a = data.map(item => item.score);
let sum = 0;
  for (let i=0; i<a.length; i++) {
  sum+=a[i];
  }

//Возвращает массив с участниками старше 18
data.filter(item => item.age >=18)

//Возвращает только массив с участниками с именем, начинающимся на B
data.filter(item => item.name.charAt(0) == 'B')

// Возвращает массив со строками вида "Bob - 18: 10"
data.map(item => item.name + " - " + item.age + ": " + item.score)
