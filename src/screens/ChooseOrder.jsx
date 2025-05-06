import dishes from "../data/dishes";
import salads from "../data/salads";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import QuantityChanger from "../components/QuantityChanger";
import PriceTag from "../components/PriceTag";
import drinks from "../data/drinks";
const ChooseOrder = ({ setCreatingCustom }) => {
  const { cart, setCart } = useContext(CartContext);
  const { t } = useTranslation();

  const handleClick = (pasta) => {
    if (!pasta.productId) return setCreatingCustom(true);

    const cartItem = cart.find((item) => item.productId === pasta.productId);

    if (cartItem) return setQuantity(pasta.productId, cartItem.amount + 1);

    setCart((prev) => [
      ...prev,
      {
        amount: 1,
        comment: "",
        price: pasta.price,
        productId: pasta.productId,
        type: "Product",
      },
    ]);
  };

  const setQuantity = (id, n) => {
    if (n <= 0) {
      setCart((prev) => prev.filter((item) => item.productId !== id));
    } else {
      setCart((prev) => prev.map((item) => (item.productId === id ? { ...item, amount: n } : item)));
    }
  };

  return (
    <div className="bg-white w-screen min-h-screen text-black p-15">
      <div className="flex gap-10 flex-col">
        <h1 className="py-4 text-start text-5xl">{t("chooseDish")}</h1>
        <div className="flex flex-row flex-wrap justify-start gap-10">
          {dishes.map((pasta) => {
            let quantity;

            if (pasta.productId === "") {
              const amount = cart.filter((item) => item.custom).length;
              quantity = amount;
            } else {
              quantity = cart.find((item) => item.productId === pasta.productId)?.amount;
            }
            return (
              <div
                className={`px-3 pb-3  h-91 w-55  rounded-4xl flex justify-center flex-col items-center relative shadow-[0px_0px_64px_0px_#E7EAF3] border  ${
                  quantity ? "border-[#96dbf5] bg-[#edfcfe]" : "border-white"
                }`}
                onClick={() => handleClick(pasta)}
              >
                <img src={pasta.image} className="w-40 h-40 object-contain pt-2.5  shrink-0" />
                <div className="h-[100%] pt-3">
                  <h1 className="text-[18px] h-10">{pasta.name}</h1>
                  <div className="mt-2 pb-4 text-sm text-[#808080]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                  </div>
                  <PriceTag price={pasta.price} />
                  <QuantityChanger setQuantity={setQuantity} currentQuantity={quantity} productId={pasta.productId} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex gap-10 flex-col">
        <h1 className="py-4 text-start text-5xl">Choose Salad</h1>
        <div className="flex flex-row flex-wrap justify-start gap-10">
          {salads.map((salad) => {
            const quantity = cart.find((item) => item.productId === salad.productId)?.amount;

            return (
              <div
                className={`px-3 pb-3  h-91 w-55  rounded-4xl flex justify-center flex-col items-center relative shadow-[0px_0px_64px_0px_#E7EAF3] border  ${
                  quantity ? "border-[#96dbf5] bg-[#edfcfe]" : "border-white"
                }`}
                onClick={() => handleClick(salad)}
              >
                <img src={salad.image} className="w-40 h-40 object-contain pt-2.5  shrink-0" />
                <div className="h-[100%] pt-3">
                  <h1 className="text-[18px] h-10">{salad.name}</h1>
                  <div className="mt-2 pb-4 text-sm text-[#808080]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                  </div>
                  <PriceTag price={salad.price} />
                  <QuantityChanger setQuantity={setQuantity} currentQuantity={quantity} productId={salad.productId} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex gap-10 flex-col">
        <h1 className="py-4 text-start text-5xl">Choose Drink</h1>
        <div className="flex flex-row flex-wrap justify-start gap-10">
          {drinks.map((drink) => {
            const quantity = cart.find((item) => item.productId === drink.productId)?.amount;

            return (
              <div
                className={`px-3 pb-3  h-91 w-55  rounded-4xl flex justify-center flex-col items-center relative shadow-[0px_0px_64px_0px_#E7EAF3] border  ${
                  quantity ? "border-[#96dbf5] bg-[#edfcfe]" : "border-white"
                }`}
                onClick={() => handleClick(drink)}
              >
                <img src={drink.image} className="w-40 h-40 object-contain pt-2.5  shrink-0" />
                <div className="h-[100%] pt-3">
                  <h1 className="text-[18px] h-10">{drink.name}</h1>
                  <div className="mt-2 pb-4 text-sm text-[#808080]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                  </div>
                  <PriceTag price={drink.price} />
                  <QuantityChanger setQuantity={setQuantity} currentQuantity={quantity} productId={drink.productId} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChooseOrder;
