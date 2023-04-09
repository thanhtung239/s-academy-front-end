export const BASE_URL = 'http://127.0.0.1:8000'

export const GET_CURRENT_USER = 'api/users/'
export const LOGIN = 'api/token/'
export const GET_COURSES_LIST = 'api/courses/'
export const GET_LESSONS_LIST = 'api/lessons/'
export const GET_DETAIL_COURSE = 'api/courses/detail/'
export const COURSE_USER = 'api/courses/uses/'

export const makeURL = (URL) => {
    return BASE_URL + '/' + URL
}
