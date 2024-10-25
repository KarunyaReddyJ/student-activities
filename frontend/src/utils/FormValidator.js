const passworsValidate=(password)=>{
    const passwordErrors={}
    if(password.length<8){
        passwordErrors.password='length must be greater than or equal to 8'
    }
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(!regex.test(password)){
        passwordErrors.password='password must contain an uppercase letter,a number and a special symbol'
    }
    return passwordErrors
}
const emailValidation=(email)=>{
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!regex.test(email)){
        return {email:'enter valid email'}
    }
    return {}
}
const validate=(email,password)=>{
    const passwordErrors=passworsValidate(password)
    const emailErrors=emailValidation(email)
    return {...passwordErrors,...emailErrors}
}

export default validate