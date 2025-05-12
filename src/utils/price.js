export const calculateTotal = (cart) => {
  const total = cart.reduce((acc, item) => {
    const price = item?.modifiers?.length ? calculateCustom(item) : Number(item.price) * item.amount;
    return acc + price;
  }, 0);
  return total;
};

export const calculateCustom = (item) => {
  const modifiersCost = item.modifiers.reduce((acc, modifier) => acc + Number(modifier.price), 0);

  return (modifiersCost + Number(item.price)) * Number(item.amount || 1);
};
