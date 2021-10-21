function pageSetUp(type, headerText, footerText) {
  container = d3.select("body")
    .append("div")
      .attr("id", "container");

  if (headerText) {
    header = container
      .append("div")
        .attr("id", "header")
        .text(headerText);
  }

  type == "viz" ? vizSetUp() :
  type == "chart" ? chartSetUp() :
  mapSetUp();

  if (footerText) {
    footer = container
      .append("div")
        .attr("id", "footer")
        .html(footerText);
  }
}

function vizSetUp() {
  viz = container
    .append("svg")
      .attr("id", "viz");
  vizGroup = viz
    .append("g")
      .attr("id", "vizGroup");
}

function mapSetUp() {
  map = container
    .append("svg")
      .attr("id", "map");
  mapGroup = map
    .append("g")
      .attr("id", "mapGroup");
}

function chartSetUp() {
  chart = container
    .append("svg")
      .attr("id", "chart");
  mapGroup = map
    .append("g")
      .attr("id", "chartGroup");
}

function resize(type) {
  dimensions = document.getElementById(type)
    .getBoundingClientRect();
  width = dimensions.width;
  height = dimensions.height;
}
