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

// Exercise 14:
const myObject = {
  age: Number(prompt()),
};
if (myObject.age > 0 && myObject.age < 11) {
  console.log("Thieu nhi");
} else if (myObject.age > 11 && myObject.age <= 25) {
  console.log("Thieu nien");
} else if (myObject.age > 25 && myObject.age <= 50) {
  console.log("Trung nien");
} else {
  console.log("Lao nien");
}

// Exercise 15:
const myObject = {
  a: Number(prompt()),
  b: Number(prompt()),
  c: Number(prompt()),
};
const a = myObject.a;
const b = myObject.b;
const c = myObject.c;
let chuVi;
let dienTich;
if (a + b > c && a + c > b && b + c > a) {
  console.log("Day la 3 canh cua mot tam giac");
  chuVi = a + b + c;
  p = chuVi / 2;
  dienTich = Math.sqrt(p * (p - a) * (p - b) * (p - c));
  console.log(chuVi.toFixed(2), dienTich.toFixed(1));
} else {
  console.log("Day khong phai la 3 canh cua mot tam giac");
}

// Exercise 16:
const myObject = {
  tbhk1: Number(prompt()),
  tbhk2: Number(prompt()),
};
const tbcn = (myObject.tbhk1 + myObject.tbhk2 * 2) / 3;
console.log(tbcn.toFixed(1));
if (tbcn >= 8) console.log("Gioi");
else if (tbcn < 8 && tbcn >= 6.5) console.log("Kha");
else if (tbcn < 6.5 && tbcn >= 5) console.log("Kha");
else if (tbcn < 5 && tbcn >= 3.5) console.log("Kha");
else console.log("Yeu");

// Exercise 17:
const month = Number(prompt());
switch (month) {
  case 2:
  case 3:
  case 4:
    console.log("Mua Xuan");
    break;
  case 5:
  case 6:
  case 7:
    console.log("Mua Ha");
    break;
  case 8:
  case 9:
  case 10:
    console.log("Mua Thu");
    break;
  case 11:
  case 12:
  case 1:
    console.log("Mua Dong");
    break;
  default:
    console.log("Khong hop le");
}

// Exercise 18:
const month = Number(prompt());
const year = Number(prompt());
if (
  month === 1 ||
  month === 3 ||
  month === 5 ||
  month === 7 ||
  month === 8 ||
  month === 10 ||
  month === 12
) {
  console.log(31);
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
  console.log(30);
} else if (month === 2) {
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log(29);
  } else {
    console.log(28);
  }
} else {
  console.log("Khong hop le");
}

// Exercise 19:
const number = prompt();
if (number.length === 5) {
  const digit1 = parseInt(number.charAt(0));
  const digit2 = parseInt(number.charAt(1));
  const digit3 = parseInt(number.charAt(2));
  const digit4 = parseInt(number.charAt(3));
  const digit5 = parseInt(number.charAt(4));

  const sum = digit1 + digit2 + digit3 + digit4 + digit5;
  if (sum < 10 && sum > 0) {
    if (sum === 9) {
      console.log(sum);
      console.log("may man");
    } else {
      console.log(sum);
      console.log("chua may man");
    }
  } else {
    const soNut = sum % 10;
    if (soNut === 9) {
      console.log(soNut);
      console.log("may man");
    } else {
      console.log(soNut);
      console.log("chua may man");
    }
  }
} else {
  console.log("Khong hop le");
}

// Exercise 20:
const money = Number(prompt());
const money_5000 = function () {
  return Math.floor(money / 5000);
};
const money_2000 = function () {
  return Math.floor((money - money_5000() * 5000) / 2000);
};
const money_1000 = function () {
  return (money - money_5000() * 5000 - money_2000() * 2000) / 1000;
};
console.log(money_5000(), money_2000(), money_1000());