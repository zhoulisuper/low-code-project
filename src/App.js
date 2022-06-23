import logo from './logo.svg'
import './App.css'
import Modal from './page/view/modal'
import Form from './page/view/form'
import AntdForm from './page/view/antdForm'
import Table from './page/view/table'
import Home from './components/Home'
import { Provider } from 'mobx-react'
import store from './components/Store'

import PageA from './page/pageA'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        {/* <Modal /> */}
        {/* <Home /> */}
        <Form />
        {/* <AntdForm /> */}
        <PageA />
        {/* <Table /> */}
      </Provider>
    </div>
  )
}

export default App
