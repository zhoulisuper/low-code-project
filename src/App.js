import { Router, Route,} from 'react-router'


// import Modal from './page/view/modal'
// import Form from './page/view/form'
import AntdForm from './page/view/antdForm'
import Table from './page/view/table'
import Tree from './page/view/tree'
// import Home from './components/Home'
// import { Provider } from 'mobx-react'
// import store from './components/Store'
import TableSub from './page/view/tableSub'
// import PageB from './page/view/pageB'



function App() {
  return (
    <Router>
    <Route path="/" component={Table}>
      <Route path="about" component={Tree} />
      <Route path="inbox" component={AntdForm}>
        <Route path="messages" component={TableSub} />
      </Route>
    </Route>
  </Router>
  )
}

export default App
