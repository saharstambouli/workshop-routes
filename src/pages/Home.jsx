import React from 'react'

const Home = ({getProfile}) => {
  return (
    <div>Home
<br/>
<button onClick={getProfile}> go to profile </button>
    </div>
  )
}

export default Home