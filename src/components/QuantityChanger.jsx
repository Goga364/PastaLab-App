const QuantityChanger = ({ setQuantity, currentQuantity, productId }) => {
  if (!currentQuantity) return null;
  return (
    <div className="bg-[#1C305E] w- text-md flex items-center rounded-2xl text-md w-25 m-auto justify-between px-3 py-1 text-white font-bold">
      <span
        onClick={(e) => {
          if (productId) {
            e.stopPropagation();
            setQuantity(productId, currentQuantity - 1);
          }
        }}
      >
        {productId && "-"}
      </span>
      <div>{currentQuantity}</div>
      <span
        onClick={() => {
          if (productId) {
            setQuantity(productId, currentQuantity + 1);
          }
        }}
      >
        {productId && "+"}
      </span>
    </div>
  );
};

export default QuantityChanger;
