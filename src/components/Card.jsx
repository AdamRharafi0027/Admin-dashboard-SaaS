const Card = ({ title, total }) => {
  return (
    <>
      <div className="card bg-white w-50 px-5 flex flex-col gap-2 justify-between py-2 rounded-md">
        <h3 className="font-bold">{title}</h3>
        <h2 className="text-2xl text-end font-bold">{total}</h2>
      </div>
    </>
  );
};

export default Card;
