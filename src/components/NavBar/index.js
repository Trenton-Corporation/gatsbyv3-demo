import * as React from "react"
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList as List,
  StyledNavigationItem as Item,
} from "baseui/header-navigation"
import { StyledLink as Link } from "baseui/link"
import { StatefulSelect as Search, TYPE } from "baseui/select"
import { RadioGroup, Radio, ALIGN as ALIGNRadioButtons } from "baseui/radio"

export default function NavBar() {
  const [value, setValue] = React.useState("1")

  const options = {
    options: [
      { id: "Customer service", color: "#000000" },
      { id: "Sales", color: "#000000" },
      { id: "Wax-Tape® Brand Anticorrosion Wraps", color: "#F0F8FF" },
      { id: "Primers & Other Products", color: "#FAEBD7" },
      { id: "Innercoat® Hot-Applied Wax Coating System", color: "#00FFFF" },
      { id: "Outerwraps", color: "#7FFFD4" },
      { id: "Casing Filling", color: "#F0FFFF" },
      { id: "Patch-Pad® Exothermic Weld Protector", color: "#F5F5DC" },
      { id: "Material Requirements Calculator", color: "#FFE4C4" },
    ],
    labelKey: "id",
    valueKey: "color",
    placeholder: "Search",
    maxDropdownHeight: "300px",
  }

  return (
    <HeaderNavigation>
      <List $align={ALIGN.left}>
        <Item>Trenton Corporation</Item>
      </List>
      <List $align={ALIGN.left}>
        <Item>
          <RadioGroup
            value={value}
            onChange={e => setValue(e.currentTarget.value)}
            name="lang"
            align={ALIGNRadioButtons.horizontal}
          >
            <Radio value="1">English</Radio>
            <Radio value="2">Spanish</Radio>
            <Radio value="3">French</Radio>
          </RadioGroup>
        </Item>
      </List>
      <List $align={ALIGN.center} />
      <List $align={ALIGN.right}>
        <Item>
          <Link href="#">Company</Link>
        </Item>

        <Item>
          <Link href="#">Products</Link>
        </Item>

        <Item>
          <Link href="#">Info Library</Link>
        </Item>

        <Item>
          <Link href="#">Contact</Link>
        </Item>
      </List>
      <List $align={ALIGN.center}>
        <Item>
          <Link href="tel:+17344243600">(734) 424-3600</Link>
        </Item>
      </List>
      <List $align={ALIGN.right}>
        <Search
          {...options}
          type={TYPE.search}
          getOptionLabel={props => props.option.id || null}
          onChange={() => {}}
        />
      </List>
    </HeaderNavigation>
  )
}
