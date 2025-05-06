import { useTranslation } from "react-i18next";
import logoImage from "../assets/pasta_lab_bg.png";
import { useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
const OrderType = ({ setOrderType }) => {
  const { t } = useTranslation();
  const { setCart } = useContext(CartContext);

  useEffect(() => {
    setCart([]);
  }, [setCart]);

  return (
    <div className="bg-[#1C305E] w-full h-full flex justify-center flex-col items-center gap-28">
      <img src={logoImage} className=" max-w-[800px]" />
      <div className="flex gap-8 text-black text-2xl">
        <button
          className="bg-[#FBB14A] text-3xl w-[220px] h-[80px] "
          onClick={() => setOrderType("dineIn")}
        >
          {t("dineIn")}
        </button>
        <button
          className="bg-[#FBB14A] text-3xl  w-[220px] h-[80px]"
          onClick={() => setOrderType("toGo")}
        >
          {t("takeaway")}
        </button>
      </div>
    </div>
  );
};

export default OrderType;
