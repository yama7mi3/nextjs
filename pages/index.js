import styles from '../styles/Home.module.css'
import { useCallback, useEffect, useState } from 'react'

import Button from '../components/Button'
import ClickCount from '../components/ClickCount'

function throwError() {
  console.log(
    // The function body() is not defined
    document.body()
  )
}

function Home() {
  const [count, setCount] = useState(0)
  const increment = useCallback(() => {
    setCount((v) => v + 1)
  }, [setCount])

  useEffect(() => {
    const r = setInterval(() => {
      increment()
    }, 1000)

    return () => {
      clearInterval(r)
    }
  }, [increment])

  return (
    <main className={styles.main}>
      <h1>Fast Refresh Demo</h1>
      <div>
        <p>現在値: {count}</p>
      </div>
      <div>
        <ClickCount />
      </div>
      <div>
        <Button
          onClick={(e) => {
            setTimeout(() => document.parentNode(), 0)
            throwError()
          }}
        >
          Throw an Error
        </Button>
      </div>
    </main>
  )
}

export default Home
