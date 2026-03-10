
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

let a=employees.filter((e)=>e.department=="IT")
console.log(a)

let b=employees.map((el)=>{
    let netSalary;
    netSalary=el.salary+(el.salary*0.1)
    return {...el,netSalary}
})
console.log(b)

let c=employees.reduce((acc,el)=>el.salary+acc,0)
console.log(c)

let d=employees.find((e)=>e.salary=30000)
console.log(d)

let e=employees.findIndex((e)=>e.name=="Neha")
console.log(e)