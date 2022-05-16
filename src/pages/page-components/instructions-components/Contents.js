import React from "react"
import ToC from '../table-of-contents/components/toc'

//  not using modules for grid, looks like pseudo celector doesn't work with modules
// import grid from './css/layout/Grid.module.scss';

export default function Contents() {
  return (
    <>
      <section>
        <ToC/>
      </section>
    </>
  )
}
