import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import GardenPlotForm from './GardenPlotForm'

const UpdateGardenPlot = ({ user, alert, match, history }) => {
  const [gardenPlot, setGardenPlot] = useState({ name: '' })

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

  const handleChange = (event) => {
    event.persist()
    setGardenPlot(gardenPlot => ({ ...gardenPlot, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      method: 'PATCH',
      url: `${apiUrl}/gardenPlots/${match.params.id}`,
      data: { gardenPlot },
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(() => alert({
        heading: 'success',
        message: 'you updated your garden plot',
        variant: 'success'
      }))
      .then(() => history.push(`/garden-plots/${match.params.id}`))
      .catch(() => alert({ heading: 'oh no', message: 'something went wrong', variant: 'danger' }))
  }

  return (
    <div>
      <GardenPlotForm
        gardenPlot={gardenPlot}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default withRouter(UpdateGardenPlot)
