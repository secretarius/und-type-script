function add(n1: number, n2: number):number {
      return n1 + n2;
}  

function printResult(num: number): void {
    console.log('Result" ', num);
}

function addAndHandle(n1: number, n2: number, cd: (num: number) => void ) {
    const result = n1 + n2;
    cd(result);
}

printResult(add(5, 12));

let combineValues: (a:number, b: number) => number;
combineValues = add;
//combineValues = printResult; //Type '(num: number) => void' is not assignable to type '(a: number, b: number) => number'

console.log(combineValues(8,8));

addAndHandle(10, 20, (result) => {
    console.log(result);
    
});
