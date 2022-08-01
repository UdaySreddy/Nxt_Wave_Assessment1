import {Component} from 'react'
import './index.css'

class Elements extends Component {
  render() {
    const {resourseData} = this.props
    const {category, description, iconUrl, link, title} = resourseData

    return (
      <li className="cardsContainer1">
        <div className="container1">
          <div className="inner1">
            <div className="imageContainer">
              <img className="image1" src={iconUrl} alt="icon" />
            </div>
            <div>
              <h1 className="Hedding1">{title}</h1>
              <p className="Para1">{category}</p>
            </div>
          </div>
          <div className="inner2">
            <p className="para2">{link}</p>
            <p className="para3">{description}</p>
          </div>
        </div>
      </li>
    )
  }
}

export default Elements
