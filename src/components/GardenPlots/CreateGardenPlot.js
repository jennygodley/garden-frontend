import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import GardenPlotForm from './GardenPlotForm'
// import messages from '../AutoDismissAlert/messages'

const CreateGardenPlot = ({ user, alerts }) => {
  const [gardenPlot, setGardenPlot] = useState({ name: '' })
  const [createdBookId, setCreatedBookId] = useState(null)

  const handleChange = (event) => {
    event.persist()

    setGardenPlot(gardenPlot => ({ ...gardenPlot, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      method: 'POST',
      url: `${apiUrl}/gardenPlots`,
      data: { gardenPlot },
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(res => setCreatedBookId(res.data.gardenPlot._id))
      // .then(() => alert({
      //   heading: 'Create Book Success',
      //   message: messages.createBookSuccess,
      //   variant: 'success'
      // }))
      .catch(console.error)
  }

  if (createdBookId) {
    return <Redirect to={`/gardenPlots/${createdBookId}`} />
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

export default CreateGardenPlot
