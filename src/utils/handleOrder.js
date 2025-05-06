import api from "../api";

const organizationId = "aabf3292-a24b-4eff-bd37-65381880f8b3";
const terminalGroupId = "d5825ab1-4c05-c0bb-0196-8c970dd80066";

const handleOrder = async (product) => {
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
