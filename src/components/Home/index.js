import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {iplTeams: [], isLoading: true}

  componentDidMount = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(eachData => ({
      id: eachData.id,
      name: eachData.name,
      teamImageUrl: eachData.team_image_url,
    }))
    this.setState({iplTeams: updatedData, isLoading: false})
  }

  render() {
    const {iplTeams, isLoading} = this.state
    return (
      <div className="container">
        {isLoading ? (
          <div className="loader-container">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <div className="logo-name">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
                alt="ipl logo"
                className="logo"
              />
              <h1 className="title">IPL Dashboard</h1>
            </div>
            <ul className="team-items-container">
              {iplTeams.map(eachData => (
                <TeamCard details={eachData} key={eachData.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default Home
