import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Nav extends Component {

  handleClick(){
    $('.navbar-collapse').removeClass('in')
    $('html,body').scrollTop(0)
  }

  render(){

    const data = this.props.data
    const nav_itmes = data.globals.nav_items

    // Prevent initial null
    if(!nav_items){
      return <div></div>
    }

    const menu_items = nav_items.map(( nav_items ) => {
      return (
        <li key={ 'key-' + nav_item.value}>
          <Link onClick={ this.handleClick } to={ '/' + nav_item.value }>{ nav_item.title }</Link>
        </li>
      )
    })

    return (
      <nav class="navbar navbar-default navbar-custom navbar-fixed-top">
        <div class="container-fluid">
          <div class="navbar-header page-scroll">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" target="_blank" href="https://cosmicjs.com">Cosmic JS</a>
          </div>

          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
              { menu_items }
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
