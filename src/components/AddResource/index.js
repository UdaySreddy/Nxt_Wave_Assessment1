import {Component} from 'react'
import {Link} from 'react-router-dom'

import Resources2 from '../Resources2'

import './index.css'

class AddResource extends Component {
  render() {
    return (
      <Link to="/addresources">
        <Resources2 />
      </Link>
    )
  }
}

export default AddResource
