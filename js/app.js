const ohJaeHo = document.querySelector(".title span:nth-child(2)");

function change(event) {
  ohJaeHo.innerText = "오재호가 만들었다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!";
}

ohJaeHo.addEventListener("mouseover", change);
