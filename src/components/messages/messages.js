import { message } from "antd";
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../../constants/messages";

export const loginSuccessMessage = () => {
    message.success(LOGIN_SUCCESS);
}

export const logoutSuccessMessage = () => {
    message.success(LOGOUT_SUCCESS);
}
