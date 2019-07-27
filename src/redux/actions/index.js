export const REQUEST = 'REQUEST';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';

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

