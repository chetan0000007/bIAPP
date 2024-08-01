export const validateEmail = email => {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(email);
  };
  
  export const validatePassword = password => {
    return password.length >= 6;
  };
  