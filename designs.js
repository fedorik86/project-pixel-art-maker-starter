// Function to draw a grid
function makeGrid(evt) {
  	evt.preventDefault();
  	// Define variables
  	const table = document.querySelector('#pixelCanvas');
  	const height = document.querySelector('#inputHeight').value;
  	const width = document.querySelector('#inputWidth').value;
  	// Remove grid if already exists, also removes event listerers for grid cells
  	if (table.rows.length !== 0) {
  		tableContents = table.querySelector('tbody');
  		tableContents.remove();
  	};
  	// Create a grid
 	for (let x = 0; x < height; x++) {
		let row = table.insertRow(x);
		for (let y = 0; y < width; y++) {
			let column = row.insertCell(y);
		};
	};
	// Select all cells and add event listener to each calling inline colorCell function
	const cells = document.querySelectorAll('td');
		for (let c = 0; c < cells.length; c++) {
  		cells[c].addEventListener('click', function colorCell(evt) {
  			evt.target.bgColor = document.querySelector('#colorPicker').value;
		});
	};
};

// Select submit button and add event listener to it calling makeGrid function
const clickSubmit = document.querySelector('#sizePicker');
clickSubmit.addEventListener('submit', makeGrid);
