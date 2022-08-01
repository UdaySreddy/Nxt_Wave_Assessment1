import {Component} from 'react'
import {Link} from 'react-router-dom'

import Resources from '../Resources'

import './index.css'

class Home extends Component {
  render() {
    return (
      <Link to="/home">
        <Resources />
      </Link>
    )
  }
}

export default Home
