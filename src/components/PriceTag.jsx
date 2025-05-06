const PriceTag = ({ price }) => {
  if (!price) return null;
  return (
    <div className="h-10 min-w-10 top-[-10px] absolute right-[-15px] bg-[#FBB14A] text-[#1C305E] rounded-full p-2 font-extrabold">
      ₾{price}
    </div>
  );
};

export default PriceTag;
