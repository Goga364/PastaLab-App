const QuantityChanger = ({ setQuantity, currentQuantity, productId }) => {
  if (!currentQuantity) return <div className="h-[32px] w-full" />;
  return (
    <div
      className="bg-[#1C305E] text-md flex items-center rounded-2xl text-md w-max min-w-25 m-auto justify-between min-h-[32px] h-max text-white font-bold"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
      }}
    >
      <button
        onClick={(e) => {
          if (productId) {
            e.stopPropagation();
            setQuantity(productId, currentQuantity - 1);
          }
        }}
        className="pr-2 pl-3 py-1"
      >
        {productId && "-"}
      </button>
      <div>{currentQuantity}</div>
      <button
        onClick={() => {
          if (productId) {
            setQuantity(productId, currentQuantity + 1);
          }
        }}
        className="pl-2 pr-3 py-1"
      >
        {productId && "+"}
      </button>
    </div>
  );
};

export default QuantityChanger;
