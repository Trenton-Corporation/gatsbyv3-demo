import React from "react"

import { useStyletron } from "baseui"
import { Button, KIND } from "baseui/button"
import { Card, StyledBody, StyledAction } from "baseui/card"
import { Grid, Cell } from "baseui/layout-grid"
import { ListItem, ListItemLabel } from "baseui/list"
import { H2 } from "baseui/typography"
import { StyledLink as Link } from "baseui/link"
import { Accordion, Panel } from "baseui/accordion"

import Layout from "../components/Layout"

export default function Home() {
  const [css] = useStyletron()
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
              <H2>Welcome</H2>
              <p>
                Trenton products provide effective, long-lasting anticorrosion
                protection for your resources.
              </p>
              <p>
                Our <Link href="#"> products</Link> include a variety of
                Wax-Tape® brand anticorrosion wraps for applications in
                aboveground and belowground settings, hot-applied and
                cold-applied waxes, outerwraps for additional mechanical
                protection and casing filling for pipeline and cable casings.
              </p>

              <ul
                className={css({
                  width: "auto",
                  paddingLeft: 0,
                  paddingRight: 0,
                })}
              >
                <ListItem>
                  <Link href="#">Material Requirements Calculator</Link>
                </ListItem>
                <ListItem>
                  <ListItemLabel description="Check back often for updated videos.">
                    <Link href="#">
                      Training Videos: Applying Trenton Products
                    </Link>
                  </ListItemLabel>
                </ListItem>
              </ul>
            </StyledBody>
            <StyledAction>
              <Button $as="a" href="#" kind={KIND.secondary}>
                Learn More
              </Button>
            </StyledAction>
          </Card>
        </Cell>
        <Cell span={4}>
          <Card>
            <StyledBody>
              <H2>Products</H2>
              <ul
                className={css({
                  width: "auto",
                  paddingLeft: 0,
                  paddingRight: 0,
                })}
              >
                <ListItem>
                  <Link href="#">Wax-Tape® Brand Anticorrosion Wraps</Link>
                </ListItem>
                <ListItem>
                  <Link href="#">Primers & Other Products</Link>
                </ListItem>
                <ListItem>
                  <Link href="#">
                    Innercoat® Hot-Applied Wax Coating System
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#">Outerwraps</Link>
                </ListItem>
                <ListItem>
                  <Link href="#">Casing Filling</Link>
                </ListItem>
                <ListItem>
                  <Link href="#">Patch-Pad® Exothermic Weld Protector</Link>
                </ListItem>
              </ul>
            </StyledBody>
            <StyledAction>
              <Button $as="a" href="#" kind={KIND.secondary}>
                View Products
              </Button>
            </StyledAction>
          </Card>
        </Cell>
        <Cell span={4}>
          <Card>
            <StyledBody>
              <H2>Contact</H2>
              <Accordion onChange={({ expanded }) => console.log(expanded)}>
                <Panel title="Corporate Headquarters">
                  Ann Arbor, Michigan{" "}
                  <Link href="tel:+17344243600">(734) 424-3600</Link>
                </Panel>
                <Panel title="North America">
                  <ul
                    className={css({
                      width: "auto",
                      paddingLeft: 0,
                      paddingRight: 0,
                    })}
                  >
                    <ListItem>
                      Midwest USA & Eastern Canada
                      <Link href="tel:+17343687528">(734) 368-7528</Link>
                    </ListItem>
                    <ListItem>
                      Southeast USA
                      <Link href="tel:+17068702202">(706) 870-2202</Link>
                    </ListItem>
                    <ListItem>
                      Southern USA
                      <Link href="tel:+12813892496">(281) 389-2496</Link>
                    </ListItem>
                    <ListItem>
                      Gulf USA |{" "}
                      <Link href="tel:+18329486580">(832) 948-6580</Link>
                    </ListItem>
                    <ListItem>
                      Southwest USA
                      <Link href="tel:+14325531543">(432) 553-1543</Link>
                    </ListItem>
                    <ListItem>
                      West Coast USA
                      <Link href="tel:+12137003866">(213) 700-3866</Link>
                    </ListItem>
                    <ListItem>
                      Northwest USA & Western Canada
                      <Link href="tel:+12086189876">(208) 618-9876</Link>
                    </ListItem>
                  </ul>
                </Panel>
                <Panel title="International">
                  <ul
                    className={css({
                      width: "auto",
                      paddingLeft: 0,
                      paddingRight: 0,
                    })}
                  >
                    <ListItem>
                      UK, Europe & North Africa
                      <Link href="tel:+330689584129">
                        {" "}
                        +33 (0) 6 89 58 41 29
                      </Link>
                    </ListItem>
                    <ListItem>
                      Middle East & India
                      <Link href="tel:+96892844986">+968 92844986</Link>
                    </ListItem>
                    <ListItem>
                      France & Belgium
                      <Link href="tel:+330673835224">
                        +33 (0) 6 73 83 52 24
                      </Link>
                    </ListItem>
                    <ListItem>
                      South America, Asia & Australia
                      <Link href="tel:12813892496">+1 (281) 389-2496</Link>
                    </ListItem>
                  </ul>
                </Panel>
              </Accordion>
            </StyledBody>
            <StyledAction>
              <Button $as="a" href="#" kind={KIND.primary}>
                Get In Touch
              </Button>
            </StyledAction>
          </Card>
        </Cell>
      </Grid>
    </Layout>
  )
}
