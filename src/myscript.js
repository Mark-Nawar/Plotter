var parameters = {
  target: "#myFunction",
  data: [
    {
      fn: "sin(x)",
      color: "red",
    },
  ],
  grid: true,
  yAxis: { domain: [-1, 1] },
  xAxis: { domain: [0, 2 * Math.PI] },
  width: 600,
};

function plot() {
  var f = document.querySelector("#function").value;
  var xMin = document.querySelector("#xMin").value;
  var xMax = document.querySelector("#xMax").value;
  var yMin = document.querySelector("#yMin").value;
  var yMax = document.querySelector("#yMax").value;
  var color = document.querySelector("#color").value;

  parameters.data[0].fn = f;
  parameters.xAxis.domain = [xMin, xMax];
  parameters.yAxis.domain = [yMin, yMax];
  parameters.data[0].color = color;
  if (xMin == "" || xMax == "" || yMin == "" || xMax == "") {
    alert("Fill in empty fields");
  } else if (xMin >= xMax) {
    alert("ERROR : min value of x must be less than max value");
  } else if (yMax <= yMin) {
    alert("ERROR : min value of y must be less than the max value");
  } else {
    try {
      functionPlot(parameters);
    } catch (err) {
      alert(
        "ERROR : Enter a valid Equation, only one variable(x), and corrent parentheses."
      );
    }
    document.getElementById("plot").scrollIntoView({
      behavior: "smooth",
    });
  }
}
