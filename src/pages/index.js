import React, { useState } from 'react'
import Layout from '../components/layout/Layout'
import TextArea from '../components/TextArea'
import Alert from '../components/Alert'

export default function Home() {
  const [inputVal1, setInputVal1] = useState('')
  const [inputVal2, setInputVal2] = useState('')
  return (
    <Layout>
      <div className='input-wrapper'>
        <TextArea onChange={setInputVal1} />
        <TextArea onChange={setInputVal2} />
      </div>
      <Alert strings={[inputVal1, inputVal2]} />
    </Layout>
  )
}
