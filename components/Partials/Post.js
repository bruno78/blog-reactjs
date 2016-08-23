import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Post extends Components {

  render() {

    const article = this.props.article

    const style = {
      marginBottom: 20
    }

    retun(
      <div>
        <Link to="/" class="btn btn-default" style={ style }>&lt;&lt; Back to Article List</Link>
        <h2>{ article.title }</h2>
        <div dangerouslySetInnerHTML={ {__html: article.content }}></div>
      </div>
    )
  }
}
