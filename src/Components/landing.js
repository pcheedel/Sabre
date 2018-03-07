import React, { PureComponent } from "react"
import { connect } from "react-redux"
import getGitHubData from "../actionCreators"
import "./Landing.css"

class Landing extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      searchForName:""
    }
  }
  setInputValueAndFindNameInData(searchForName) {
    this.setState({ searchForName }, () => {
      if(this.state.searchForName.length){
       this.props.handleGitHubData(this.state.searchForName)
      }
    })
  }
  componentDidMount() {

  }
  render () {
    console.log(this.props.data);
    return (
      <div className="Wrapper">
        <div className="inputWrapper">
          <input
            value={ this.state.searchTerm }
            onChange={(e) => this.setInputValueAndFindNameInData(e.target.value)}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({data:state.data});
const mapDispatchToProps = (dispatch) => ({
  handleGitHubData(userName) {
    dispatch(getGitHubData(userName))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Landing);