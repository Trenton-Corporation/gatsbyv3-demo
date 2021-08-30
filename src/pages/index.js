import React from "react"
import { Grid, Cell } from "baseui/layout-grid"
import { Card, StyledBody, StyledAction } from "baseui/card"
import { Button } from "baseui/button"

import Layout from "../components/Layout"

export default function Home() {


  return (
    <Layout>
      <Grid>
        <Cell span={12}>
          <img
            src="https://trentoncorp.com/wp-content/themes/trentoncorp/flash/flashhome-placeholder-img.png"
            alt="High quality, long lasting products offering optimal protection from corrosion"
            role="presentation"
            aria-hidden="true"
          />
        </Cell>
        <Cell span={4}>
          <Card>
            <StyledBody>
              Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla
              ornare faucibus ex, non facilisis nisl. Proin ut dui sed metus
              pharetra hend rerit vel non mi. Nulla ornare faucibus ex, non
              facilisis nisl.
            </StyledBody>
            <StyledAction>
              <Button
                overrides={{
                  BaseButton: { style: { width: "100%" } },
                }}
              >
                Button Label
              </Button>
            </StyledAction>
          </Card>
        </Cell>
        <Cell span={4}>
          <Card>
            <StyledBody>
              Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla
              ornare faucibus ex, non facilisis nisl. Proin ut dui sed metus
              pharetra hend rerit vel non mi. Nulla ornare faucibus ex, non
              facilisis nisl.
            </StyledBody>
            <StyledAction>
              <Button
                overrides={{
                  BaseButton: { style: { width: "100%" } },
                }}
              >
                Button Label
              </Button>
            </StyledAction>
          </Card>
        </Cell>
        <Cell span={4}>
          <Card>
            <StyledBody>
              Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla
              ornare faucibus ex, non facilisis nisl. Proin ut dui sed metus
              pharetra hend rerit vel non mi. Nulla ornare faucibus ex, non
              facilisis nisl.
            </StyledBody>
            <StyledAction>
              <Button
                overrides={{
                  BaseButton: { style: { width: "100%" } },
                }}
              >
                Button Label
              </Button>
            </StyledAction>
          </Card>
        </Cell>
      </Grid>
    </Layout>
  )
}
