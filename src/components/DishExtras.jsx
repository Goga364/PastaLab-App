import { useEffect, useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import Lottie from "lottie-react";
import tickAnimation from "../assets/animations/tickAnimation.json";
import PriceTag from "./PriceTag";
import { CartContext } from "../context/CartContext";

const DishExtras = ({ selectedDish, onClose }) => {
  const { t } = useTranslation();
  const [selectedExtras, setSelectedExtras] = useState([]);
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    if (selectedDish) {
      document.body.style.overflow = "hidden";
    }
    setSelectedExtras([]);
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedDish]);

  const addExtraIngredient = (extra) => {
    const { _image, ...ingredientInfo } = extra;
    setSelectedExtras((prev) => {
      const exists = prev.some((item) => item.productId === extra.productId);
      return exists
        ? prev.filter((item) => item.productId !== extra.productId)
        : [...prev, { ...ingredientInfo, amount: 1 }];
    });
  };

  const handleConfirm = () => {
    const currentModifierIds = selectedExtras.map((mod) => mod.productId);

    const existingItemIndex = cart.findIndex((item) => {
      if (item.productId !== selectedDish.productId) return false;
      if (item.modifiers.length !== currentModifierIds.length) return false;

      const itemModifierIds = item.modifiers.map((mod) => String(mod.productId));
      return currentModifierIds.every((id) => itemModifierIds.includes(id));
    });

    setCart((prev) => {
      if (existingItemIndex !== -1) {
        const updated = [...prev];
        updated[existingItemIndex] = {
          ...updated[existingItemIndex],
          amount: updated[existingItemIndex].amount + 1,
        };
        return updated;
      }

      return [
        ...prev,
        {
          amount: 1,
          comment: "",
          modifiers: selectedExtras,
          price: selectedDish.price,
          productId: selectedDish.productId,
          cartId: window.crypto.randomUUID(),
          type: "Product",
          name: selectedDish.name,
        },
      ];
    });
    onClose();
  };

  const total = selectedDish?.price + selectedExtras?.reduce((acc, item) => acc + item.price, 0);

  return (
    selectedDish && (
      <div className="bg-[#00000099] fixed inset-0 flex items-center justify-center z-50" onClick={onClose}>
        <div
          className="flex flex-col bg-white rounded-2xl shadow-xl p-8 min-h-[450px] max-h-[90vh] w-[860px] overflow-y-auto relative justify-between"
          onClick={(e) => e.stopPropagation()}
        >
          <h1 className="text-4xl font-bold pb-12">{t("additionalIngredients")}</h1>

          <div className="flex flex-wrap gap-6 justify-start">
            {selectedDish.extras.map((extraItem) => {
              const isSelected = selectedExtras.some((item) => item.productId === extraItem.productId);
              return (
                <div
                  className={`px-3 h-45 w-45 rounded-4xl flex justify-center flex-col items-center relative shadow-[0px_0px_64px_0px_#E7EAF3] border ${
                    isSelected ? "border-[#96dbf5] bg-[#edfcfe]" : "border-white"
                  }`}
                  onClick={() => addExtraIngredient(extraItem)}
                  key={extraItem.productId}
                >
                  {isSelected && (
                    <div className="w-[20px] h-[20px] absolute bottom-2 left-1/2 -translate-x-1/2">
                      <Lottie animationData={tickAnimation} loop={false} />
                    </div>
                  )}
                  <img src={extraItem.image} className="w-28 h-28 object-contain pt-2.5 shrink-0" />
                  <div className="h-[100%] pt-3">
                    <h1 className="text-sm h-10">{t(extraItem.name)}</h1>
                    <PriceTag price={extraItem.price} />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex justify-between w-full">
            <h1 className="text-[#1C305E] text-2xl my-auto">Total ₾{total.toFixed(2) ?? 0}</h1>
            <div className="gap-4 flex">
              <button onClick={onClose} className="px-6 py-2 rounded-xl bg-[#11235A] text-[white]">
                Cancel
              </button>
              <button onClick={handleConfirm} className="px-6 py-2 rounded-xl bg-[#FFB84C] text-[#11235A]">
                Add to Order
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default DishExtras;
