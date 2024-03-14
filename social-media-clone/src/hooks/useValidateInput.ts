const useValidateInput = () => {

    const validateEmail = (email: string) => email.includes('@');


    const validatePassword = (password: string) => {
        const hasUppercase = /[A-Z]/.test(password)
        const hasLowerCase = /[a-z]/.test(password)
        const hasNumber = /[0-9]/.test(password)
        const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?/]/.test(password)

        // if (password.length > )
    };

    return {
        validateEmail,
        validatePassword
    }
}

export default useValidateInput;