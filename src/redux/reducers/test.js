import { REQUEST_SUCCESS, REQUEST } from '../actions/index';
const initialState = {
  isRequest: {},
  requestData: []
}
const testInfo = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        isRequest: true
      }
    case REQUEST_SUCCESS:
      return {
        ...state,
        requestData: action.params
      }
    default:
      return state
  }
}
export default testInfo
