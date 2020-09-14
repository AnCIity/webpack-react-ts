import React from 'react'

interface IProps {
  name: string
  age: number
}

function App(props: IProps) {
  const { name, age } = props

  console.log([1, 2, 3].includes(2))

  let obj = {
    name: '实际名称'
  }
  let handler = {
    //等同于
    // get:(target,property)=>{
    //get:function(target,property){
    ['get']() {
      return '拦截名称'
    }
  }
  let proxy = new Proxy(obj, handler)
  console.log(proxy.name) //chen

  return (
    <div className='app'>
      <span>{`Hello! I'm ${name}, ${age} years old.`}</span>
    </div>
  )
}

export default App
