import { GET_GITHUB_DATA } from "./actions"

const DEFAULT_STATE={
  gitHubData:null
}

const getGitHubData = (state,action) => {
  return Object.assign({}, state, {searchTerm:action.payload})
}

const rootReducer = (state=DEFAULT_STATE, action) => {
  switch(action.type) {
    case GET_GITHUB_DATA:
      return getGitHubData(state,action)
    default:
      return state
  }
}

export default rootReducer;