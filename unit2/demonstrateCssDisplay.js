document.addEventListener("DOMContentLoaded", () => {
  const contactType = document.getElementById("contactType");

  const complaintsBox = document.getElementById("commonComplains");
  const techBox = document.getElementById("technicalProblems");
  const productBox = document.getElementById("productIssues");

  function hideAll() {
    complaintsBox.style.display = "none";
    techBox.style.display = "none";
    productBox.style.display = "none";
  }

  hideAll();

  contactType.addEventListener("change", () => {
    hideAll();

    if (contactType.value === "C") {
      complaintsBox.style.display = "block";
    } else if (contactType.value === "T") {
      techBox.style.display = "block";
    } else if (contactType.value === "P") {
      productBox.style.display = "block";
    }
  });
});
