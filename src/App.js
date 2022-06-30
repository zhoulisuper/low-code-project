import logo from './logo.svg'
import './App.css'
import Modal from './page/view/modal'
import Form from './page/view/form'
import AntdForm from './page/view/antdForm'
import Table from './page/view/table'
import TablePro from './page/view/tablePro'
import Tree from './page/view/tree'
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
        {/* <Form /> */}
        {/* <Tree /> */}
        <TablePro />
        {/* <AntdForm /> */}
        {/* <PageA /> */}
        {/* <Table /> */}
      </Provider>
    </div>
  )
}

export default App
