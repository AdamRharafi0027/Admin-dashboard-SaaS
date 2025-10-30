const PrimaryButton = ({children, classname}) => {
  return (
    <button className={`bg-[#2563EB] text-white rounded-sm flex items-center justify-center gap-3  text-2xl m-auto mt-13 relative cursor-pointer ${classname}`}>{children}</button>
  )
}

export default PrimaryButton