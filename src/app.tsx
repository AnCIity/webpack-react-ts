import React from 'react'
import axios from 'axios'

interface IProps {
  name: string
  age: number
}

function App(props: IProps) {
  return (
    <div className='app'>
      <button
        onClick={async () => {
          // const data = await axios.post('/api/user/login')

          try {
            const data = await fetch('/api/user/login', { method: 'POST' })

            console.log('返回数据：', data)
          } catch (error) {}
        }}
      >
        请求
      </button>
    </div>
  )
}

export default App
