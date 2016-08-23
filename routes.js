import React, { Component } from 'react'
import { Route, IndexRoute, Link } from 'react-router'

// This will be shared between client-side (browser history) and server-side (no browser history)

// Main component
class App extends Component {
  componentDidMount(){
    document.body.className=''
  }
  render(){
    return (
      <div>
        <h1>React Universal Blog</h1>
           <nav>
              <ul>
                 <li><Link to="/">Home</Link></li>
                 <li><Link to="/about">About</Link></li>
                 <li><Link to="/work">Work</Link></li>
                 <li><Link to="/contact">Contact</Link></li>
              </ul>
           </nav>
        { this.props.children }
      </div>
    )
  }
}

// Pages
class Home extends Component {
  render(){
    return (
      <div>
        <h2>Home</h2>
        <div>Some home page content</div>
      </div>
    )
  }
}
class About extends Component {
  render(){
    return (
      <div>
        <h2>About</h2>
        <div>Some about page content</div>
      </div>
    )
  }
}
class Work extends Component {
  render(){
    return (
      <div>
        <h2>Work</h2>
        <div>Some work page content</div>
      </div>
    )
  }
}
class Contact extends Component {
  render(){
    return (
      <div>
        <h2>Contact</h2>
        <div>Some contact page content</div>
      </div>
    )
  }
}
class NoMatch extends Component {
  render(){
    return (
      <div>
        <h2>NoMatch</h2>
        <div>404 error</div>
      </div>
    )
  }
}

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="about" component={About}/>
    <Route path="work" component={Work}/>
    <Route path="contact" component={Contact}/>
    <Route path="*" component={NoMatch}/>
  </Route>
)
