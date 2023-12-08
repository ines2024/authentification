import { GETCURRENT, LOGIN, LOGOUT, REGISTER } from "../Actiontype/Actiontype"

const initialState = {
    user:{}
}

export const reducer=(state = initialState, { type, payload }) => {
  switch (type) {

  case REGISTER:
  case LOGIN:
  

    localStorage.setItem("token",payload.token)
    return { ...state,user:payload.user }
  case GETCURRENT:
    return{...state,user:payload}
  case LOGOUT:
    return state.user={}
  default:
    return state
  }
}
