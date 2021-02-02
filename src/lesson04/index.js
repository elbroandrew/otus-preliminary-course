const user = {
  name: "John",
};

const input = prompt("Введите возвраст числом: ");
user.age = parseInt(input);

// copy object
const admin = { ...user };
admin.role = "admin";

// destructuring
const { name, age, role } = admin;

console.log(name);
