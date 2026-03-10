 const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//filter
let a=cart.filter((e)=>e.inStock)
console.log(a)

//map
let b=cart.map((e)=>[e.name,e.price*e.quantity])
console.log(b)

//reduce
let c=cart.reduce((acc,el)=>(el.price*el.quantity)+acc,0)
console.log(`total cart value:${c}`)

//find
let d=cart.find((el)=>el.name=="Mouse")
console.log(d)

//find index
let e=cart.findIndex((el)=>el.name=="Keyboard")
console.log(e)