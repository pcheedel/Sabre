import { GET_GITHUB_DATA } from "./actions"

export default function getGitHubData(userName) {
  return { type:GET_GITHUB_DATA , payload:userName }
}