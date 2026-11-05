// 1
console.log("Задание 1. Функции");

const multiplyArrow = (a, b) => {
  return a * b;
};

console.log(multiplyArrow(5, 3));

const isEven = (number) => {
  return number % 2 === 0;
};

console.log(isEven(4));
console.log(isEven(7));

// 1.2
console.log("1.2");
// 1.2.1
function countVowels(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if ("aeiou".includes(str[i].toLowerCase())) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("hello"));
console.log(countVowels("apple"));
console.log(countVowels("javascript"));
// 1.2.2

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));
console.log(reverseString("apple"));
// 1.2.3

function factorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result = result * i;
  }

  return result;
}

console.log(factorial(5));
console.log(factorial(4));
// 1.2.4

function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}

console.log(sumTo(5));
console.log(sumTo(10));
// 1.2.5

function createProduct(name, price) {
  return {
    name: name,
    price: price,
    currency: "сом",
  };
}

console.log(createProduct("Телефон", 25000));
console.log(createProduct("Яблоко", 45));

// 2
console.log("Задание 2. Методы перебора массивов");
// 2.1

const products = [
  { name: "Ноутбук", price: 45000, inStock: true },
  { name: "Мышь", price: 800, inStock: false },
  { name: "Клавиатура", price: 2500, inStock: true },
  { name: "Монитор", price: 15000, inStock: true },
  { name: "Наушники", price: 3200, inStock: false },
];

const names = products.map((p) => p.name);
console.log(names);

const inStockProducts = products.filter((p) => p.inStock);
console.log(inStockProducts);

const expensive = products.find((p) => p.price > 10000);
console.log(expensive);

const total = products.reduce((sum, p) => sum + p.price, 0);
console.log(total);

const hasCheap = products.some((p) => p.price < 1000);
console.log(hasCheap);

const withoutStock = products.map((p) => ({ name: p.name, price: p.price }));
console.log(withoutStock);

const allMoreThan500 = products.every((p) => p.price > 500);
console.log(allMoreThan500);

const monitorIndex = products.findIndex((p) => p.name === "Монитор");
console.log(monitorIndex);

const sorted = [...products].sort((a, b) => a.price - b.price);
console.log(sorted);

const inStockCount = products.filter((p) => p.inStock).length;
console.log(inStockCount);

const strings = products.map((p) => p.name + " — " + p.price + " сом");
console.log(strings);

const mostExpensive = products.reduce((max, p) =>
  p.price > max.price ? p : max,
);
console.log(mostExpensive);

const inStockTotal = products
  .filter((p) => p.inStock)
  .reduce((sum, p) => sum + p.price, 0);
console.log(inStockTotal);

const discounted = products.map((p) => ({ ...p, price: p.price * 0.9 }));
console.log(discounted);

const hasKeyboard = products.some((p) => p.name === "Клавиатура");
console.log(hasKeyboard);
// 2.2

const students = [
  { name: "Айгуль", grade: 85, active: true },
  { name: "Бек", grade: 42, active: false },
  { name: "Дана", grade: 91, active: true },
  { name: "Эрлан", grade: 67, active: true },
  { name: "Мария", grade: 38, active: false },
];

let names1 = students.map((student) => student.name);
console.log(names1);

let goodGrades = students.filter((student) => student.grade > 60);
console.log(goodGrades);

let lowGrade = students.find((student) => student.grade < 50);
console.log(lowGrade);

let sum = students.reduce((total, student) => total + student.grade, 0);
let averageGrade = sum / students.length;
console.log(averageGrade);

let inactive = students.some((student) => student.active === false);
console.log(inactive);

let allPassed = students.every((student) => student.grade > 30);
console.log(allPassed);

let studentInfo = students.map(
  (student) => student.name + ": " + student.grade + " баллов",
);
console.log(studentInfo);

let activeCount = students.filter((student) => student.active === true).length;
console.log(activeCount);

let bestStudent = students.reduce((best, student) => {
  if (student.grade > best.grade) {
    return student;
  }
  return best;
});
console.log(bestStudent);

let activeNames = students
  .filter((student) => student.active === true)
  .map((student) => student.name);

console.log(activeNames);

// 3
console.log("Задание 3. Деструктуризация, spread, rest ");

// 3.1

const user = {
  id: 1,
  username: "coder_01",
  address: {
    city: "Бишкек",
    street: "Чуй 120",
  },
};

const {
  username,
  address: { city },
  country = "Кыргызстан",
} = user;

console.log(username,);
console.log(city);
console.log(country);
// 3.2

function average(...numbers) {
  let sum = numbers.reduce((a, b) => a + b, 0);
  return sum / numbers.length;
}

console.log(average(10, 20, 30, 40));

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr3 = [...arr1, ...arr2];
console.log(arr3);

const user1 = {
  id: 1,
  username: "coder_01",
  address: {
    city: "Бишкек",
    street: "Чуй 120",
  },
};

const newUser = {
  ...user1,
  username: "coder_02",
};

console.log("Оригинал:", user1);
console.log("Копия:", newUser);

// 4
console.log("Задание 4. JSON, LocalStorage, SessionStorage");

// 4.1

const settings = { 
    theme: "dark", 
    fontSize: 16, 
    notifications: true };

const settingsJson = JSON.stringify(settings);
console.log(settingsJson);

const newSettings = JSON.parse(settingsJson);
console.log(newSettings.theme);
// 4.2

localStorage.setItem("settings", JSON.stringify(settings));

let savedSettings = localStorage.getItem("settings");

let restoredSettings = JSON.parse(savedSettings);

console.log(restoredSettings.fontSize);