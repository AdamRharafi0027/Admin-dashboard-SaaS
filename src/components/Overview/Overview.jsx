import React from 'react'
import HeaderOverview from './HeaderOverview'
import OverviewBody from './OverviewBody/OverviewBody'

const Overview = () => {
  return (
    <>
        <section className=' flex-col w-340 absolute top-0 right-20'>
          <HeaderOverview />
          <OverviewBody />
        </section>
    
    </>
  )
}

export default Overview