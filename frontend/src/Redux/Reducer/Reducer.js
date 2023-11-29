import { REGISTER } from "../Actiontype/Actiontype"

const initialState = {
    user:{}
}

export const reducer=(state = initialState, { type, payload }) => {
  switch (type) {

  case REGISTER:
    localStorage.setItem("token",payload.token)
    return { ...state,user:payload.user }

  default:
    return state
  }
}
