import React from "react"
import { useStyletron } from "baseui"

export default function Home() {
  const [css, theme] = useStyletron()
  console.log(theme);
  return (
    <div
      className={css({
        fontSize: "20px",
        color: theme.colors.primary,
      })}
    >
      Hello world!
    </div>
  )
}
