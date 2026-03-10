const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

let a=students.filter((el)=>el.marks>=40)
console.log(a)

let grade = students.map(st => {
  let grade;
  if (st.marks >= 90) {
    grade = "A";
  } else if (st.marks >= 75) {
    grade = "B";
  } else if (st.marks >= 60) {
    grade = "C";
  } else {
    grade = "D";
  }

  return { ...st, grade };
});
console.log(grade);

let r=students.reduce((acc,el)=>el.marks+acc,0)
b=r/students.length;
console.log(b)

let c=students.find((el)=>el.marks=92)
console.log(c)

let d=students.findIndex((el)=>el.name=="Kiran")
console.log(d)