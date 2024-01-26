import * as d3 from "d3";
import { useEffect, useRef } from "react";

const Barchart = ({ barColor, data, height: initialheight, id, title, width: initialWidth }) => {
  const ref = useRef();

  useEffect(() => {
    // set the dimensions and margins of the graph
    const margin = { top: 30, right: 30, bottom: 70, left: 60 };
    const width = initialWidth - margin.left - margin.right;
    const height = initialheight - margin.top - margin.bottom;
    const yMax = Math.max(...data.map(({ value }) => value));

    // append the svg object to the body of the page
    const svg = d3
      .select(ref.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);
      
    // X axis
    const x = d3
      .scaleBand()
      .range([0, width])
      .domain(data.map((d) => d.name))
      .padding(0.2);
    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

    // chart title
    svg.append("text")
      .attr("x", (width / 2))             
      .attr("y", 0 - (margin.top / 2))
      .attr("text-anchor", "middle")  
      .style("font-size", "16px") 
      .style("text-decoration", "underline")  
      .text(title);

    // Add Y axis
    const y = d3.scaleLinear().domain([0, yMax]).range([height, 0]);
    svg.append("g").call(d3.axisLeft(y));

    // Bars
    svg
      .selectAll("mybar")
      .data(data)
      .join("rect")
      .attr("x", (d) => x(d.name))
      .attr("y", (d) => y(d.value))
      .attr("width", x.bandwidth())
      .attr("height", (d) => height - y(d.value))
      .attr("fill", barColor);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <svg
      id={`${id}-bar-chart`}
      height={initialheight}
      ref={ref}
      width={initialWidth}
    />
  );
};

export default Barchart;
