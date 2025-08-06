function toggleDropdown() {
  const dropdown = document.getElementById('dropdownOptions');
  const arrowIcon = document.querySelector('.arrow-icon');

  const isOpen = dropdown.style.display === 'block';
  dropdown.style.display = isOpen ? 'none' : 'block';

  arrowIcon.classList.toggle('rotate', !isOpen);
}

function selectOption(element) {
  const selectedText = element.innerText;

  const label = document.getElementById('selectedOption');
  label.innerText = selectedText;
  label.classList.add('selected'); 

  document.getElementById('inquiryType').value = selectedText;

  document.getElementById('dropdownOptions').style.display = 'none';
  document.querySelector('.arrow-icon').classList.remove('rotate');
}

document.addEventListener('click', function(event) {
  const dropdownWrapper = document.querySelector('.custom-dropdown');
  const dropdown = document.getElementById('dropdownOptions');
  const arrowIcon = document.querySelector('.arrow-icon');

  if (!dropdownWrapper.contains(event.target)) {
    dropdown.style.display = 'none';
    arrowIcon.classList.remove('rotate');
  }
});
