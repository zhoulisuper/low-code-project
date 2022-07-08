
import Modal from './page/view/modal'
import Form from './page/view/form'
import AntdForm from './page/view/antdForm'
import Table from './page/view/table'
import Tree from './page/view/tree'
// import Home from './components/Home'
// import { Provider } from 'mobx-react'
// import store from './components/Store'
import TableSub from './page/view/tableSub'
import PageB from './page/view/pageB'



const routeConfig = [
    {
        path: '/',
        component: Table,
        indexRoute: { component: Form },
        childRoutes: [
            { path: 'TableSub', component: TableSub },
            {
                path: 'AntdForm',
                component: AntdForm,
            },
            {
                path: 'Form',
                component: Form,
            },
        ]
    }
]

export default routeConfig;