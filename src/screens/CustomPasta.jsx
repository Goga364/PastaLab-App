import { useState } from "react";
import CustomPastaType from "./CustomPastaType";
import CustomPastaSauce from "./CustomPastaSauce";
import CustomPastaIngredients from "./CustomPastaIngredients";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";
const CustomPasta = ({ setCreatingCustom }) => {
  const [selectedPastaType, setSelectedPastaType] = useState();
  const [selectedPastaSauce, setSelectedPastaSauce] = useState();
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const { cart, setCart } = useContext(CartContext);

  const total =
    selectedPastaType?.price +
    selectedPastaSauce?.price +
    selectedIngredients?.reduce((acc, item) => acc + item.price, 0);

  const handleAddToCart = () => {
    const modifiers = [selectedPastaSauce, ...selectedIngredients].map((item) => ({
      amount: 1,
      price: item.price,
      productId: item.productId,
    }));

    setCart([
      ...cart,
      {
        amount: 1,
        comment: "",
        modifiers: modifiers,
        price: 4.0,
        productId: selectedPastaType.productId,
        type: "Product",
        custom: true,
        customOrderId: Date.now(),
      },
    ]);
    setCreatingCustom(false);
  };

  return (
    <div className="bg-white w-screen min-h-screen text-black p-15 gap-10 flex flex-col">
      <CustomPastaType value={selectedPastaType} setValue={setSelectedPastaType} />
      {selectedPastaType && (
        <CustomPastaSauce pastaType={selectedPastaType} value={selectedPastaSauce} setValue={setSelectedPastaSauce} />
      )}
      {selectedPastaSauce && (
        <CustomPastaIngredients
          pastaType={selectedPastaType}
          pastaSauce={selectedPastaSauce}
          value={selectedIngredients}
          setValue={setSelectedIngredients}
        />
      )}
      {selectedPastaSauce && (
        <div className="flex gap-10 text-2xl items-center">
          <button
            className="text-white bg-[#1C305E] px-10 py-5 rounded-[100px] text-2xl w-60"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
          <h1>Total: {total ?? 0}</h1>
        </div>
      )}
    </div>
  );
};

export default CustomPasta;
