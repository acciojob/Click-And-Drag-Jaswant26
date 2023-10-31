// Your code here.
 const itemsContainer = document.querySelector(".items");
    let isDragging = false;
    let startX;
    let scrollLeft;

    itemsContainer.addEventListener("mousedown", (e) => {
      isDragging = true;
      startX = e.pageX - itemsContainer.offsetLeft;
      scrollLeft = itemsContainer.scrollLeft;
    });

    itemsContainer.addEventListener("mouseup", () => {
      isDragging = false;
    });

    itemsContainer.addEventListener("mouseleave", () => {
      isDragging = false;
    });

    itemsContainer.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - itemsContainer.offsetLeft;
      const walk = (x - startX) * 3; // You can adjust the multiplier to control the speed
      itemsContainer.scrollLeft = scrollLeft - walk;
    });