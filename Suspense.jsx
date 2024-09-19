import React, { lazy, Suspense } from 'react'

const DataComponent = lazy(() => new Promise(resolve => {
  setTimeout(() => resolve(import('./Components/DataComponent')), 2000)
}));

const App = () => {
  return (
    <div>
      <h1>My App</h1>
    <Suspense fallback={<div>Loading ...</div>}>
        <DataComponent />
        </Suspense>
    </div >
  )
}

export default App


import React from 'react'

const DataComponent = () => {
  return (
    <div>
      <h2>This is data component!</h2>
      <p>Content from the lazy-loaded component</p>
    </div>
  )
}

export default DataComponent

