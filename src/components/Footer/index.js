import * as React from "react"
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList as List,
  StyledNavigationItem as Item,
} from "baseui/header-navigation"
import { StyledLink as Link } from "baseui/link"

export default function NavBar() {
  return (
    <HeaderNavigation>
      <List $align={ALIGN.left}>
        <Item>
          <Link href="#">Contact</Link>
        </Item>
        <Item>
          <Link href="#">Sitemap</Link>
        </Item>
        <Item>
          <Link href="#">Privacy Policy</Link>
        </Item>
      </List>
      <List $align={ALIGN.center}>
        <Item>
          All content © 2021 Trenton Corporation. All rights reserved. Call{" "}
          <Link href="tel:+17344243600">(734) 424-3600</Link>
        </Item>
      </List>
      <List $align={ALIGN.right}>
        <Item>
          ISO Certified{" "}
          <img
            src="https://trentoncorp.com/wp-content/uploads/2016/01/iso-logo.gif"
            alt=""
          />{" "}
        </Item>
      </List>
    </HeaderNavigation>
  )
}
