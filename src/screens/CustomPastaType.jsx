import pastaType from "../data/pasta-type";
import Lottie from "lottie-react";
import tickAnimation from "../assets/animations/tickAnimation.json";
import PriceTag from "../components/PriceTag";
const CustomPastaType = ({ value, setValue }) => {
  return (
    <div className="flex gap-10 flex-col">
      <h1 className="py-4 text-start text-5xl">აირჩიე პასტა</h1>
      <div className="flex flex-row flex-wrap justify-start gap-10">
        {Object.keys(pastaType).map((item) => {
          const pasta = pastaType[item];
          const isSelected = value?.productId === pasta.productId;
          return (
            <div
              className={`px-3 pb-3  h-91 w-55  rounded-4xl flex justify-center flex-col items-center relative shadow-[0px_0px_64px_0px_#E7EAF3] border  ${
                isSelected ? "border-[#96dbf5] bg-[#edfcfe]" : "border-white"
              }`}
              onClick={() =>
                setValue({ productId: pasta.productId, price: pasta.price })
              }
            >
              {isSelected && (
                <div className="w-[30px] h-[30px] absolute bottom-2 left-1/2 -translate-x-1/2">
                  <Lottie animationData={tickAnimation} loop={false} />
                </div>
              )}
              <img
                src={pasta.image}
                className="w-40 h-40 object-contain pt-2.5 shrink-0"
              />
              <div className="h-[100%] pt-3">
                <h1 className="text-[18px] h-10">{item}</h1>
                <div className="mt-2 pb-4 text-sm text-[#808080]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </div>
                <PriceTag price={pasta?.price} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomPastaType;
