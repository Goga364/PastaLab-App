import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useTranslation } from "react-i18next";
import { calculateCustom, calculateTotal } from "../utils/price";
import Lottie from "lottie-react";
import animation from "../assets/animations/ghost.json";
import { AnimatePresence, motion as Motion } from "framer-motion";

export default function OrderSummary({ handleSubmit }) {
  const { cart, setCart } = useContext(CartContext);
  const { t } = useTranslation();

  const [showCartUI, setShowCartUI] = useState(false);
  const [hideAnimation, setHideAnimation] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + item.amount, 0);
  const totalPrice = calculateTotal(cart);

  useEffect(() => {
    if (cart.length > 0) {
      setHideAnimation(true);
      setTimeout(() => setShowCartUI(true), 300);
    } else {
      setShowCartUI(false);
      setHideAnimation(false);
    }
  }, [cart]);

  const handleClick = (actionType, id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.cartId !== id) return item;
          if (actionType === "increment") return { ...item, amount: item.amount + 1 };
          if (actionType === "decrement") return { ...item, amount: Math.max(item.amount - 1, 0) };
          return item;
        })
        .filter((item) => item.amount > 0)
    );
  };

  return (
    <AnimatePresence>
      <Motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "100%", opacity: 0 }}
        transition={{ type: "spring", stiffness: 150, damping: 30 }}
        className="w-1/4 min-w-[330px] h-[504px] max-h-[80vh] bg-white fixed top-1/2 right-5 transform -translate-y-1/2 rounded-2xl shadow-xl border border-gray-200 flex flex-col overflow-hidden"
      >
        <div className="py-4 border-b border-gray-200 sticky top-0 z-10">
          <h2 className="text-2xl font-bold text-[#11235A]">Your Order</h2>
        </div>

        <div className="overflow-y-auto p-4 flex-1">
          {!showCartUI && (
            <div
              className={`flex flex-col items-center justify-evenly h-full text-center text-gray-500 px-4 transition-opacity duration-300 ${
                hideAnimation ? "opacity-0" : "opacity-100"
              }`}
            >
              <Lottie animationData={animation} loop className="w-60 h-60 my-2" />
              <div className="pb-3">
                <p className="text-lg font-medium text-[#11235A] mb-1">Your order is empty.</p>
                <p className="text-sm text-gray-500">Once you add some products, you'll see them here!</p>
              </div>
            </div>
          )}

          {showCartUI && (
            <div className="transition-opacity duration-300 opacity-100">
              {cart.map((item) => {
                const price = (item.modifiers?.length ? calculateCustom(item) : calculateTotal([item])).toFixed(2);

                return (
                  <div key={item.cartId} className="mb-6 pb-4 border-b border-gray-100 last:border-b-0">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <p className="font-semibold text-md text-[#11235A] text-start">
                          {item.amount}x {t(item.name)}
                        </p>
                        {item?.modifiers?.length > 0 && (
                          <ul className="text-sm text-gray-500 mt-1 list-disc list-inside">
                            {item.modifiers.map((mod, i) => (
                              <li key={mod.productId + item.cartId} className={`text-start ${i !== 0 && "pl-2"}`}>
                                {t(mod.name)}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          className="w-7 h-7 rounded-full bg-gray-100 text-gray-700 font-bold hover:bg-gray-200"
                          onClick={() => handleClick("decrement", item.cartId)}
                        >
                          −
                        </button>
                        <span className="text-sm font-extrabold text-[#11235A]">₾{price}</span>
                        <button
                          className="w-7 h-7 rounded-full bg-gray-100 text-gray-700 font-bold hover:bg-gray-200"
                          onClick={() => handleClick("increment", item.cartId)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {cart.length > 0 && showCartUI && (
          <div className="px-6 py-4 border-t border-gray-200 sticky bottom-0 bg-white z-10">
            <div
              className="w-full bg-[#FFB84C] text-[#11235A] text-lg py-3 rounded-full transition font-extrabold"
              onClick={handleSubmit}
            >
              Order {totalItems} for ₾{totalPrice.toFixed(2)}
            </div>
          </div>
        )}
      </Motion.div>
    </AnimatePresence>
  );
}
