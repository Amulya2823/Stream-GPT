export const Validate = (email,password,FirstName ,LastName ) => {

    const isEmailValid = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/.test(email)
    const isPassValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    const isfirstValid = /^[a-zA-Z\s'-]{1,50}$/.test(FirstName)
    const isLastValid =  /^[a-zA-Z\s'-]{1,50}$/.test(LastName)

    if(!isEmailValid) return "Email is not Valid"
    if(!isPassValid) return "Password should be atleast 8 digits,capital,small&number and not have special charecters"
    if(!isfirstValid) return "First Name is not Valid"
    if(!isLastValid) return "Second Name is not Valid"


    return null;

}

