  const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];
let a=movies.filter((el)=>el.genre=="Sci-Fi")
console.log(a)

let b=movies.filter(el=>el.title==="Inception").map(el=>el.title+"("+el.rating+")")
console.log(b)

let total=movies.reduce((acc,el)=>acc+el.rating,0)
let c=total/movies.length;
console.log(c)

let d=movies.find((el)=>el.title=="Joker")
console.log(d)

let e=movies.findIndex((el)=>el.title=="Avengers")
console.log(e)