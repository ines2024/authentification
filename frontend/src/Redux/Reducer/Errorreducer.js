import { ALERTERROR, CLEARERROR } from "../Actiontype/Erroactiontype"

const initialState = []

export const errorreducer= (state = initialState, { type, payload }) => {
  switch (type) {

  case ALERTERROR:
    return [...state,payload]
  case CLEARERROR:
        return state.filter(e=>e.id!==payload)

  default:
    return state
  }
}
