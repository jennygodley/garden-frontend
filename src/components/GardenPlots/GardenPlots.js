import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const GardenPlots = ({ user, alerts }) => {
  const [gardenPlots, setGardenPlots] = useState([])

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiUrl}/gardenPlots`,
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(res => setGardenPlots(res.data.gardenPlots))
      .catch(() => alert({ heading: 'oh no', message: 'something went wrong', variant: 'danger' }))
  }, [])

  const gardenPlotsJsx = gardenPlots.map(gardenPlot => (
    <li key={gardenPlot._id}>
      <Link to={`/garden-plots/${gardenPlot._id}`}>{gardenPlot.name}</Link>
    </li>
  ))

  if (gardenPlots.length === 0) {
    return (
      <React.Fragment>
        <br />
        <br />
        <br />
        <p>To get started, please <Link to={'/garden-plots-create/'}>add a garden plot</Link>.</p>
      </React.Fragment>
    )
  } else {
    return (
      <div>
        <h1>Your Garden Plots</h1>
        {gardenPlotsJsx}
      </div>

    )
  }
}

export default GardenPlots
