import { REQUEST, REQUEST_SUCCESS } from '../contants/index';
export const requestAction = (params) => {
  console.log(params);
  return {
    type: REQUEST,
    params
  }
}
export const requestSuccAction = (params) => {
  console.log(params);
  return {
    type: REQUEST_SUCCESS,
    params
  }
}

