import React, { Component } from 'react'

export default class Footer extends Component {

  render(){

    const data = this.props.data
    let footer_text
    if(data.globals.text){
      footer_text = data.globals.text.footer_text
    }

    let twitter
    let facebook
    let github
    if(data.globals.social){
      twitter = data.globals.social.twitter
      facebook = data.globals.social.facebook
      github = data.globals.social.github
    }

    return (
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
              <ul class="list-inline text-center">
                <li>
                  <a href={ twitter } target="_blank">
                    <span class="fa-stack fa-lg">
                      <i class="fa fa-circle fa-stack-2x"></i>
                      <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a href={ facebook } target="_blank">
                    <span class="fa-stack fa-lg">
                      <i class="fa fa-circle fa-stack-2x"></i>
                      <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a href={ github } target="_blank">
                    <span class="fa-stack fa-lg">
                      <i class="fa fa-circle fa-stack-2x"></i>
                      <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
              </ul>
              <p class="copyright text-muted" dangerouslySetInnerHTML={{__html: footer_text }}></p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
