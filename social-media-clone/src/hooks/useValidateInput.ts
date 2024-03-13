const useValidateInput = () => {

    const validateEmail = (email: string) => email.includes('@');


    const validatePassword = (password: string) => password.length > 6;

    return {
        validateEmail,
        validatePassword
    }
}

export default useValidateInput;