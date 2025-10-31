const VisitsStats = () => {
  return (
    <>
        <div className="card bg-[#5C8AEF] rounded-lg mr-10 px-10 py-6 w-100">
            <h1 className="text-3xl font-bold">Stats Overview</h1>
            <p className="text-[#475569] mb-5">information about store visits</p>
            <div className=" text-white flex flex-col gap-8 pb-10">
                <div>
                   <div className="flex justify-between items-center">
                    <h3 className="text-2xl mb-3">Men</h3>
                    <h3 className="text-2xl mb-3">65%</h3>
                   </div>
                    <div className="progresse-bar rounded-full w-full after:w-[65%] "></div>
                </div>
                  <div>
                   <div  className="flex justify-between items-center">
                    <h3 className="text-2xl mb-3">Women</h3>
                    <h3 className="text-2xl mb-3">44%</h3>
                   </div>
                    <div className="progresse-bar rounded-full w-full  after:w-[44%]"></div>
                </div>
                  <div>
                   <div  className="flex justify-between items-center">
                    <h3 className="text-2xl mb-3">Kids</h3>
                    <h3 className="text-2xl mb-3">23%</h3>
                   </div>
                    <div className="progresse-bar rounded-full w-full  after:w-[23%]"></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default VisitsStats