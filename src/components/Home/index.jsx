//Home组件下的index.js文件
import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import store from '../Store'
import Pages from '../Pages'

export default class Home extends Component {
  render() {
    return (
      <div>
        {/* //通过Provider包裹传入相应store，可传递多个store */}
        <Provider store={store}>
          <Pages />
        </Provider>
      </div>
    )
  }
}
