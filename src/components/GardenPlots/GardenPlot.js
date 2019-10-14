import React, { useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Button from 'react-bootstrap/Button'

// const GardenPlot = ({ user, alerts }) => {
const GardenPlot = ({ user, alerts, match }) => {
  const [gardenPlot, setGardenPlot] = useState(null)

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiUrl}/gardenPlots/${match.params.id}`,
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      // .then(console.log)
      .then(res => setGardenPlot(res.data.gardenPlot))
      .catch(console.error)
  }, [])

  if (!gardenPlot) {
    return (
      <p>hello</p>
    )
  } else {
    return (
      <div>
        {console.log('hi')}
        <h2>{gardenPlot.name}</h2>
        <Link to={`/gardenPlots/${match.params.id}/update`}>
          <Button variant="warning">Edit</Button>
        </Link>
        <Link to={`/gardenPlots/${match.params.id}/delete`}>
          <Button className="ml-2" variant="warning">Delete</Button>
        </Link>
        <br />
        <Link to={'/'}>back</Link>
      </div>

    )
  }
}

export default withRouter(GardenPlot)
