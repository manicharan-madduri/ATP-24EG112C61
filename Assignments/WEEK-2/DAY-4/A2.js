console.log("Exam submitted successfully");
setTimeout(()=>{
    console.log("Evaluating answers...")
},2000)
setTimeout(()=>{
    console.log("Result : PASS")
},4000)

///////////////////////////
//task 2
console.log("OTP sent successfully")
let seconds=10;
let intervalid=setInterval(()=>{
    console.log(`OTP can resend after ${seconds} secs`)
    seconds--;
    if(seconds==0)
    {
        console.log("resend OTP")
        clearInterval(intervalid)
    }
},1000)

