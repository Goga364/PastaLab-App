import { useContext } from "react";
import handleOrder from "../utils/handleOrder";
import { CartContext } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

const Footer = ({ show }) => {
  const { cart } = useContext(CartContext);

  const handleConfirm = async () => {
    await handleOrder(cart);
  };
  if (!show) return null;
  return (
    <>
      <div className="h-25 w-full" />
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-10/12  bg-[#1C305E] p-4 h-19 shadow-[0px_0px_64px_0px_#E7EAF3] flex gap-5 justify-between items-center rounded-[40px] px-8">
        <div className="flex flex-row gap-5">
          <button
            className="text-[#1C305E] bg-[#FBB14A] px-4 py-2 rounded-[100px] text-xl flex flex-row gap-2"
            onClick={handleConfirm}
          >
            <div className="flex flex-row justify-center items-center relative gap-2">
              Submit
              <div className="ml-1 w-7 h-7  top-[-12px] bg-[#1C305E] right-[-14px] text-[18px] text-[#FBB14A] rounded-full flex justify-center items-center">
                5
              </div>
            </div>
          </button>
        </div>

        <button className="text-white px-1 py-3 rounded-[100px] text-xl flex flex-row gap-5" onClick={handleConfirm}>
          Total ₾50,95
        </button>
      </div>
    </>
  );
};

export default Footer;
