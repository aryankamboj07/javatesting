let text = "";

for (let i = 1; i < 10; i++) {
  if (i === 6) { break; }
  text += i*100 + "<br>";
}

document.getElementById("demo").innerHTML = text;