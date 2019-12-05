'use strict'
let data = [
	{ score: 10, name: 'bob' , age: 18},
  { score: 9, name: 'ivan' , age: 24},
  { score: 8, name: 'Boris' , age: 14},
  { score: 7, name: 'vasya' , age: 34},
  { score: 6, name: 'ilya' , age: 15},
  { score: 5, name: 'tod' , age: 54},
  { score: 4, name: 'petr' , age: 32},
  { score: 3, name: 'igor' , age: 44},
  { score: 2, name: 'oleg' , age: 76},
  { score: 1, name: 'morgan' , age: 37},
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
