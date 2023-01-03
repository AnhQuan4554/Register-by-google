const router = document.querySelectorAll(".itemRouter");
router.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".itemRouter.active").classList.remove("active");
    item.classList.add("active");
  });
});
