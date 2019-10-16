import React, { Fragment, useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

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

        <Fragment>
          <CardDeck className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>March</Card.Title>
                {gardenPlot.plant.map(plant =>
                  plant.march
                    ? <OverlayTrigger key={plant._id} overlay={<Tooltip key={plant._id} id={`${plant._id}tooltip`}>{plant.plantName}</Tooltip>}><span className="flower" key={plant._id}> ❀ </span></OverlayTrigger>
                    : ''
                )}
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>April</Card.Title>
                {gardenPlot.plant.map(plant =>
                  plant.april
                    ? <OverlayTrigger key={plant._id} overlay={<Tooltip key={plant._id} id={`${plant._id}tooltip`}>{plant.plantName}</Tooltip>}><span className="flower" key={plant._id}> ❀ </span></OverlayTrigger>
                    : ''
                )}
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>May</Card.Title>
                {gardenPlot.plant.map(plant =>
                  plant.may
                    ? <OverlayTrigger key={plant._id} overlay={<Tooltip key={plant._id} id={`${plant._id}tooltip`}>{plant.plantName}</Tooltip>}><span className="flower" key={plant._id}> ❀ </span></OverlayTrigger>
                    : ''
                )}
              </Card.Body>
            </Card>
          </CardDeck>

          <CardDeck className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>June</Card.Title>
                {gardenPlot.plant.map(plant =>
                  plant.june
                    ? <OverlayTrigger key={plant._id} overlay={<Tooltip key={plant._id} id={`${plant._id}tooltip`}>{plant.plantName}</Tooltip>}><span className="flower" key={plant._id}> ❀ </span></OverlayTrigger>
                    : ''
                )}
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>July</Card.Title>
                {gardenPlot.plant.map(plant =>
                  plant.july
                    ? <OverlayTrigger key={plant._id} overlay={<Tooltip key={plant._id} id={`${plant._id}tooltip`}>{plant.plantName}</Tooltip>}><span className="flower" key={plant._id}> ❀ </span></OverlayTrigger>
                    : ''
                )}
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>August</Card.Title>
                {gardenPlot.plant.map(plant =>
                  plant.aug
                    ? <OverlayTrigger key={plant._id} overlay={<Tooltip key={plant._id} id={`${plant._id}tooltip`}>{plant.plantName}</Tooltip>}><span className="flower" key={plant._id}> ❀ </span></OverlayTrigger>
                    : ''
                )}
              </Card.Body>
            </Card>
          </CardDeck>

          <CardDeck className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>September</Card.Title>
                {gardenPlot.plant.map(plant =>
                  plant.sept
                    ? <OverlayTrigger key={plant._id} overlay={<Tooltip key={plant._id} id={`${plant._id}tooltip`}>{plant.plantName}</Tooltip>}><span className="flower" key={plant._id}> ❀ </span></OverlayTrigger>
                    : ''
                )}
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>October</Card.Title>
                {gardenPlot.plant.map(plant =>
                  plant.oct
                    ? <OverlayTrigger key={plant._id} overlay={<Tooltip key={plant._id} id={`${plant._id}tooltip`}>{plant.plantName}</Tooltip>}><span className="flower" key={plant._id}> ❀ </span></OverlayTrigger>
                    : ''
                )}
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>November</Card.Title>
                {gardenPlot.plant.map(plant =>
                  plant.nov
                    ? <OverlayTrigger key={plant._id} overlay={<Tooltip key={plant._id} id={`${plant._id}tooltip`}>{plant.plantName}</Tooltip>}><span className="flower" key={plant._id}> ❀ </span></OverlayTrigger>
                    : ''
                )}
              </Card.Body>
            </Card>
          </CardDeck>

          <CardDeck className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>December</Card.Title>
                {gardenPlot.plant.map(plant =>
                  plant.dec
                    ? <OverlayTrigger key={plant._id} overlay={<Tooltip key={plant._id} id={`${plant._id}tooltip`}>{plant.plantName}</Tooltip>}><span className="flower" key={plant._id}> ❀ </span></OverlayTrigger>
                    : ''
                )}
              </Card.Body>
            </Card>
            <Card height={150}>
              <Card.Body>
                <Card.Title>January</Card.Title>
                {gardenPlot.plant.map(plant =>
                  plant.jan
                    ? <OverlayTrigger key={plant._id} overlay={<Tooltip key={plant._id} id={`${plant._id}tooltip`}>{plant.plantName}</Tooltip>}><span className="flower" key={plant._id}> ❀ </span></OverlayTrigger>
                    : ''
                )}
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <Card.Title>February</Card.Title>
                {gardenPlot.plant.map(plant =>
                  plant.feb
                    ? <OverlayTrigger key={plant._id} overlay={<Tooltip key={plant._id} id={`${plant._id}tooltip`}>{plant.plantName}</Tooltip>}><span className="flower" key={plant._id}> ❀ </span></OverlayTrigger>
                    : ''
                )}
              </Card.Body>
            </Card>
          </CardDeck>
        </Fragment>

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
