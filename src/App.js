import React from 'react'
import './assets/stylesheets/App.css'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import CreateWorksheetFlow from './components/SampleComponent'
import Reducer from './redux/reducer'
const store = createStore(Reducer)
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CreateWorksheetFlow />
      </div>
    </Provider>
  )
}

export default App
