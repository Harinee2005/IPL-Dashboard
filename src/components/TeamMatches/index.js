import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    latestMatchDetails: {},
    recentMatches: [],
    teamBannerUrl: '',
    isLoading: true,
  }

  componentDidMount = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const {
      latest_match_details: latestMatch,
      recent_matches: recentMatch,
      team_banner_url: teamUrl,
    } = data
    this.setState({
      latestMatchDetails: latestMatch,
      recentMatches: recentMatch,
      teamBannerUrl: teamUrl,
      isLoading: false,
    })
  }

  render() {
    const {latestMatchDetails, recentMatches, teamBannerUrl} = this.state
    const {isLoading} = this.state
    return (
      <div className="team-matches-container">
        {isLoading ? (
          <div className="loader-container">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <img className="banner-img" src={teamBannerUrl} alt="team banner" />
            <p className="team-matches-title">Latest Matches</p>
            <LatestMatch details={latestMatchDetails} />
            <ul className="latestMatchUl">
              {recentMatches.map(eachData => (
                <MatchCard details={eachData} key={eachData.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
