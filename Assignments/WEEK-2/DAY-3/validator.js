function validateTitle(title){
    if(!title){
        return "Title required"
    }
    if(title.length<=3){
        return 'Min 3 character required'
    }
    return true
}

function validatePriority(priority){
    const priorities=["low","medium","high"]
    let is=priorities.includes(priority)
    if(!is)
    {
        return "invalid priority"
    }
    return true;
}


function validateDueDate(date){
    let dueDate=new Date(2026-10-23)
    let today=new Date()
    if(!(dueDate>today))
    {
        return "Date completed"
    }
    return true;
}


export{validateTitle,validatePriority,validateDueDate}