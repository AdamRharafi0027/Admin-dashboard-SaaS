import React from 'react'
import SalesChart from './SalesChart'
import StockChart from './StockChart'
import CategoryChart from './CategoryChart'

const ProductsCharts = () => {
  return (
    <>
      <div className='w-full px-20 flex items-center flex-col gap-10'>
        <SalesChart />
        <StockChart />
        <CategoryChart />
      </div>
    </>
  )
}

export default ProductsCharts