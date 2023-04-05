export const BASE_URL = 'http://127.0.0.1:8000';

export const GET_CURRENT_USER = 'api/users/';
export const LOGIN = 'api/token/';
export const GET_LIST_COURSES = 'api/courses/'

export const makeURL = (URL) => {
    return BASE_URL + '/' + URL
}
