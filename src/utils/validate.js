export const checkValidData = (isSignInForm=false, name, email, password) => {
   
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if (!isSignInForm && name!=="invalid"){
        if(name.toString().trim() === ""){
            return "Name is not valid";
        }
        const isNameValid = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(name);
        if(!isNameValid) return "Name is not valid";
    }
    else if (!isSignInForm && name==="invalid"){
        return "Name is not valid";
    }
    if (isSignInForm){

        if(name==="invalid"){
        }
    } 
    if(!isEmailValid) return "Email ID is not valid";
    if(!isPasswordValid) return "Password is not valid";
    return null;

}