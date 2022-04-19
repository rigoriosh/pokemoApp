import type { NextPage } from 'next'
import { Button } from '@nextui-org/react';
import Head from 'next/head'
import Image from 'next/image'
import { Layout } from '../components/layouts';

const HomePage: NextPage = () => {
  return (
    <Layout title='Listado de pokemos'>
      {/* <div className=''> */}
        <Button 
          color={'gradient'}
          onClick={()=>console.log(1111)}>
          Click me
        </Button>
      {/* </div> */}
    </Layout>
  )
}

export default HomePage
