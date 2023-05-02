const urlParams = new URLSearchParams(window.location.search);

if (urlParams.get("option") === "diskspace") {
    const quota = document.querySelector(".page-header").nextElementSibling;
    const used = quota.nextElementSibling;
    const quotaNumber = parseInt(quota.textContent.replace(/D/g, ""))===0?5120:parseInt(quota.textContent.replace(/D/g, ""));
    const usedNumber = parseInt(used.textContent.replace(/D/g, ""));
    const chartContainer = document.querySelector("iframe").parentElement;
    const canvas = document.createElement("canvas");

    chartContainer.firstElementChild.remove();
    chartContainer.style.height = "425px";
    chartContainer.appendChild(canvas);

    new Chart(canvas, {
    type: "doughnut",
    data: {
        labels: ["Quota", "Used"],
        datasets: [
        {
            label: "Usage",
            data: [quotaNumber, usedNumber],
            backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
            hoverOffset: 4,
        },
        ],
    },
    });

    canvas.style.cssText = "width: 425px; height: 425px;";
}
