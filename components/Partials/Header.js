import React, { Component } from 'react'

export default class Header extends Component {

  render(){

    const data = this.props.data
    const hero = data.page.hero
    const headline = data.page.headline
    const subheadline = data.page.subheadline

    return(
      <div>
        <header class="intro-header" style={ { backgroundImage: "url('" + hero + "')" } }>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                <div class="site-heading">
                  <h1>{ headline }</h1>
                  <hr class="small" />
                  <span class="subheading">{ subheadline }</span>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }
}
