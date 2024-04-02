// "use strict";
// Exercise 1:
const myObject = {
  value: Number(prompt("Nhập vào một cạnh hình vuông")),
};
const chuVi = function () {
  return myObject.value * 4;
};
const dienTich = function () {
  return myObject.value ** 2;
};
console.log(chuVi(), dienTich());

// Exercise 2:
const myObject = {
  value: Number(prompt("Nhập bán kính: ")),
};
const chuVi = function () {
  return myObject.value * 2 * 3.14;
};
const dienTich = function () {
  return myObject.value ** 2 * 3.14;
};
console.log(chuVi().toFixed(2), dienTich().toFixed(2));

// Exercise 3:
const myObject = {
  valueHeight: Number(prompt("Nhập chiều dài")),
  valueWidth: Number(prompt("Nhập chiều rộng")),
};
const chuVi = function () {
  return (myObject.valueHeight + myObject.valueWidth) * 2;
};
const dienTich = function () {
  return myObject.valueHeight * myObject.valueWidth;
};
console.log(chuVi(), dienTich());

// Exercise 4:
const myObject = {
  value1: Number(prompt("Nhập số thứ nhất")),
  value2: Number(prompt("Nhập số thứ hai")),
};
const tong = function () {
  return myObject.value1 + myObject.value2;
};
const tich = function () {
  return myObject.value1 * myObject.value2;
};
console.log(tong(), tich());

// Exercise 5:
const myObject = {
  value1: Number(prompt("Nhập số thứ 1:")),
  value2: Number(prompt("Nhập số thứ 2:")),
  value3: Number(prompt("Nhập số thứ 3:")),
};
const tbc = function () {
  return (myObject.value1 + myObject.value2 + myObject.value3) / 3;
};
console.log(tbc().toFixed(1));

// Exercise 6:
const myObject = {
  value1: Number(prompt("Nhập cạnh thứ 1:")),
  value2: Number(prompt("Nhập cạnh thứ 1:")),
  value3: Number(prompt("Nhập cạnh thứ 1:")),
};
const chuVi = function () {
  return myObject.value1 + myObject.value2 + myObject.value3;
};
const dienTich = function () {
  const p = chuVi() / 2;
  return Math.sqrt(
    p * (p - myObject.value1) * (p - myObject.value2) * (p - myObject.value3)
  );
};
console.log(chuVi().toFixed(1), dienTich().toFixed(3));

// Exercise 7:
const myObject = {
  chieuCao: Number(prompt("Nhập chiều cao: ")),
  canhDay: Number(prompt("Nhập cạnh đáy: ")),
};
const dienTich = function () {
  return 0.5 * myObject.chieuCao * myObject.canhDay;
};
console.log(dienTich().toFixed(2));

// Exercise 8:
const myObject = {
  canh1: Number(prompt("Nhập vào cạnh thứ 1: ")),
  canh2: Number(prompt("Nhập vào cạnh thứ 2: ")),
  canh3: Number(prompt("Nhập vào cạnh thứ 3: ")),
};
const c1 = myObject.canh1;
const c2 = myObject.canh2;
const c3 = myObject.canh3;
const dienTich = function () {
  const c1 = myObject.canh1;
  const c2 = myObject.canh2;
  const c3 = myObject.canh3;
  if (c1 + c2 > c3 || c1 + c3 > c2 || c3 + c2 > c1) {
    const p = (c1 + c2 + c3) / 2;
    return Math.sqrt(p * (p - c1) * (p - c2) * (p - c3));
  } else {
    return 0;
  }
};
const banKinh = function () {
  return (c1 * c2 * c3) / (4 * dienTich());
};
console.log(banKinh().toFixed(3));

// Exercise 9:
const myObject = {
  toan: Number(prompt() * 2),
  van: Number(prompt() * 2),
  anh: Number(prompt()),
};
const tbc = function () {
  return (myObject.toan + myObject.van + myObject.anh) / 5;
};
console.log(tbc().toFixed(1));

Exercise 10:
const myObject = {
  soTao: Number(prompt()),
  soHocSinh: Number(prompt()),
};
const soTaoMoiHS = function () {
  return Math.floor(myObject.soTao / myObject.soHocSinh);
};
const soTaoDu = function () {
  return myObject.soTao % myObject.soHocSinh;
};
console.log(soTaoMoiHS(), soTaoDu());

// Exercise 11:
const myObject = {
  secondsInput: Number(prompt()),
};
const hours = function () {
  return Math.floor(myObject.secondsInput / 3600);
};
const minutes = function () {
  return Math.floor((myObject.secondsInput - hours() * 3600) / 60);
};
const seconds = function () {
  return myObject.secondsInput - hours() * 3600 - minutes() * 60;
};
console.log(`${hours()}:${minutes()}:${seconds()}`);

// Exercise 12:
const myObject = {
  value: prompt(),
};
console.log(myObject.value.slice(0, 2), myObject.value.slice(1, 3));

// Exercise 13:
const c = [];
for (let i = 1; i <= 3; i++) {
  c.push(Number(prompt()));
}
let max = [0];
for (let i = 0; i < c.length; i++) {
  if (max < c[i]) {
    max = c[i];
  }
}
console.log(max);
