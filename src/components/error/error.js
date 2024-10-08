import React, { Component } from 'react'
import { Alert } from 'antd'
import Marquee from 'react-fast-marquee'

const errorStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
}

class Error extends Component {
  render() {
    return (
      <div style={errorStyle}>
        <Alert
          banner
          message={
            <Marquee pauseOnHover gradient={false}>
              Something went wrong. Please try again later. Thank you!
            </Marquee>
          }
        />
      </div>
    )
  }
}

export default Error
