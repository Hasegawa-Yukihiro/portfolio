const handleScrollIntoContent = (menuItem: string) => {
  const getElement = document.getElementById(menuItem);
  getElement.scrollIntoView({ behavior: "smooth" });
};

export default handleScrollIntoContent;
