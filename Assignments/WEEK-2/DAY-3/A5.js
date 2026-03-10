
   const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];
let a=transactions.filter((el)=>el.type=="credit");
console.log("all transactions :",a);

let b=transactions.map((el)=>{
    return [el.amount]
})
console.log("transaction amounts :",b);

let bal=0;
let c=transactions.reduce((acc,el)=>{

    if(el.type=="credit")
    {
        bal=bal+el.amount;
    }
    else{
        bal=bal-el.amount;
    }
    return bal;
},0)

console.log("Final balance :",c);

let d=transactions.find((el)=>el.type=="debit")
console.log("First debit row :",d)

let e=transactions.findIndex((el)=>el.amount==10000)
console.log("Index of amount 10,000 :",e)