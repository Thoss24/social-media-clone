const useValidateInput = () => {
  const validateEmail = (email: string) => email.includes("@");

  const passwordErr = {
    err: "",
  };

  const validatePassword = (password: string) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?/]/.test(
      password
  );

    if (password.length < 6) {
      passwordErr.err = "Min length is 6 characters";
    } else if (!hasUppercase) {
      passwordErr.err = "Include uppercase character";
    } else if (!hasLowerCase) {
      passwordErr.err = "Include lowercase character";
    } else if (!hasNumber) {
      passwordErr.err = "Include a number";
    } else if (!hasSpecialChar) {
      passwordErr.err = "Include a special character";
    }

    if(hasUppercase && hasLowerCase && hasNumber && hasSpecialChar) {
        return true
    } return false
  };

  return {
    validateEmail,
    validatePassword,
    passwordErr,
  };
};

export default useValidateInput;
