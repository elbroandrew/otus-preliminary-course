let user = {
  name: "John",
}

let input = prompt("Введите возвраст числом: ");
user.age = parseInt(input);

//copy object
let admin = Object.assign({}, user);
admin.role = 'admin';

//destructuring
let {name, age, role} = admin;

console.log(name)