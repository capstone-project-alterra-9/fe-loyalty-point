export const formatPrice = (number) => {
  return `${new Intl.NumberFormat("ID").format(number)}`;
};
