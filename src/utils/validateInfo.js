export const validateAdmin = (values) => {
    let errors = {};

    if (!values.username) {
        errors.username = "Username is Required"
    }
    
    if (!values.password) {
        errors.password = "Password is Required"
    }
    return errors;
}

export const validateLogin = (values) => {
    let errors = {};

    if (!values.email) {
        errors.email = "Email is Required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email is invalid"
    }
    
    if (!values.password) {
        errors.password = "Password is Required"
    }
    return errors;
}
