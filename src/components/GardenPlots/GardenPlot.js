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
      .then(res => setGardenPlot(res.data.gardenPlot))
      .catch(() => alert({ heading: 'oh no', message: 'something went wrong', variant: 'danger' }))
  }, [])

  if (!gardenPlot) {
    return (
      <p>hello</p>
    )
  } else {
    return (
      <div>
        <h2>{gardenPlot.name}</h2>
        {gardenPlot.plant.map(plant =>
          <h6 key={plant._id}>{plant.plantName}</h6>
        )}
        <h2>{gardenPlot.plant.plantName}</h2>
        <Link to={`/plants/${match.params.id}`}>add plants</ Link>
        <br />
        <Link to={`/garden-plots/${match.params.id}/update`}>
          <Button variant="warning">Edit</Button>
        </Link>
        <Link to={`/garden-plots/${match.params.id}/delete`}>
          <Button className="ml-2" variant="warning">Delete</Button>
        </Link>
        <br />
        <Link to={'/garden-plots/'}>back</Link>
      </div>

    )
  }
}

export default withRouter(GardenPlot)
