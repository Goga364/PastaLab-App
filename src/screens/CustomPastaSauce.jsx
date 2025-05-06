import pastaSauce from "../data/sauce";
import tickAnimation from "../assets/animations/tickAnimation.json";
import Lottie from "lottie-react";
import PriceTag from "../components/PriceTag";

const CustomPastaSauce = ({ pastaType, value, setValue }) => {
  return (
    <div className="flex gap-10 flex-col">
      <h1 className="py-4 text-start text-5xl">აირჩიე სოუსი</h1>
      <div className="flex flex-row flex-wrap gap-10">
        {Object.keys(pastaSauce).map((item) => {
          const sauce = pastaSauce[item];
          const isSelected = value?.productId === sauce.productId;
          if (sauce.forPasta?.includes(pastaType.productId))
            return (
              <div
                className={`px-3 pb-3  h-91 w-55  rounded-4xl flex justify-center flex-col items-center relative shadow-[0px_0px_64px_0px_#E7EAF3] border  ${
                  isSelected ? "border-[#96dbf5] bg-[#edfcfe]" : "border-white"
                }`}
                onClick={() => setValue({ productId: sauce.productId, price: sauce.price })}
              >
                {isSelected && (
                  <div className="w-[30px] h-[30px] absolute bottom-2 left-1/2 -translate-x-1/2">
                    <Lottie animationData={tickAnimation} loop={false} />
                  </div>
                )}
                <img src={sauce.image} className="w-40 h-40 object-contain pt-2.5 shrink-0" />
                <div className="h-[100%] pt-3">
                  <h1 className="text-[18px] h-10">{sauce.name}</h1>
                  <div className="mt-2 pb-4 text-sm text-[#808080]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                  </div>
                  <PriceTag price={sauce?.price} />
                </div>
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default CustomPastaSauce;
