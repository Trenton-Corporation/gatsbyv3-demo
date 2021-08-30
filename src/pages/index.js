import React from "react"
import { useStyletron } from "baseui"

import Layout from "../components/Layout"

export default function Home() {
  const [css, theme] = useStyletron()
  console.log(theme)
  return (
    <Layout
      className={css({
        fontSize: "20px",
        color: theme.colors.primary,
      })}
    >
      <p
        className={css({
          fontSize: "20px",
          color: theme.colors.primary,
        })}
      >
        Hello world!
      </p>
    </Layout>
  )
}
