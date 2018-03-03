import React, { PureComponent } from "react"
import { connect } from "react-redux"
import getGitHubData from "../actionCreators"

class Landing extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      searchForName:""
    }
  }
  setInputValueAndFindNameInData(searchForName) {
    this.setState({ searchForName }, () => {
      // Coming up.
    })
  }
  componentDidMount() {
    this.props.handleGitHubData("https://api.github.com/search/users")
  }
  render () {
    return (
      <div>
        <input
          value={ this.state.searchTerm }
          onChange={(e) => this.setInputValueAndFindNameInData(e.target.value)}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ searchTerm:state.searchTerm });
const mapDispatchToProps = (dispatch) => ({
  handleGitHubData(url) {
    dispatch(getGitHubData(url))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Landing);