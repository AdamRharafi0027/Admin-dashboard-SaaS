

const Container = ({children, classname}) => {
  return (
    <>
      <div className={`container bg-[#F2F2F2] rounded-lg py-10 px-10 mt-10 ${classname}`}>{children}</div>
    </>
  );
};

export default Container;
