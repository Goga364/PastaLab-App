import api from "../api";

const organizationId = import.meta.env.VITE_ORGANIZATION_ID;
const terminalGroupId = import.meta.env.VITE_TERMINAL_GROUP_ID;

const handleOrder = async (product) => {
  console.log(terminalGroupId);
  try {
    const res = api.post("/order/create", {
      createOrderSettings: {
        checkStopList: false,
        servicePrint: false,
        transportToFrontTimeout: 0,
      },
      order: {
        combos: [],
        externalData: [],
        guestCount: 1,
        guests: {
          count: 1,
        },
        items: product,
        payments: [],
        tips: [],
      },
      organizationId,
      terminalGroupId,
    });
    return res;
  } catch (error) {
    console.error("Failed to create order");
    return error;
  }
};
export default handleOrder;
