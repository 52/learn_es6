const heading = document.querySelector(".jump");

breakDownToSpans(heading);

function breakDownToSpans(element){
  const letters = [...element.textContent];

  element.textContent = "";

  for(const letter of letters){
    let span = document.createElement("span");
    span.innerText = letter;
    element.append(span);
  }
}
