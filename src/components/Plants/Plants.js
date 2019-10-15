import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import apiUrl from '../../apiConfig'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Plants = ({ user, alert, match, history }) => {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${apiUrl}/plants`,
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(res => setPlants(res.data.plants))
      .catch(() => alert({ heading: 'oh no', message: 'something went wrong', variant: 'danger' }))
  }, [])

  const plant = []

  const handleChange = (event) => {
    event.persist()
    plant.push(event.target.id)
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      method: 'PATCH',
      url: `${apiUrl}/gardenPlots/${match.params.id}`,
      data: {
        gardenPlot: { plant }
      },
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

  const plantsJsx = (
    <Form onSubmit={handleSubmit}>
      <Table responsive bordered hover size="sm" variant="primary">
        <thead>
          <tr>
            <th>add</th>
            <th>name</th>
            <th>when to plant</th>
            <th>in bloom</th>
            <th>perennial</th>
          </tr>
        </thead>
        <tbody>
          {plants.map(plant =>
            <tr key={plant._id}>
              <td><Form.Check onChange={handleChange} type="checkbox"id={plant._id} /></td>
              <td>{plant.plantName}</td>
              <td>{plant.whenToPlant}</td>
              <td>{plant.inBloomStart}</td>
              <td>{plant.perennial}</td>
            </tr>
          )}
        </tbody>
      </Table>
      <Button variant="warning" type="submit">Submit</Button>
    </Form>
  )

  if (plants.length === 0) {
    return (
      <p>loading...</p>
    )
  } else {
    return (
      <div>
        <h1>Plants</h1>
        {plantsJsx}
      </div>

    )
  }
}

export default withRouter(Plants)
