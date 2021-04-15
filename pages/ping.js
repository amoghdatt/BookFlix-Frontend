import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Layout from '../components/layout'

export default function ping(){
    return (
        <Layout>
            <Head>
                <title>Ping Test</title>
            </Head>
            <img src="https://images-na.ssl-images-amazon.com/images/I/81xdH6pM85L._SL1500_.jpg" width="800px"/>
            <h2 className={styles.title}>
                <Link href = "/">
                    <a>Take me Home</a>
                </Link>
            </h2>
        </Layout>
    )
}