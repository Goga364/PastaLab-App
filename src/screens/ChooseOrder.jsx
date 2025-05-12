import dishes from "../data/dishes";
import salads from "../data/salads";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import drinks from "../data/drinks";
import ProductCard from "../components/ProductCard";

const ChooseOrder = ({ setCreatingCustom }) => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-white w-screen min-h-screen flex flex-row justify-between">
      <div className="w-3/4 p-15 flex flex-col gap-20 text-black">
        <ProductCard items={dishes} setCreatingCustom={setCreatingCustom} title={t("chooseDish")} />
        <ProductCard items={salads} setCreatingCustom={setCreatingCustom} title={t("chooseSalad")} />
        <ProductCard
          items={drinks}
          setCreatingCustom={setCreatingCustom}
          title={t("chooseDrink")}
          hideDescription={true}
        />
      </div>
    </div>
  );
};

export default ChooseOrder;
