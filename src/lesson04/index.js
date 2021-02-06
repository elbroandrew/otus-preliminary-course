// let input = prompt("Введите возвраст числом: ");

const user = {
    name: "John",
}

export function adminData(input){
  user.age = parseInt(input, 10);
  const admin = { ...user};
  admin.role = 'admin';
  return admin;
}

// const {name, age, role} = adminData(input);