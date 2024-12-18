// Configuration section for plotting adjustments
const config = {
    chart: {
        width: 800,
        height: 500,
        margin: { top: 25, right: 25, bottom: 50, left: 80 },  // Increased left margin
    },
    axis: {
        xLabel: "Time of core exams (year)",  // Updated x-axis label
        yLabel: "Sample size (n)"  // Updated y-axis label
    },
    line: {
        strokeWidth: 2  // Line thickness for the path
    },
    circle: {
        radius: 8,  // Circle radius
        strokeColor: "white",  // Circle border color
        strokeWidth: 1  // Circle border thickness
    },
    legend: {
        textColor: "white",  // Text color for legend
        title: "FHS Cohorts",  // Legend title
        labels: {
            "0": "Original (Gen 1)",
            "1": "Offspring (Gen 2)",
            "3": "Third generation (Gen 3)",
            "2": "New offspring spouse (NOS)",
            "7": "OMNI 1",
            "72": "OMNI 2"
        },
        xOffset: 50,  // Horizontal shift for the legend
        yOffset: 320  // Vertical shift for the legend
    },
    colorScale: d3.scaleOrdinal(d3.schemeCategory10)  // Color scale for groups
};

// Create the tooltip div, but styling is handled by CSS
const tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("visibility", "hidden");

