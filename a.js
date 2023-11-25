let x = "Global X";

function a() {
  let x = "Local X";

  console.log(x);
}

function b() {
  console.log(x);
}

a(); //
b();
