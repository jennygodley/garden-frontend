import React, { useState, useEffect } from 'react'
// import FormCheck from 'react-bootstrap/FormCheck'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import apiUrl from '../../apiConfig'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Plants = ({ user, alert, match, history }) => {
  const [plants, setPlants] = useState([])
  // const [chosenPlants, setChosenPlants] = useState([...plants])
  const [setCurrentGardenPlants] = useState([])
  // const [updatedPlants, setUpdatedPlants] = useState([])

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

    axios({
      method: 'GET',
      url: `${apiUrl}/gardenPlots/${match.params.id}`,
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(res => setCurrentGardenPlants(res.data.gardenPlot.plant))
      .catch(() => alert({ heading: 'oh no', message: 'something went wrong', variant: 'danger' }))
  }, [])

  // const syncPlants = function (chosenPlants, currentGardenPlants) {
  //   for (let i = 0; i < chosenPlants.length; i++) {
  //       if (currentGardenPlants._id === chosenPlants[i]._id) {
  //         chosenPlants[i].startIndoors = 'TRUE'
  //       }
  //     }
  //   }
  // }

  const handleChange = (event) => {
    event.persist()
    // iterates through plants to set startIndoors to true/false when box is
    // checked/unchecked by the user
    for (let i = 0; i < plants.length; i++) {
      if (event.target.id === plants[i]._id) {
        if (plants[i].startIndoors === 'TRUE') {
          plants[i].startIndoors = 'FALSE'
        } else {
          plants[i].startIndoors = 'TRUE'
        }
      }
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    const plant = []
    // creates an array of IDs of plants marked 'TRUE' to pass to axios
    function isTrue (plants) {
      for (let i = 0; i < plants.length; i++) {
        console.log(plants[i].start)
        if (plants[i].startIndoors === 'TRUE') {
          plant.push(plants[i]._id)
        }
      }
    }
    isTrue(plants)

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
              <td>
                {plants.startIndoors === 'FALSE'
                  ? <Form.Check onChange={handleChange} checked type="checkbox" id={plant._id} />
                  : <Form.Check onChange={handleChange} type="checkbox" id={plant._id} />
                }
              </td>
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
