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
      .catch(console.error)
  }, [])

  const gardenPlotsJsx = gardenPlots.map(gardenPlot => (
    <li key={gardenPlot._id}>
      <Link to={`/gardenPlots/${gardenPlot._id}`}>{gardenPlot.name}</Link>
    </li>
  ))

  if (gardenPlots.length === 0) {
    return (
      <p>please add a garden</p>
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
