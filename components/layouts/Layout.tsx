import { FC } from 'react'
import Head from 'next/head'

interface Props {
  // any props that come into the component
  title?: string,
  children: JSX.Element
}

export const Layout: FC<Props> = ({ children, title })=> {
  return (
    <div>
        <Head>
            <title>{title || 'Pokemon App'}</title>
            <meta name='author' content='Rigoberto Rios'/>
            <meta name='description' content='Información sobre el pokémon XXXXXX'/>
            <meta name='keywords' content='xxxx. pokemon, pokedex'/>
        </Head>
        {/* Nabvar */}
        <main>
            {children}
        </main>
    </div>
  )
}
