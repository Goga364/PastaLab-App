import "./App.css";
import { useState } from "react";
import OrderType from "./screens/OrderType";
import ChooseOrder from "./screens/ChooseOrder";
import LanguageSwitcher from "./components/LanguageSwitcher";
import Footer from "./components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function App() {
  const [orderType, setOrderType] = useState();
  const enterFullScreen = () => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      /* Safari */
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      /* IE11 */
      document.documentElement.msRequestFullscreen();
    }
  };
  return (
    <div className="w-full h-full relative">
      <button onClick={enterFullScreen}>test</button>
      <LanguageSwitcher />
      {!orderType ? <OrderType setOrderType={setOrderType} /> : <ChooseOrder />}
      <Footer show={orderType} />
    </div>
  );
}

export default App;
