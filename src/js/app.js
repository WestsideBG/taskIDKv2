import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  let hotPrices = document.getElementsByClassName("hot")

  for (let index = 0; index < hotPrices.length; index++) {
    const element = hotPrices[index];
    hotPrices[index].insertAdjacentText('beforeEnd'," 🔥")
  }

});
