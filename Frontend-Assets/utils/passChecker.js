function validatePassword(password) {
    // Minimum length check
    if (password.length < 6) {
      return false;
    }
  
    // Special character check
    const specialCharacterRegex = /[!@#$%^&*()_+{}[\]:;<>,.?~\\/]/;
    if (!specialCharacterRegex.test(password)) {
      return false;
    }
  
    // Uppercase letter check
    const uppercaseLetterRegex = /[A-Z]/;
    if (!uppercaseLetterRegex.test(password)) {
      return false;
    }
  
    // If all checks pass, the password is valid
    return true;
  }
  
export default validatePassword;
