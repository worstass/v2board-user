import { history } from 'umi'
import React, { useEffect } from 'react'

const IndexPage: React.FC = () => {
  useEffect(() => {
    history.replace('/intro')
  }, [])
  return <></>
}

export default IndexPage
