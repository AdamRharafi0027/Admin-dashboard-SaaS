import React from 'react'
import HeaderOverview from './HeaderOverview'
import OverviewBody from './OverviewBody/OverviewBody'

const Overview = () => {
  return (
    <>
        <section className=' flex-col w-340'>
          <HeaderOverview />
          <OverviewBody />
        </section>
    
    </>
  )
}

export default Overview