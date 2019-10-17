import { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signOut } from '../../api/auth'
import messages from '../AutoDismissAlert/messages'

class SignOut extends Component {
  componentDidMount () {
    const { alert, clearUser, user } = this.props

    signOut(user)
      .finally(() => alert({
        heading: 'signed out',
        messagE: messages.signOutSuccess,
        variant: 'success'
      }))
      .finally(() => clearUser())
  }

  render () {
    return ''
  }
}

export default withRouter(SignOut)
