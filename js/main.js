const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');


// Selects tab-content based on the clicked tab
function selectItem(e) {
  removeBorder();
  removeShow();
  // Put border on the current tab selected
  this.classList.add('tab-border');
  // Grab content from the DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  // Add the show class
  tabContentItem.classList.add('show');
}

function removeBorder() {
   tabItems.forEach( item => item.classList.remove('tab-border') );
}

function removeShow() {
  tabContentItems.forEach( item => item.classList.remove('show') );
}

// Listeing for tab clicks
tabItems.forEach( item => item.addEventListener( 'click', selectItem ));