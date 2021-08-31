import React from "react"
import { Grid, Cell } from "baseui/layout-grid"
import { Card, StyledBody, StyledAction } from "baseui/card"
import { StyledLink as Link } from "baseui/link"
import { Button, KIND } from "baseui/button"
import { H2, H3 } from "baseui/typography"

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
              <H2>Quick Links</H2>
              <H3>How can we help?</H3>
              Wax-Tape® Brand Anticorrosion Wraps Primers & Other Products
              Innercoat® Hot-Applied Wax Coating System Outerwraps Casing
              Filling Patch-Pad® Exothermic Weld Protector
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
              <H2>Contact Trenton</H2>
              Corporate Headquarters Ann Arbor, Michigan | (734) 424-3600 North
              America Midwest USA & Eastern Canada | (734) 368-7528 Southeast
              USA | (706) 870-2202 Southern USA | (281) 389-2496 Gulf USA |
              (832) 948-6580 Southwest USA | (432) 553-1543 West Coast USA |
              (213) 700-3866 Northwest USA & Western Canada | (208) 618-9876
              International UK, Europe & North Africa | +33 (0) 6 89 58 41 29
              Middle East & India | +968 92844986 (available via WhatsApp)
              France & Belgium | +33 (0) 6 73 83 52 24 South America, Asia &
              Australia | +1 (281) 389-2496 (available via WhatsApp)
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
