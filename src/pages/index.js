import React, { Component } from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Wrapper = styled.div`
  margin 0 auto;
  background-color: #222;
  min-height: 100vh;
  overflow-x: hidden;
  color: #fff;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
`


class IndexPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      break: performance.now(),
      session: performance.now(),
    }
  }
  render() {
    return (
      <Wrapper>
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
          <div id="break-label">
              Break Length
              <div>
                <button id="break-decrement">-</button>
                <button id="break-increment">+</button>
              </div>  
          </div>

          <div id="break-length">5</div>

          <div id="session-label">
              Session Length
              <div>
                <button id="session-decrement">-</button>
                <button id="session-increment">+</button>
              </div>  
          </div>

          <div id="timer-label">
              Session
              <div id="session-length">
                25
              </div>
          </div>
          
          <div id="time-left">{performance.now()}</div>

          <div>
            <button id="start_stop">Start / Stop</button>
          </div>

          <div>
            <button id="reset">Reset</button>
          </div>

        
      </Layout>
    </Wrapper>
    )
  }
}

export default IndexPage


