// script.js

document.getElementById('showGraph').addEventListener('click', () => {
    // Display the modal when the button is clicked
    const modal = document.getElementById('graphModal');
    modal.style.display = 'flex'; // Flex layout to center the content
    const xValues = ["January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"November",
"December",];
const yValues = [70,80,65,19,9,29,40,21,94,4,75,90];

    // Render the graph using Chart.js
    const ctx = document.getElementById('myChart');
    const chart = new Chart(ctx, {
        type: 'line', // Bar chart as an example
        data: {
            labels: xValues,
            datasets: [
                {
                    label: "Sales monthly",
                    data: yValues,
                    backgroundColor: rgb(165, 172, 187),
                    borderColor: '#ff9900',
                    borderWidth: 1,
                },
            ],
        },
        options: {
            scales: {
                yAxes: [{ticks: {min: 0, max:100, text: 'sales report'}}],
            },
        },
    });
});

document.querySelector('.close').addEventListener('click', () => {
    // Close the modal when the close button is clicked
    const modal = document.getElementById('graphModal');
    modal.style.display = 'none';
});

window.onclick = (event) => {
    // Close the modal if the user clicks outside the modal content
    const modal = document.getElementById('graphModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};
