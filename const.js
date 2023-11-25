const myProfile = {
  name: "h662",
  age: 20,
  isRich: false,
};

console.log(myProfile);

myProfile.computer = "mac";

//Object.freeze(myProfile);

myProfile.age = 30;

console.log(myProfile);
