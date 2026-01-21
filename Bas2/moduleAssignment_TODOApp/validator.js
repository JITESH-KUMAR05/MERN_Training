function validateTitle(title){
    if(title === undefined) return false;
    if(title.length < 3) return false;
    return true;
}

function validatePriority(priority){
    if(priority === 'low' || priority === 'medium' || priority === 'high'){
        return true;
    }
    return false;
}

function validateDueDate(date){
    let today = new Date().getDate();
    if(date > today){
        return true;
    }
    return false;
}

export {validateTitle,validatePriority,validateDueDate}