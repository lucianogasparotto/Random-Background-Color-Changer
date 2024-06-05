const darkColorsArr = [
    "#2C3E50",
    "#34495E",
    "#2C2C2C",
    "#616A6B",
    "#4A235A",
    "#2F4F4F",
    "#0E4B5A",
    "#36454F",
    "#2C3E50",
    "#800020",
    "#2F4F4F",
    "#556B2F",
    "#8B0000",
    "#8B4513",
    "#A52A2A",
    "#A9A9A9",
    "#006400",
    "#BDB76B",
    "#556B2F",
    "#8B008B",
    "#483D8B",
    "#2F4F4F",
    "#4B0082",
    "#800000",
    "#191970",
    "#808000",
    "#6B8E23",
    "#FF4500",
    "#DA70D6",
    "#CD853F",
    "#FF6347",
    "#7B68EE",
    "#32CD32",
    "#4682B4",
    "#FFD700",
    "#FF8C00",
    "#9932CC",
    "#8B008B",
    "#00FF7F",
    "#00FA9A",
    "#87CEEB",
    "#FF69B4",
    "#778899",
    "#228B22",
    "#FA8072",
    "#00FFFF",
    "#DAA520",
    "#FFA500",
    "#8A2BE2",
    "#48D1CC"
  ];
  
  function getRandomIndex() {
    const randomIndex = Math.floor(Math.random() * 51);
    return randomIndex;
  }
  
  const body = document.querySelector("body");
  const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");
  
  function changeBackgroundColor() {
    const color = darkColorsArr[getRandomIndex()];
  
    bgHexCodeSpanElement.innerText = color;
    body.style.backgroundColor = color;
  }
  const btn = document.querySelector("#btn");
  
  btn.onclick = changeBackgroundColor;