// Load data from the JSON file
d3.json("fhs_core_exam_stat.json").then(data => {
    // Parse data and ensure x and y values are numeric
    data.forEach(d => {
        d.median_date_core = +d.median_date_core;  // Ensure numeric
        d.n = +d.n;  // Ensure numeric
    });

    // Group data by idtype
    const groupedData = d3.group(data, d => d.idtype ?? "undefined");

    // Create SVG container
    const svg = d3.select("#chart")
        .append("svg")
        .attr("width", config.chart.width + config.chart.margin.left + config.chart.margin.right)
        .attr("height", config.chart.height + config.chart.margin.top + config.chart.margin.bottom)
        .append("g")
        .attr("transform", `translate(${config.chart.margin.left}, ${config.chart.margin.top})`);


    // To define custom axis ranges and ticks for your chart, 
    // you need to manually set the domain of the scales and 
    // specify the tick values using D3. 

    // Define user-defined ranges
    const yDomain = [-300, 5500];
    const xDomain = [1948, 2023];
    // Define tick values
    const yTicks = [0, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500];
    const xTicks = [1948, 1960, 1970, 1980, 1990, 2000, 2010, 2020];

    // Create scales
    const xScale = d3.scaleLinear()
        // .domain(d3.extent(data, d => d.median_date_core))
        // Update the scales with custom ranges
        .domain(xDomain)
        .range([0, config.chart.width]);

    const yScale = d3.scaleLinear()
        // .domain([0, d3.max(data, d => d.n)])
        // Update the scales with custom ranges
        .domain(yDomain)
        .range([config.chart.height, 0]);

    // Create axes
    // const xAxis = d3.axisBottom(xScale).tickFormat(d3.format("d"));
    // const yAxis = d3.axisLeft(yScale);

    // Append and customize the axes
    const xAxis = d3.axisBottom(xScale)
        .tickValues(xTicks) // Set custom tick values for x-axis
        .tickFormat(d3.format("d")); // Format as integers
    const yAxis = d3.axisLeft(yScale)
        .tickValues(yTicks); // Set custom tick values for y-axis

    // Append the x-axis and apply styles from config
    svg.append("g")
        .attr("transform", `translate(0, ${config.chart.height})`)
        .call(xAxis)
        .attr("class", "axis")
        .append("text")
        .attr("x", config.chart.width / 2)
        .attr("y", 40)
        .attr("class", "axis-label")
        .text(config.axis.xLabel);

    // Append the y-axis and apply styles from config
    svg.append("g")
        .call(yAxis)
        .attr("class", "axis")
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", -config.chart.height / 2)
        .attr("y", -60)
        .style("text-anchor", "middle")
        .attr("class", "axis-label")
        .text(config.axis.yLabel);

    // --- Add free space for both sides of the x and y-axis ---
    // Prevents data points from overlapping with the axes, 
    // ensuring that all points are fully visible within the plot area.
    // Calculate the x and y domains with an additional span
    // const xDomain = d3.extent(data, d => d.median_date_core);
    // const yDomain = d3.extent(data, d => d.n);

    // Add a span (e.g., 5% of the range) to each end of the domains
    // const xSpan = (xDomain[1] - xDomain[0]) * 0.02; // 5% margin
    // const ySpan = (yDomain[1] - yDomain[0]) * 0.03;

    // xScale.domain([xDomain[0] - xSpan, xDomain[1] + xSpan]);
    // yScale.domain([yDomain[0] - ySpan, yDomain[1] + ySpan]);

    // Update the axes with the new scales
    svg.select(".x-axis")
        .call(d3.axisBottom(xScale));

    svg.select(".y-axis")
        .call(d3.axisLeft(yScale));
    // ---------------------------------------------------------

    // Define line generator
    const line = d3.line()
        .x(d => xScale(d.median_date_core))
        .y(d => yScale(d.n));

    // Add lines for each group
    groupedData.forEach((values, idtype) => {
        if (idtype !== "undefined") {
            const className = `idtype-${idtype}`;
            svg.append("path")
                .datum(values)
                .attr("fill", "none")
                .attr("stroke", config.colorScale(idtype))
                .attr("stroke-width", config.line.strokeWidth)
                .attr("d", line)
                .attr("class", className);
        }
    });

    // Initialize the tooltip content based on user selection
    function getSelectedSummaryVars() {
        const selectedVars = [];
        document.querySelectorAll(".summary-var:checked").forEach((checkbox) => {
            selectedVars.push(checkbox.value);
        });
        return selectedVars;
    }

    // Function to generate tooltip content dynamically
    function generateTooltipContent(d, idtype) {
        const selectedVars = getSelectedSummaryVars();
        let tooltipContent = `<div class="tooltip-title">${config.legend.labels[idtype]}</div><hr>`;

        // Add content based on selected variables
        if (selectedVars.includes("coreExam")) {
            tooltipContent += `Core exam: ${d.exam}<br>`;
        }
        if (selectedVars.includes("sampleSize")) {
            tooltipContent += `Sample size (n): ${d.n}<br>`;
        }
        if (selectedVars.includes("femalePercentage")) {
            tooltipContent += `Female (%): ${(d.female * 1).toFixed(0)}%<br>`;
        }
        if (selectedVars.includes("ageMeanRange")) {
            tooltipContent += `Age mean, range: ${d.avg_age_core}, ${d.range_age_core}<br>`;
        }
        if (selectedVars.includes("dateRange")) {
            tooltipContent += `Date range: ${d.range_date_core}<br>`;
        }

        return tooltipContent;
    }

    // // Event listener for checkbox changes to update tooltips dynamically
    // document.querySelectorAll(".summary-var").forEach((checkbox) => {
    //     checkbox.addEventListener("change", () => {
    //         // You can optionally refresh the visualization or force tooltip update if needed
    //         console.log("Summary variables updated:", getSelectedSummaryVars());
    //     });
    // });

    // Track if the mouse is hovering over a circle
    let isHovering = false;

    // Add circles for each data point
    groupedData.forEach((values, idtype) => {
        if (idtype !== "undefined") {
            const className = `idtype-${idtype}`;
            const lineColor = config.colorScale(idtype); // Get the line color based on idtype

            values.forEach(d => {
                // Create a group for each data point
                const group = svg.append("g")
                    .attr("class", `data-group ${className}`)
                    .attr("transform", `translate(${xScale(d.median_date_core)}, ${yScale(d.n)})`);

                // Append the circle to the group
                group.append("circle")
                    .attr("class", className) // Assign the idtype-based class
                    .attr("r", config.circle.radius)
                    .attr("fill", lineColor)
                    .attr("stroke", config.circle.strokeColor)
                    .attr("stroke-width", config.circle.strokeWidth)
                    .attr("data-original-fill", lineColor);

                // Append the text to the group
                group.append("text")
                    .attr("class", className) // Assign the idtype-based class
                    .attr("y", 2) // Adjust vertical alignment
                    .attr("text-anchor", "middle")
                    .attr("alignment-baseline", "middle")
                    .attr("font-size", "12px")
                    .attr("font-family", "sans-serif")
                    .attr("fill", lineColor)
                    .text(d.exam);

                // Attach event listeners to the group
                group.on("mouseover", function (event) {
                    // Stop random zoom while hovering
                    isHovering = true;

                    const circles = d3.selectAll("circle");
                    // const coreExam = d.exam;
                    // const sampleSize = d.n;
                    // const femalePercentage = (d.female * 1).toFixed(0);
                    // const ageMean = `${d.avg_age_core} years`;
                    // const ageRange = `${d.range_age_core}`;
                    // const ageMeanRange = `${d.avg_age_core} [${d.range_age_core}]`;
                    // const dateRange = `${d.range_date_core}`;

                    // Reset all circles to default state
                    circles.transition().duration(200)
                        .attr("r", config.circle.radius)
                        .attr("fill", function () {
                            return d3.select(this).attr("data-original-fill");
                        });

                    // Highlight all circles belonging to the same idtype
                    d3.selectAll(`circle.idtype-${idtype}`)
                        .transition()
                        .duration(200)
                        .attr("r", config.circle.radius * 2.0);

                    // Highlight all text belonging to the same idtype
                    d3.selectAll(`text.idtype-${idtype}`)
                        .transition()
                        .duration(200)
                        .attr("font-size", "22px")
                        .attr("fill", "black");

                    // Highlight the circle
                    d3.select(this).select("circle")
                        .interrupt()
                        .attr("fill", "yellow")
                        .transition().duration(200)
                        .attr("r", config.circle.radius * 3.0);

                    // Create the horizontal reference line
                    svg.append("line")
                        .attr("x1", 0)
                        .attr("x2", config.chart.width)
                        .attr("y1", yScale(d.n))
                        .attr("y2", yScale(d.n))
                        .attr("stroke", "lightgray")
                        .attr("stroke-width", 0.5)
                        .attr("stroke-dasharray", "5,5") // Dash pattern: 5px dash, 5px gap
                        .attr("class", "hover-line horizontal");

                    // Create the vertical reference line
                    svg.append("line")
                        .attr("x1", xScale(d.median_date_core))
                        .attr("x2", xScale(d.median_date_core))
                        .attr("y1", 0)
                        .attr("y2", config.chart.height)
                        .attr("stroke", "lightgray")
                        .attr("stroke-width", 0.5)
                        .attr("stroke-dasharray", "5,5") // Dash pattern: 5px dash, 5px gap
                        .attr("class", "hover-line vertical");

                    // Show tooltip
                    // tooltip.style("visibility", "visible")
                    //     .html(`
                    //         <div class="tooltip-title">${config.legend.labels[idtype]}</div>
                    //         Core exam: ${coreExam}<br>
                    //         Date range: ${dateRange}<br>
                    //         Sample size (n): ${d.n}<br>
                    //         Female (%): ${femalePercentage}%<br>
                    //         Age (mean): ${ageMean}<br>
                    //         Age (range): ${ageRange}
                    //     `)
                    tooltip.style("visibility", "visible")
                        .html(generateTooltipContent(d, idtype))
                        .style("left", `${event.pageX - 100}px`)
                        .style("top", `${event.pageY + 30}px`);

                    // Highlight the cohort line by increasing stroke width
                    svg.selectAll(`path.idtype-${idtype}`)
                        .transition().duration(200)
                        .attr("stroke-width", config.line.strokeWidth * 3.0);
                })
                    .on("mousemove", function (event) {
                        tooltip.style("left", `${event.pageX - 100}px`)
                            .style("top", `${event.pageY + 30}px`);
                    })
                    .on("mouseout", function () {
                        // Reset the circle
                        d3.select(this).select("circle")
                            .interrupt()
                            .attr("fill", d3.select(this).select("circle").attr("data-original-fill"))
                            .transition().duration(200)
                            .attr("r", config.circle.radius);

                        // Hide the tooltip
                        tooltip.style("visibility", "hidden");

                        // Remove the reference lines
                        svg.selectAll(".hover-line").remove();

                        // Restore the cohort line width to original
                        svg.selectAll(`path.idtype-${idtype}`)
                            .transition().duration(200)
                            .attr("stroke-width", config.line.strokeWidth);

                        // Restore the text size to original
                        svg.selectAll(`text.idtype-${idtype}`)
                            .transition().duration(200)
                            .attr("font-size", "12px")
                            .attr("fill", lineColor);

                        // Resume random zoom    
                        isHovering = false;

                    });
            });
        }
    });

    // Random zoom function that pauses during hover
    function randomZoom() {
        if (isHovering) return;  // Don't execute if hovering over a data circle

        // Select all circles
        const circles = d3.selectAll("circle");

        // Reset all circles to default state
        circles.transition().duration(200)
            .attr("r", config.circle.radius)
            .attr("fill", function () {
                return d3.select(this).attr("data-original-fill");
            });

        // Select a random circle
        const randomIndex = Math.floor(Math.random() * circles.size());
        const randomCircle = circles.nodes()[randomIndex];
        const circleSelection = d3.select(randomCircle);
        const data = circleSelection.data()[0]; // Retrieve bound data

        // Debug: Log the bound data and exam value
        // console.log("Randomly selected circle data:", data);
        // console.log("Randomly selected circle data:", data.exam);

        // Highlight the selected random circle
        circleSelection
            .transition()
            .duration(200)
            .attr("r", config.circle.radius * 2.0)
            .attr("fill", "yellow");

        // // Add the exam number as a persistent label in the center of the circle
        // const cx = +circleSelection.attr("cx");
        // const cy = +circleSelection.attr("cy");

        // svg.append("text")
        //     .attr("class", "exam-label")
        //     .attr("x", cx) // Center horizontally
        //     .attr("y", cy + 2) // Center vertically
        //     .attr("text-anchor", "middle") // Align horizontally
        //     .attr("alignment-baseline", "middle") // Align vertically
        //     .attr("font-size", "20px")
        //     .attr("font-family", "sans-serif")
        //     .attr("fill", "red") // Ensure visibility
        //     .text(data.exam); // Show only the value of `exam`

        // // Reset all text labels
        // d3.selectAll(".exam-label").remove();

    }

    // Set the interval for random zoom
    setInterval(randomZoom, 1500);

    // -------------------- LEGEND ------------------------ //
    // Add legend
    const legend = svg.append("g")
        .attr("transform", `translate(${config.legend.xOffset}, ${config.legend.yOffset})`);

    // Add legend title
    legend.append("text")
        .attr("x", 0)
        .attr("y", -10)
        .attr("fill", config.legend.textColor)
        .style("font-weight", "bold")
        .text(config.legend.title);

    // Add legend items
    Array.from(groupedData.keys()).forEach(idtype => {
        if (idtype !== "undefined") {
            const legendRow = legend.append("g")
                .attr("transform", `translate(0, ${20 + (Array.from(groupedData.keys()).indexOf(idtype) * 20)})`);

            legendRow.append("rect")
                .attr("x", 0)
                .attr("y", 0)
                .attr("width", 12)
                .attr("height", 12)
                .attr("fill", config.colorScale(idtype));

            legendRow.append("text")
                .attr("x", 20)
                .attr("y", 12)
                .attr("fill", config.legend.textColor)
                .text(config.legend.labels[idtype]);
        }
    });

    // -------------------- INSTRUCTION BOX ------------------------ //
    // Add instruction box
    svg.append("rect")
        .attr("x", config.chart.width - 195)
        .attr("y", -config.chart.margin.top / 2 + 10)
        .attr("width", 205)
        .attr("height", 50)
        .attr("fill", "lightcyan")
        .attr("stroke", "black")
        .attr("rx", 5)
        .attr("ry", 5);

    svg.append("text")
        .attr("x", config.chart.width - 185)
        .attr("y", -config.chart.margin.top / 2 + 30)
        .attr("fill", "black")
        .style("font-size", "14px")
        .style("text-anchor", "start")
        .text("🎯 Hover over data points to")
        .append("tspan")
        .attr("x", config.chart.width - 160)
        .attr("y", -config.chart.margin.top / 2 + 45)
        .text("see summary statistics.");
});
