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

  const key = import.meta.env.VITE_SYVRE_API_KEY;
  console.log("key", key);

  return (
    <div className="bg-white w-screen min-h-screen text-black p-15 flex flex-col gap-20">
      <ProductCard items={dishes} setCreatingCustom={setCreatingCustom} title={t("chooseDish")} />
      <ProductCard items={salads} setCreatingCustom={setCreatingCustom} title={t("chooseSalad")} />
      <ProductCard
        items={drinks}
        setCreatingCustom={setCreatingCustom}
        title={t("chooseDrink")}
        hideDescription={true}
      />
    </div>
  );
};

export default ChooseOrder;
