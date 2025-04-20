export const validateOTP = (otp) => {
    if(otp === "123456" || otp === "000000"){
        return true;
    }else{
        return false;
    }
}