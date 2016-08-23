import React, { Component } from 'react'
import _ from 'lodash'
import config from '../../config'

// Components
import Header from '../Partials/Header'
import Bloglist from '../Partials/Bloglist'
import Post from '../Partials/Post'

// Dispatcher
import AppDispatcher from '../../dispatcher/AppDispatcher'

export default class Blog extends Component {

  componentWillMount(){
    this.getPageData()
  }
  componentDidMount(){
    const data = this.props.data
    document.title = config.site.title + ' | ' + data.page.title
  }

  getPageData(){
    AppDispatcher.dispatch({
      action: 'get-page-data',
      page_slug: 'blog',
      post_slug: this.props.params.slug
    })
  }

  getMoreArticles(){
    AppDispatcher.dispatch({
      action: 'get-more-items'
    })
  }

  render(){
    const data = this.props.data
    const globals = data.globals
    const pages = data.pages
    let main_content

    if(!this.props.params.slug){

      main_content = <BlogList getMoreArticles={ this.getMoreArticles } data={ data }/>


    } else {

      const articles = data.articles

      // Get current page slug
      const slug = this.props.params.slug
      const articles_object = _.indexBy(articles, 'slug')
      const article = articles_object[slug]
      main_content = <Post article={ article } />

    }

    return (
      <div>
        <Header data={ data }/>
        <div id="main-content" class="container">
          <div class="row">
            <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            { main_content }
            </div>
          </div>
        </div>
      </div>
    )
  }
}
