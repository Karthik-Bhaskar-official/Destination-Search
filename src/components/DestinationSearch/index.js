// Write your code here
import {Component} from 'react'

import ListItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  change = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props

    const {searchInput} = this.state

    const filterSearchResult = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="containers">
          <h1 className="heading">Destination Search</h1>
          <div className="input-container">
            <input type="search" placeholder="Search" onChange={this.change} />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              className="img"
              alt="search icon"
              value={searchInput}
            />
          </div>
        </div>
        <ul className="ul">
          {filterSearchResult.map(each => (
            <ListItem destination={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
