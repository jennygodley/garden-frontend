import React, { Fragment, useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

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
      <p>loading...</p>
    )
  } else {
    return (
      <div>
        <h2>{gardenPlot.name}</h2>
        <Link to={`/plants/${match.params.id}`}>add or remove plants from this garden</ Link>

        <Fragment>
          <CardDeck className="mb-4">
            <Card>
              <Card.Header>March</Card.Header>
              <Card.Body>
                {gardenPlot.plant.map(plant =>
                  plant.march
                    ? <OverlayTrigger key={plant._id} overlay={<Tooltip key={plant._id} id={`${plant._id}tooltip`}>{plant.plantName}</Tooltip>}><span className={`${plant.plantName}`} key={plant._id}> ❀ </span></OverlayTrigger>
                    : ''
                )}
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>April</Card.Header>
              <Card.Body>
                {gardenPlot.plant.map(plant =>
                  plant.april
                    ? <OverlayTrigger key={plant._id} overlay={<Tooltip key={plant._id} id={`${plant._id}tooltip`}>{plant.plantName}</Tooltip>}><span className={`${plant.plantName}`} key={plant._id}> ❀ </span></OverlayTrigger>
                    : ''
                )}
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>May</Card.Header>
              <Card.Body>
                {gardenPlot.plant.map(plant =>
                  plant.may
                    ? <OverlayTrigger key={plant._id} overlay={<Tooltip key={plant._id} id={`${plant._id}tooltip`}>{plant.plantName}</Tooltip>}><span className={`${plant.plantName}`} key={plant._id}> ❀ </span></OverlayTrigger>
                    : ''
                )}
              </Card.Body>
            </Card>
          </CardDeck>

          <CardDeck className="mb-4">
            <Card>
              <Card.Header>June</Card.Header>
              <Card.Body>
                {gardenPlot.plant.map(plant =>
                  plant.june
                    ? <OverlayTrigger key={plant._id} overlay={<Tooltip key={plant._id} id={`${plant._id}tooltip`}>{plant.plantName}</Tooltip>}><span className={`${plant.plantName}`} key={plant._id}> ❀ </span></OverlayTrigger>
                    : ''
                )}
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>July</Card.Header>
              <Card.Body>
                {gardenPlot.plant.map(plant =>
                  plant.july
                    ? <OverlayTrigger key={plant._id} overlay={<Tooltip key={plant._id} id={`${plant._id}tooltip`}>{plant.plantName}</Tooltip>}><span className={`${plant.plantName}`} key={plant._id}> ❀ </span></OverlayTrigger>
                    : ''
                )}
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>August</Card.Header>
              <Card.Body>
                {gardenPlot.plant.map(plant =>
                  plant.aug
                    ? <OverlayTrigger key={plant._id} overlay={<Tooltip key={plant._id} id={`${plant._id}tooltip`}>{plant.plantName}</Tooltip>}><span className={`${plant.plantName}`} key={plant._id}> ❀ </span></OverlayTrigger>
                    : ''
                )}
              </Card.Body>
            </Card>
          </CardDeck>

          <CardDeck className="mb-4">
            <Card>
              <Card.Header>September</Card.Header>
              <Card.Body>
                {gardenPlot.plant.map(plant =>
                  plant.sept
                    ? <OverlayTrigger key={plant._id} overlay={<Tooltip key={plant._id} id={`${plant._id}tooltip`}>{plant.plantName}</Tooltip>}><span className={`${plant.plantName}`} key={plant._id}> ❀ </span></OverlayTrigger>
                    : ''
                )}
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>October</Card.Header>
              <Card.Body>
                {gardenPlot.plant.map(plant =>
                  plant.oct
                    ? <OverlayTrigger key={plant._id} overlay={<Tooltip key={plant._id} id={`${plant._id}tooltip`}>{plant.plantName}</Tooltip>}><span className={`${plant.plantName}`} key={plant._id}> ❀ </span></OverlayTrigger>
                    : ''
                )}
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>November</Card.Header>
              <Card.Body>
                {gardenPlot.plant.map(plant =>
                  plant.nov
                    ? <OverlayTrigger key={plant._id} overlay={<Tooltip key={plant._id} id={`${plant._id}tooltip`}>{plant.plantName}</Tooltip>}><span className={`${plant.plantName}`} key={plant._id}> ❀ </span></OverlayTrigger>
                    : ''
                )}
              </Card.Body>
            </Card>
          </CardDeck>

          <CardDeck className="mb-4">
            <Card>
              <Card.Header>December</Card.Header>
              <Card.Body>
                {gardenPlot.plant.map(plant =>
                  plant.dec
                    ? <OverlayTrigger key={plant._id} overlay={<Tooltip key={plant._id} id={`${plant._id}tooltip`}>{plant.plantName}</Tooltip>}><span className={`${plant.plantName}`} key={plant._id}> ❀ </span></OverlayTrigger>
                    : ''
                )}
              </Card.Body>
            </Card>
            <Card height={150}>
              <Card.Header>January</Card.Header>
              <Card.Body>
                {gardenPlot.plant.map(plant =>
                  plant.jan
                    ? <OverlayTrigger key={plant._id} overlay={<Tooltip key={plant._id} id={`${plant._id}tooltip`}>{plant.plantName}</Tooltip>}><span className={`${plant.plantName}`} key={plant._id}> ❀ </span></OverlayTrigger>
                    : ''
                )}
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>February</Card.Header>
              <Card.Body>
                {gardenPlot.plant.map(plant =>
                  plant.feb
                    ? <OverlayTrigger key={plant._id} overlay={<Tooltip key={plant._id} id={`${plant._id}tooltip`}>{plant.plantName}</Tooltip>}><span className={`${plant.plantName}`} key={plant._id}> ❀ </span></OverlayTrigger>
                    : ''
                )}
              </Card.Body>
            </Card>
          </CardDeck>
        </Fragment>

        <Link to={`/garden-plots/${match.params.id}/update`}>edit garden name</Link> • <Link to={`/garden-plots/${match.params.id}/delete`}>delete this garden</Link> • <Link to={'/garden-plots/'}>back</Link>
      </div>

    )
  }
}

export default withRouter(GardenPlot)
