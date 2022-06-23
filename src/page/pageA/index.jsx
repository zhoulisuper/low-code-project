
    
import React, { Component } from 'react'
import LowCodeComponent from '../../components/LowCodeAnalysis' // 引入react组件
import Schema from './Schema'
import Packages from './Packages'

export default class PageA extends Component  {
 render(){
   return <LowCodeComponent projectSchema={Schema} packages={Packages} />
 }
}
