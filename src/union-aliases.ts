type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  //   if(resultConversion === 'as-number') {
  //     return +result;
  //   } else {
  //     return result.toSring();
  //   }
}

// function combine(
//     input1: number | string,
//     input2: number | string,
//     resultConversion: 'as-number' | 'as-text'
//   ) {
//     let result;
//     if (
//       (typeof input1 === "number" && typeof input2 === "number") ||
//       resultConversion === "as-number"
//     ) {
//       result = +input1 + +input2;
//     } else {
//       result = input1.toString() + input2.toString();
//     }
//     return result;
//     //   if(resultConversion === 'as-number') {
//     //     return +result;
//     //   } else {
//     //     return result.toSring();
//     //   }
//   }

const combineAges = combine(30, 26, "as-number");
console.log(combineAges);

const combineStringAges = combine("30", "26", "as-number");
console.log(combineStringAges);

const combineNames = combine("Alex", "Olha", "as-text");
console.log(combineNames);

// type User = {name: string; age: number};
// const u1: User = ['Max', 29]; //Type '(string | number)[]' is missing the following properties from type 'User': name, age

// type Product = {title: string; price: number;};
// const p1: Product = { title: 'A Book', price: 12.99, isListed: true } //is not assignable to type 'Product'

// type User = { name: string } | string;
// let u1: User = {name: 'Max'};
// u1 = 'Michael';