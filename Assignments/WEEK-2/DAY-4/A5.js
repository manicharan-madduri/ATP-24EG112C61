
const user = {
   id: 101,
    name: "Ravi",
     preferences: {
    theme: "dark",
     language: "en"
   }
 };
 let copyuser={...user}
 copyuser.name="Mani"
 copyuser.preferences.theme="light"
 console.log("original :",user)
 console.log("copied one :",copyuser)