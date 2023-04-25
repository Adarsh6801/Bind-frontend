const BASE_URL = 'http://localhost:5000';

const AUTH_USER_MENTOR = '/user/auth';
export const USER_LOGIN_URL = BASE_URL + AUTH_USER_MENTOR + '/login';
export const USER_REGISTER_URL = BASE_URL + AUTH_USER_MENTOR + '/register';
export const OTP_VERIFY_URL = BASE_URL + AUTH_USER_MENTOR + '/email-verify';
export const OTP_EXPIRES_URL = BASE_URL + AUTH_USER_MENTOR + '/otp-expires';
export const OTP_RESEND_URL = BASE_URL + AUTH_USER_MENTOR + '/email-resend';
export const SOCIAL_LOGIN_URL = BASE_URL + AUTH_USER_MENTOR + '/social-login';

const ADMIN_MANAGEMENT = '/admin';


const ADMIN_USER = ADMIN_MANAGEMENT + '/user';
export const GET_ALL_USERS = BASE_URL + ADMIN_USER + '/get-all-users';
export const BLOCK_USER = BASE_URL + ADMIN_USER + '/block';
export const UNBLOCK_USER = BASE_URL + ADMIN_USER + '/unblock';
export const SINGLE_USER = BASE_URL + ADMIN_USER + '/single-user';


const ADMIN_MENTOR = ADMIN_MANAGEMENT + '/mentor';
export const GET_ALL_MENTORS = BASE_URL + ADMIN_MENTOR + '/get-all-mentors';
export const BLOCK_MENTOR = BASE_URL + ADMIN_MENTOR + '/block';
export const UNBLOCK_MENTOR = BASE_URL + ADMIN_MENTOR + '/unblock';
export const REMOVE_MENTOR = BASE_URL + ADMIN_MENTOR + '/remove-mentor';
export const GET_ALL_MENTOR_REQUESTS =
  BASE_URL + ADMIN_MENTOR + '/mentor-requests';
export const ACCEPT_MENTOR = BASE_URL + ADMIN_MENTOR + '/mentor-request-accept';
export const DECLINE_MENTOR =
  BASE_URL + ADMIN_MENTOR + '/mentor-request-decline';

export const ALL_LANGUAGE = BASE_URL + ADMIN_MANAGEMENT + '/get-all-language';
export const ADD_LANGUAGE = BASE_URL + ADMIN_MANAGEMENT + '/add-language';
export const REMOVE_LANGUAGE = BASE_URL + ADMIN_MANAGEMENT + '/remove-language';

export const ALL_PROGRAM = BASE_URL + ADMIN_MANAGEMENT + '/get-all-program';
export const ADD_PROGRAM = BASE_URL + ADMIN_MANAGEMENT + '/add-program';
export const REMOVE_PROGRAM = BASE_URL + ADMIN_MANAGEMENT + '/remove-program';

export const ADD_COURSE = BASE_URL + ADMIN_MANAGEMENT + '/add-course';
export const ALL_COURSE = BASE_URL + ADMIN_MANAGEMENT + '/get-all-course';
export const DELETE_COURSE = BASE_URL + ADMIN_MANAGEMENT + '/delete-course';
export const ADD_TOPICS = BASE_URL + ADMIN_MANAGEMENT + '/add-topic';
export const GET_COURSE_BY_ID = BASE_URL + ADMIN_MANAGEMENT + '/edit-course';
export const EDIT_COURSE=BASE_URL+ADMIN_MANAGEMENT+'/edit-course';

const USER_MANAGEMENT='/user'
export const GET_PROGRAMS_BY_ID=BASE_URL+USER_MANAGEMENT+'/program'
export const COURSE_VIEW_BY_ID=BASE_URL+USER_MANAGEMENT+'/course-view'

export const GET_COURSE_WITHOUT_MENTOR=BASE_URL+USER_MANAGEMENT+'/get-course-without-mentor'
export const GET_COURSE_WITH_MENTOR=BASE_URL+USER_MANAGEMENT+'/get-course-with-mentor'
export const USER_HAS_CURRENT_COURSE =BASE_URL+USER_MANAGEMENT+'/checking-user-current-course'
export const GET_USER =BASE_URL+USER_MANAGEMENT+'/get-user'

export const GET_CURRENT_COURSE=BASE_URL+USER_MANAGEMENT+'/get-current-course'
export const EXIT_FROM_COURSE=BASE_URL+USER_MANAGEMENT+'/exit-course'

export const ORDER =BASE_URL+USER_MANAGEMENT+'/mentor-subscription'