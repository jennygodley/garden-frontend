import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const GardenPlotForm = ({ gardenPlot, handleChange, handleSubmit }) => {
  const cancelPath = gardenPlot._id ? `#/gardenPlots/${gardenPlot._id}` : '#gardenPlots'

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Title</Form.Label>
        <Form.Control
          autoComplete="off"
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
          value={gardenPlot.name}
          required
        />
      </Form.Group>
      <Button variant="warning" type="submit">Submit</Button>
      <Button variant="warning" href={cancelPath} className="ml-2" type="button">Cancel</Button>
    </Form>
  )
}

export default GardenPlotForm
