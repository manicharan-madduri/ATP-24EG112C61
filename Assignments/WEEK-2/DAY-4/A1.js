
console.log();
let index=0;
class Book{
    title;
    author;
    pages;
    isAvailable;
    constructor(title,author,pages,isAvailable)
    {
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.isAvailable=isAvailable;
    }
    getInfo()
    {
        return "title: "+this.title+"  ,author: "+this.author+" ,pages: "+this.pages+" ,avialable: "+this.isAvailable;
    }
     borrow()
    {
      this.isAvailable=false;
      return " the book : "+this.title+ " ,is barrowed ,hence not avilable"; 
    }
    returnBook()
    {
      this.isAvailable=true;
      return "the book : "+this.title +" ,is returned ";
    }
}

let books=[new Book("harry potter","harry",500,true),
new Book("1984","boss",200,true),
new Book("jungle","dennie",400,true),
new Book("the hobbit","falsee",180,true),
new Book("fisherman","collecter",700,true)]


for(let i=0;i<books.length;i++)
{
    console.log(books[i].getInfo())
}
console.log();

console.log(books[1].borrow())
console.log(books[2].borrow())
console.log(books[1].returnBook())

console.log();
let count=0;
for(let i=0;i<books.length;i++)
{
    if(books[i].pages>300)
    {
        count++;
    }
}

function isLongBook()
{
    console.log(`total number of long books ( >=300 pages) are : ${count}`)
}
isLongBook();
