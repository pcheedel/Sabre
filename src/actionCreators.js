import { GET_GITHUB_DATA } from "./actions"

export default function getGitHubData(url) {
  return { type:GET_GITHUB_DATA , payload:url }
}