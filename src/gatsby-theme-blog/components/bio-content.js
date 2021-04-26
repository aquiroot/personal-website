import React from "react"
import { Themed } from "theme-ui"

export default function Bio() {
  return (
    <>
      Post realizado por
      <Themed.a
        href="https://www.instagram.com/aquiroot/"
        rel="noreferrer"
        target="_blank"
      >
        Damian Colaneri
      </Themed.a>
      {` `}
      con todo su ❤️.
      <br />
      Enviame un mensaje a mi instagram contandome si te gusto.
    </>
  )
}
