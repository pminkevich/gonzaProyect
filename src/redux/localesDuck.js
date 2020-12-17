import { db, auth } from './../firebase'

//CONSTANTES
const initialState = { list: [], loading: false }

const GET_LOCAL_LIST = "GET_LOCAL_LIST"
const GET_LOCAL_LIST_SUCCESS = " GET_LOCAL_LIST_SUCCESS"
const GET_LOCAL_LIST_ERROR = " GET_LOCAL_LIST_ERROR"


//REDUCER
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_LOCAL_LIST:
      return { ...state, loading: true }
    case GET_LOCAL_LIST_SUCCESS:
      return { ...state, list: action.payload, loading: false }
    case GET_LOCAL_LIST_ERROR:
      return { ...state, loading: false }

    default:
      return state;


  }
}


//ACTIONS
export const getLocales = (tipo) => (dispatch, getState) => {
  dispatch({
    type: GET_LOCAL_LIST

  })
  const query = db.collection('locales').where('tipo', '==', tipo);

  query.get().then(res => {
    let locales = res.docs.map(doc => doc.data());

    dispatch({
      type: GET_LOCAL_LIST_SUCCESS,
      payload: locales
    })


  })
    .catch(e => {
      dispatch({
        type: GET_LOCAL_LIST_ERROR,
        payload: e.message
      })
    })
}