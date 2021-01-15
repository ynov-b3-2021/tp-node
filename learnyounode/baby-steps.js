const [node, path, ...arguments] = process.argv

let total = 0;
arguments.forEach(arg => total += Number(arg))
console.log(total)

/*
Ou encore mieux avec approche fonctionnelle:

const sum = (a, b) => a + b
const total = args.map(Number).reduce(sum, 0)

console.log(total)
 */