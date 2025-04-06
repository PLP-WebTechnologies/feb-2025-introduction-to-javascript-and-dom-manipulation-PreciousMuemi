// Change heading text
document.getElementById("change-text-btn").addEventListener("click", function () {
    document.getElementById("main-heading").textContent = "Muemi Just Flipped the Script!";
  });
  
  // Modify CSS dynamically
  document.getElementById("change-style-btn").addEventListener("click", function () {
    document.body.style.backgroundColor = "#0f0f0f";
    document.body.style.color = "#66ffcc";
  });
  
  // Add a new element
  document.getElementById("add-element-btn").addEventListener("click", function () {
    const newPara = document.createElement("p");
    newPara.textContent = " Another DOM node joins the scene.";
    document.getElementById("dynamic-section").appendChild(newPara);
  });
  
  // Remove last element
  document.getElementById("remove-element-btn").addEventListener("click", function () {
    const section = document.getElementById("dynamic-section");
    const lastChild = section.lastElementChild;
    if (lastChild && section.children.length > 1) {
      section.removeChild(lastChild);
    }
  });
  