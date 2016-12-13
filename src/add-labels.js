export default function addLabels (chart, options) {
  if (!options.yaxis || !options.yaxis.toRight) {
    return;
  }

  const chartCanvas = chart.getCanvas();
  const chartWidth = chartCanvas.width;
  const ctx = chartCanvas.getContext('2d'); // get the context
  const allSeries = chart.getData();  // get your series data
  const xaxis = chart.getXAxes()[0]; // xAxis
  const yaxis = chart.getYAxes()[0]; // yAxis
  const offset = chart.getPlotOffset(); // plots offset
  ctx.font = `${options.yaxis.fontSize} '${options.yaxis.fontFamily}'`; // set a pretty label font
  ctx.fillStyle = options.yaxis.fontColor;

  for (let i = 0; i < allSeries.length; i++) {
    const series = allSeries[i];
    const dataPoint = series.datapoints.points; // one point per series
    const x = dataPoint[0];
    const y = dataPoint[1];
    const text = series.yaxis.options.ticks[i][1];
    const metrics = ctx.measureText(text);

    const overlap = chartWidth < xaxis.p2c(x) + metrics.width;
    const xPos = overlap ?
      (xaxis.p2c(x) + offset.left) - metrics.width - 10 : // place at end of bar
      xaxis.p2c(x) + offset.left + 10; // place after the bar
    const yPos = yaxis.p2c(y) + offset.top + options.yaxis.labelPadding;
    ctx.fillText(text, xPos, yPos);
  }
}
