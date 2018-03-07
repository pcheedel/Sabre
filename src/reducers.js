import { GET_GITHUB_DATA } from "./actions"
import axios from "axios"

const DEFAULT_STATE={
  gitHubData:null
}

const getGitHubData = (state,action) => {
const baseGitHubUrl = "https://api.github.com/search/users"
        axios.get(baseGitHubUrl, {
          params:{
            q:action.payload,
            access_token:'bcb29120e782d804bec76f35b76c1db710d55c77'
          }
        })
        .then((response) => {
          console.log(response.data.items, "data printing");
          return Object.assign({}, state, {gitHubData:response})
        })
        .catch((error) => {
          console.log(error.message);
        })
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