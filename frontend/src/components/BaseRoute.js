import React from 'react'
import { 
  Route
} from 'react-router-dom';

import Auth from '../pages/Auth'
import Home from '../pages/Home'

// Figure out if / should direct to home page
// or auth page depending on auth status
function BaseRoute(props) {
  if (props.authCheckFinished) {
    if (props.isLoggedIn) {
      return (
        <Route
          path="/"
          exact
          render={() => 
            <Home 
              user={props.user}
              lists={props.lists}
            />
          }
          user={props.user} 
        />
      )
    } else {
      return (
        <Route 
          path="/" 
          exact
          render={() => 
            <Auth 
              onAuthenticated={props.onAuthenticated}
            />
          }
        />
      )

    }
  }
  return null
}

export default BaseRoute