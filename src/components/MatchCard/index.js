import {Component} from 'react'
import './index.css'

class MatchCard extends Component {
  render() {
    const {details} = this.props
    const {
      result,
      competing_team: competingTeam,
      competing_team_logo: competingTeamLogo,
      match_status: matchStatus,
    } = details

    const color = matchStatus === 'Won' ? 'green' : 'red'

    return (
      <li className="matchCardContainer">
        <img
          className="matchCardLogo"
          alt={`competing team ${competingTeam}`}
          src={competingTeamLogo}
        />
        <p className="date des">{competingTeam}</p>
        <p className="venue des">{result}</p>
        <p className={`venue des ${color}`}>{matchStatus}</p>
      </li>
    )
  }
}

export default MatchCard
