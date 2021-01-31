import React from 'react'

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

function authReducer(state, action) {
  switch (action.type) {
    case 'setAuth':
      return { ...state, ...action.data }
    case 'cleanAuth':
      return {}
    default:
      return state
  }
}

function profileReducer(state, action) {
  switch (action.type) {
    case 'setProfile':
      return { ...state, ...action.data }
    case 'clearProfile':
      return {}
    default:
      return state
  }
}

function mainReducer({ auth, profile }, action) {
  return {
    auth: authReducer(auth, action),
    profile: profileReducer(profile, action)
  }
}

const initialState = {
  auth: {},
  profile: {}
}

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(mainReducer, initialState)
  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

// export default GlobalContextProvider
