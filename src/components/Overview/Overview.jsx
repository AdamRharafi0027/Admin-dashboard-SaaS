import React from 'react'
import HeaderOverview from './HeaderOverview'
import OverviewBody from './OverviewBody/OverviewBody'

const Overview = () => {
  return (
    <>
        <section className=' flex-col w-340 absolute top-10 right-20'>
          <HeaderOverview>
            Overiew
          </HeaderOverview>
          <OverviewBody />
        </section>
    
    </>
  )
}

export default Overview

// import React from "react";
// import HeaderOverview from "./HeaderOverview";
// import OverviewBody from "./OverviewBody/OverviewBody";

// const Overview = () => {
//   return (
//     <section className="flex flex-col w-full max-w-[1400px] mx-auto p-6 md:p-10 relative">
//       {/* Header Section */}
//       <HeaderOverview />

//       {/* Body Section */}
//       <OverviewBody />
//     </section>
//   );
// };

// export default Overview;
