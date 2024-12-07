import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {details} = this.props
    const updatedDetails = {
      umpires: details.umpires,
      result: details.result,
      manOfTheMatch: details.man_of_the_match,
      id: details.id,
      date: details.date,
      venue: details.venue,
      competingTeam: details.competing_team,
      firstInnings: details.first_innings,
      secondInnings: details.second_innings,
      matchStatus: details.match_status,
      competingTeamLogo: details.competing_team_logo,
    }

    return (
      <div className="latest-match-container">
        <div className="logo-and-details">
          <div className="details">
            <p className="competing-team">{updatedDetails.competingTeam}</p>
            <p className="date">{updatedDetails.date}</p>
            <p className="venue">{updatedDetails.venue}</p>
            <p className="venue">{updatedDetails.result}</p>
          </div>
          <img
            src={updatedDetails.competingTeamLogo}
            alt={`latest match ${updatedDetails.competingTeam}`}
            className="logo-latest-match"
          />
        </div>
        <hr />
        <div className="more-details">
          <p className="date">First Innings</p>
          <p className="venue">{updatedDetails.firstInnings}</p>
          <p className="date">Second Innings</p>
          <p className="venue">{updatedDetails.secondInnings}</p>
          <p className="date">Man Of The Match</p>
          <p className="venue">{updatedDetails.manOfTheMatch}</p>
          <p className="date">Umpires</p>
          <p className="venue">{updatedDetails.umpires}</p>
        </div>
      </div>
    )
  }
}

export default LatestMatch
