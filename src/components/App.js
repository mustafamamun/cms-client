import React, { Component } from 'react'
import Header from './common/Header'
import Tabs from './common/Tabs'
import 'bootstrap/dist/css/bootstrap.css';
import '../stylesheets/css/font-awesome.min.css'
class App extends Component {
  render() {
    const { children } = this.props;

    return (
      <div>
          <Tabs />
          <div >
          <Header  />
              <div >
                {children}
              </div>
          </div>
        </div>
    );
  }
}

export default App
