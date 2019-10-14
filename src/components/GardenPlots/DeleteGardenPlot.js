import React, { useState, useEffect } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const DeleteGardenPlot = ({ user, alert, match }) => {
  const [deletedGardenPlot, setDeletedGardenPlot] = useState(null)

  useEffect(() => {
    axios({
      method: 'DELETE',
      url: `${apiUrl}/gardenPlots/${match.params.id}`,
      headers: {
        'Authorization': `Token token=${user.token}`
      }
    })
      .then(() => alert({
        heading: 'success',
        message: 'you deleted your garden plot',
        variant: 'success'
      }))
      .then(res => setDeletedGardenPlot(true))
      .catch(() => alert({ heading: 'oh no', message: 'something went wrong', variant: 'danger' }))
  }, [])

  if (deletedGardenPlot) {
    return <Redirect to={'/garden-plots'} />
  }

  return (
    <div>
        loading...
    </div>
  )
}

export default withRouter(DeleteGardenPlot)
