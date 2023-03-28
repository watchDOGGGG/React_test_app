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


export const validateSignUp = (values) => {
    let errors = {};

    if (!values.filename) {
        errors.filename = "File Name Required"
    }

    if (!values.firstname.trim()) {
        errors.firstname = "First Name Required"
    }

    if (!values.lastname.trim()) {
        errors.lastname = "Last Name Required"
    }

    if (!values.email) {
        errors.email = "Email Required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email is invalid"
    }

    if (!values.phone) {
        errors.phone = "Phone Number is Required"
    } else if (values.phone.length < 11) {
        errors.phone = "Phone Number need to be 8 characters and above"
    }

    if(!values.username){
        errors.username = "User Name is Required"
    }

    if (!values.role) {
        errors.role = "Role is Required"
    }

    if (!values.password) {
        errors.password = "Password is Required"
    } else if (values.password.length < 8) {
        errors.password = "Password need to be 8 characters and above"
    }
    return errors;
}