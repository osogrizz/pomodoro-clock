import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Wrapper = styled.div`
  margin 0 auto;
`


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Wrapper>
      <div id="break-label">
          Break Length
      </div>

      <div id="session-label">
        Session Length
      </div>

    </Wrapper>
    
  </Layout>
)

export default IndexPage
