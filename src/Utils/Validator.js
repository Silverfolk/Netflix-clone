export const ValidatorSignup = (name, email, password, contactnumber) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;

  if (!name || !email || !password || !contactnumber) {
    return "All fields are required";
  }

  if (!emailPattern.test(email)) {
    return "Invalid Email Address";
  }

  if (!passwordPattern.test(password)) {
    return "Invalid Password";
  }

  if (!/^\d{10}$/.test(contactnumber)) {
    return "Invalid Contact Number (should be 10 digits)";
  }

  // Additional checks for name (optional)
  const namePattern = /^[a-zA-Z]+$/;
  if (!namePattern.test(name)) {
    return "Invalid Name";
  }

  // If all validations pass, return null (indicating no errors)
  return null;
};


  export const ValidatorLogin = (email, password) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/;
  
    if ( !email || !password) {
      return "All fields are required";
    }
  
    if (!emailPattern.test(email)) {
      return "Invalid Email Address";
    }
  
    if (!passwordPattern.test(password)) {
      return "Invalid Password";
    }
  
   
  
    // If all validations pass, return null (indicating no errors)
    return null;
  };
  