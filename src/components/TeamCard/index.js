import {Component} from 'react'
import './index.css'
import {Link} from 'react-router-dom'

class TeamCard extends Component {
  render() {
    const {details} = this.props
    const {teamImageUrl, name, id} = details
    return (
      <Link className="link" to={`/team-matches/${id}`}>
        <li className="teamcard-list">
          <img className="team-logo" src={teamImageUrl} alt={name} />
          <p className="team-name">{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
