const projectLabels = ["Bug", "Feature", "Improvement", "Urgent", "Review", "Critical", "Medium", "Low", "Business impact"];
const selectedLabels = new Set();

const labelInputEle = document.getElementById('label-input');
const labelDropdownEle = document.getElementById('label-dropdown');
const selectedLabelsEle = document.getElementById('selected-labels');
const labelsHiddenInputEle = document.getElementById('labels-hidden-input');

// To list all labels
function listLabels() {
    projectLabels.forEach(label => {
        if (!selectedLabels.has(label)) {
            const dropdownItem = document.createElement('div');
            dropdownItem.className = 'dropdown-item';
            dropdownItem.textContent = label;
            dropdownItem.addEventListener('click', () => addLabel(label));
            labelDropdownEle.appendChild(dropdownItem);
        }
    });
    labelDropdownEle.style.display = 'block';
}

// To update the dropdown list
function updateDropdown() {
    const inputValue = labelInputEle.value.toLowerCase();
    if (inputValue.length === 0) {
        labelDropdownEle.style.display = 'none';
        return;
    }
    labelDropdownEle.innerHTML = '';
    const filteredLabels = projectLabels.filter(label => label.toLowerCase().includes(inputValue) && !selectedLabels.has(label));
    filteredLabels.forEach(label => {
        const dropdownItem = document.createElement('div');
        dropdownItem.className = 'dropdown-item';
        dropdownItem.textContent = label;
        dropdownItem.addEventListener('click', () => addLabel(label));
        labelDropdownEle.appendChild(dropdownItem);
    });
    labelDropdownEle.style.display = filteredLabels.length ? 'block' : 'none';
}

// To add a label to the selected labels container
function addLabel(label) {
    selectedLabels.add(label);
    renderSelectedLabels();
    labelInputEle.value = '';
    updateDropdown();
}

// To remove a label from the selected labels container
function removeLabel(label) {
    selectedLabels.delete(label);
    renderSelectedLabels();
    updateDropdown();
}

// To render the selected labels
function renderSelectedLabels() {
    selectedLabelsEle.innerHTML = '';
    selectedLabels.forEach(label => {
        const badge = document.createElement('span');
        badge.className = 'label-badge';
        badge.textContent = label;
        badge.addEventListener('click', () => removeLabel(label));
        selectedLabelsEle.appendChild(badge);
    });
    updateHiddenInput();
}

// To update the hidden input with the selected labels
function updateHiddenInput() {
    labelsHiddenInputEle.value = Array.from(selectedLabels).join(',');
}

labelInputEle.addEventListener('input', updateDropdown);
labelInputEle.addEventListener('focus', listLabels);
// labelInputEle.addEventListener('focusout', ()=>{labelDropdownEle.style.display = 'none'});