const hex = document.getElementById('colorpicker');
const dropdown = document.getElementById('myDropdown');
var body = document.body;
let past = ['#000000'];
let dValue;
populateDropdown();

function changeBackgroundColor() {
    var color = hex.value;

    if (past[0] != color) {
        past.unshift(color);
        populateDropdown();
        let colorArr = dropdown.textContent.split('#');
        dropdown.value = '#' + colorArr[1];

        // Removing duplicates in dropdown
        for (let i = 2; i < colorArr.length; i++) {
            if (color == '#' + colorArr[i]) {
                removeOption(color);
            }
        }
    }

    // Limiting past options to 10
    if (past.length > 10) {
        past.pop();
        limitOptions();
    }
    body.style.backgroundColor = color;
}

function populateDropdown() {
    var option = document.createElement('option');
    option.value = past[0];
    option.text = past[0];
    dropdown.prepend(option);
}

setInterval(() => {
    if (dValue != dropdown.value) {
        dValue = dropdown.value;
        dropdownChange(); 
    }
}, 25);

function removeOption(val) {
    var options = dropdown.options;
    for (let i = 1; i < options.length; i++) {
        if (options[i].value === val) {
            dropdown.removeChild(options[i]);
        }
    }
}

function limitOptions() {
    var options = dropdown.options;
    for (let i = 10; i < options.length; i++) {
        dropdown.removeChild(options[i]);
    }
}

function dropdownChange() {
    body.style.backgroundColor = dValue;
    hex.value = dValue;
}