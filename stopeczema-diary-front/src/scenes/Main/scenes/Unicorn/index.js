import React from 'react'
import { useState } from 'react'
import { Button } from '@material-ui/core'

export default props => {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      <h1>Unicorn</h1>
      <h2>Testing React hooks: count: {count}</h2>
      <Button onClick={() => setCount(count + 1)}>Add</Button>
    </React.Fragment>
  )
}
