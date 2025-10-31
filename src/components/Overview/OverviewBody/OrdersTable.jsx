import { CircleUserRound } from 'lucide-react'
import exampleImage from "../../../../public/vite.svg"

const OrdersTable = () => {
  return (
    <>
        <section className='scale-95 w-200'>
            <h3 className='text-[#475569] mb-5 text-2xl'>Latest Orders</h3>
            <table className='flex flex-col gap-5 overflow-y-scroll h-100 '>
                <tr className='bg-[#F1F5F9] rounded-lg text-[#475569] flex px-5 py-5 gap-25 items-center mr-9 '>
                    <th>Costomers</th>
                    <th>Order N</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Status</th>
                </tr>
                <tr className='bg-[#F9F9F9] rounded-lg flex px-5 py-5 gap-25 items-center mr-9 '>
                    <td className='flex items-center gap-2'>
                         <CircleUserRound size={40} />
                         <h3>username</h3>
                    </td>
                    <td>#1</td>
                    <td className='flex items-center gap-2'>
                        <img src={exampleImage} alt="" />
                        <h3>product</h3>
                    </td>
                    <td>$320</td>
                    <td><button className='bg-[#22C55E] text-white p-2 rounded-md cursor-pointer'>Delivered</button></td>
                </tr>
                <tr className='bg-[#F9F9F9] rounded-lg flex px-5 py-5 gap-25 items-center mr-9 '>
                    <td className='flex items-center gap-2'>
                         <CircleUserRound size={40} />
                         <h3>username</h3>
                    </td>
                    <td>#1</td>
                    <td className='flex items-center gap-2'>
                        <img src={exampleImage} alt="" />
                        <h3>product</h3>
                    </td>
                    <td>$320</td>
                    <td><button className='bg-[#22C55E] text-white p-2 rounded-md cursor-pointer'>Delivered</button></td>
                </tr>
                <tr className='bg-[#F9F9F9] rounded-lg flex px-5 py-5 gap-25 items-center mr-9 '>
                    <td className='flex items-center gap-2'>
                         <CircleUserRound size={40} />
                         <h3>username</h3>
                    </td>
                    <td>#1</td>
                    <td className='flex items-center gap-2'>
                        <img src={exampleImage} alt="" />
                        <h3>product</h3>
                    </td>
                    <td>$320</td>
                    <td><button className='bg-[#22C55E] text-white p-2 rounded-md cursor-pointer'>Delivered</button></td>
                </tr>
                <tr className='bg-[#F9F9F9] rounded-lg flex px-5 py-5 gap-25 items-center mr-9 '>
                    <td className='flex items-center gap-2'>
                         <CircleUserRound size={40} />
                         <h3>username</h3>
                    </td>
                    <td>#1</td>
                    <td className='flex items-center gap-2'>
                        <img src={exampleImage} alt="" />
                        <h3>product</h3>
                    </td>
                    <td>$320</td>
                    <td><button className='bg-[#22C55E] text-white p-2 rounded-md cursor-pointer'>Delivered</button></td>
                </tr>
            </table>
        </section>
    </>
  )
}

export default OrdersTable