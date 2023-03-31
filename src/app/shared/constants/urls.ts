const BASE_URL = 'http://localhost:5000'



const AUTH_USER_MENTOR='/user/auth'
export const USER_LOGIN_URL= BASE_URL+AUTH_USER_MENTOR+'/login';
export const USER_REGISTER_URL=BASE_URL+AUTH_USER_MENTOR+'/register'
export const OTP_VERIFY_URL=BASE_URL+AUTH_USER_MENTOR+'/email-verify'
export const OTP_EXPIRES_URL=BASE_URL+AUTH_USER_MENTOR+'/otp-expires'
export const OTP_RESEND_URL=BASE_URL+AUTH_USER_MENTOR+'/email-resend'
