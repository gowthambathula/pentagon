var colors = document.querySelectorAll(".s");
colors.forEach(color => {
  color.addEventListener("click", but(color));
});

function but(color) {
  return () => {
    document.getElementById("displa").innerHTML = `
	<div class="foo voilet" data-color="voilet"></div>
	<div class="foo indigo" data-color="indigo"></div>
	<div class="foo Blue" data-color="blue"></div><br>
  <div class="foo Green" data-color="green"></div>
  <div class="foo Yellow" data-color="yellow"></div>
  <div class="foo Orange" data-color="orange"></div><br>
  <div class="foo Red" data-color="red"></div>`;

    document.querySelectorAll(".foo").forEach(foo => {
      foo.addEventListener("click", e => {
        color.style.fill = foo.dataset.color;
        document.getElementById("displa").innerHTML = "";
      });
    });
  };
}
