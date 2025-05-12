import Lottie from "lottie-react";
import tickAnimation from "../assets/animations/tickAnimation.json";
import PriceTag from "../components/PriceTag";
import { useTranslation } from "react-i18next";
import AnimationWrapper from "../components/AnimationWrapper";

const CustomPastaIngredients = ({ options, value, setValue }) => {
  const { t } = useTranslation();
  const handleClickIngredient = (ingredient) => {
    if (value.find((item) => item.productId == ingredient.productId)) {
      return setValue(value.filter((item) => item.productId !== ingredient.productId));
    }
    return setValue([...value, ingredient]);
  };

  return (
    <div className="flex gap-10 flex-col">
      <h1 className="py-4 text-start text-5xl">{t("additionalIngredients")}</h1>
      <div className="flex flex-row flex-wrap gap-10">
        {options.map((ingredient) => {
          const isSelected = value.find((item) => item.productId === ingredient.productId);
          return (
            <AnimationWrapper key={ingredient.productId}>
              <div
                className={`px-3 pb-3  h-60 w-55  rounded-4xl flex justify-center flex-col items-center relative shadow-[0px_0px_64px_0px_#E7EAF3] border  ${
                  isSelected ? "border-[#96dbf5] bg-[#edfcfe]" : "border-white"
                }`}
                onClick={() =>
                  handleClickIngredient({
                    productId: ingredient.productId,
                    price: ingredient.price,
                    name: ingredient.name,
                  })
                }
              >
                {isSelected && (
                  <div className="w-[30px] h-[30px] absolute bottom-2 left-1/2 -translate-x-1/2">
                    <Lottie animationData={tickAnimation} loop={false} />
                  </div>
                )}
                <img src={ingredient.image} className="w-40 h-40 object-contain pt-2.5 shrink-0" />
                <div className="h-[100%] pt-3">
                  <h1 className="text-[18px] h-10">{t(ingredient.name)}</h1>
                  {/* <div className="mt-2 pb-4 text-sm text-[#808080]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </div> */}
                  <PriceTag price={ingredient?.price} />
                </div>
              </div>
            </AnimationWrapper>
          );
        })}
      </div>
    </div>
  );
};

export default CustomPastaIngredients;
