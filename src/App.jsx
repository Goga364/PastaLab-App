import "./App.css";
import { useState } from "react";
import OrderType from "./screens/OrderType";
import ChooseOrder from "./screens/ChooseOrder";
import LanguageSwitcher from "./components/LanguageSwitcher";
import { CartContext } from "./context/CartContext";
import { useContext } from "react";
import successAnimation from "./assets/animations/successAnimation.json";
import Lottie from "lottie-react";
import handleOrder from "./utils/handleOrder";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import CustomPasta from "./screens/CustomPasta";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import OrderSummary from "./components/OrderSummary";
function App() {
  const [orderType, setOrderType] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [creatingCustom, setCreatingCustom] = useState(false);

  const enterFullScreen = () => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    }
  };

  const { cart } = useContext(CartContext);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    const startTime = Date.now();
    try {
      await handleOrder(cart);
    } catch (err) {
      console.error("Order failed", err);
    }
    const elapsed = Date.now() - startTime;
    const remainingTime = 2500 - elapsed;
    if (remainingTime > 0) {
      await new Promise((resolve) => setTimeout(resolve, remainingTime));
    }
    setIsSubmitting(false);
    setOrderType();
  };

  const prevStep = () => {
    if (creatingCustom) return setCreatingCustom(false);
    setOrderType(null);
  };

  const renderContent = () => {
    if (!orderType) {
      return <OrderType setOrderType={setOrderType} />;
    }
    if (creatingCustom) {
      return (
        <>
          <button className="absolute left-5 top-5 bg-white w-6 h-6" onClick={prevStep}>
            <FontAwesomeIcon icon={faArrowLeft} color="black" size="3x" />
          </button>
          <CustomPasta setCreatingCustom={setCreatingCustom} />
        </>
      );
    }
    return (
      <>
        <button className="absolute left-5 top-5 bg-white w-6 h-6" onClick={prevStep}>
          <FontAwesomeIcon icon={faArrowLeft} color="black" size="3x" />
        </button>
        <ChooseOrder setCreatingCustom={setCreatingCustom} />
      </>
    );
  };

  if (isSubmitting) {
    return (
      <div className="w-full h-full  bg-[#1C305E] flex justify-center items-center flex-col">
        <div className="w-[500px] h-[600px]">
          <Lottie animationData={successAnimation} />
        </div>
      </div>
    );
  }

  const showSummary = !isSubmitting && orderType && !creatingCustom;

  return (
    <div className="w-full h-full relative">
      <button onClick={enterFullScreen} className="absolute left-0 h-10 w-10" />
      <LanguageSwitcher />
      {renderContent()}
      {showSummary && <OrderSummary handleSubmit={handleSubmit} />}
    </div>
  );
}

export default App;
