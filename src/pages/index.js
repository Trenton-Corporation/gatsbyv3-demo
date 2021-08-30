import React from "react"
import { useStyletron } from "baseui"
import { Grid, Cell } from "baseui/layout-grid"

import Layout from "../components/Layout"

export default function Home() {
  const [css, theme] = useStyletron()
  console.log(theme)
  return (
    <Layout>
      <Grid>
        <Cell>
          <img
            src="https://trentoncorp.com/wp-content/themes/trentoncorp/flash/flashhome-placeholder-img.png"
            alt="High quality, long lasting products offering optimal protection from corrosion"
            role="presentation"
            aria-hidden="true"
          />
          <p
            className={css({
              fontSize: "20px",
              color: theme.colors.primary,
            })}
          >
            Hello world!
          </p>
        </Cell>
      </Grid>
    </Layout>
  )
}
