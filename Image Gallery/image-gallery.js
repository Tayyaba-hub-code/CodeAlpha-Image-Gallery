function filterSelection(category) {
  const items = document.querySelectorAll(".gallery-item");
  const buttons = document.querySelectorAll(".filter-buttons button");
  buttons.forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");
  if(category === "all") {
    items.forEach(item => item.style.display="inline-block");
  } else {
    items.forEach(item => {
      item.classList.contains(category) ? item.style.display="inline-block" : item.style.display="none";
    });
  }
}