import React, { Component } from 'react'
import { Link } from 'react-router'
import config from '../../config'

// Components
import Header from '../Partials/Header'

// Dispatcher
import AppDispatcher from '../../dispatcher/AppDispatcher'

export default class NoMatch extends Component {

  compoentWillMount(){
    this.getPageDate()
  }

  componentDidMount(){
    const data = this.props.data
    document.title = config.site.title + ' | Page Not Found'
  }

  getPageData(){
    AppDispatcher.dispatch({
      action: 'get-page-data',
      slug: 'home'
    })
  }
  render() {

    const data = this.props.data
    const page = data.page

    return(
       <div>
        <Header data={ data }/>
        <div id="main-content" class="container">
          <div class="row">
            <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
              <div class="text-center">
                Oh noes!  Looks like you stumbled down a worm hole!
                <br/>
                <br/>
                <Link to="/">Take me home</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
