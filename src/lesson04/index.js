export function adminData(input) {
  const user = {
    name: "John",
  };
  user.age = parseInt(input, 10);
  const admin = { ...user };
  admin.role = "admin";
  return admin;
}
