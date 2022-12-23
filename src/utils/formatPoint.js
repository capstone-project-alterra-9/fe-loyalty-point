export const formatPoint = (number) => {
  return `${new Intl.NumberFormat("ID").format(number)}`;
};
