// Write your code here

import './index.css'

const ListItem = props => {
  const {destination} = props
  const {name, imgUrl} = destination
  return (
    <li className="li">
      <div className="container">
        <img src={imgUrl} alt={name} />
        <p>{name}</p>
      </div>
    </li>
  )
}

export default ListItem
