var $tabContainer = document.querySelector('.tab-container');
var $allTab = document.querySelectorAll('.tab');
var $allView = document.querySelectorAll('.view');

function checkTab(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $allTab.length; i++) {
      if ($allTab[i] === event.target) {
        $allTab[i].className = 'tab active';
      } else if ($allTab[i] !== event.target) {
        $allTab[i].className = 'tab';
      }
    }
  }
  if (event.target.matches('.tab')) {
    var $dataView = event.target.getAttribute('data-view');
    for (var j = 0; j < $allView.length; j++) {
      if ($allView[j].getAttribute('data-view') === $dataView) {
        $allView[j].className = 'view';
      } else if ($allView[j].getAttribute('data-view') !== $dataView) {
        $allView[j].className = 'view hidden';
      }
    }
  }
}

$tabContainer.addEventListener('click', checkTab);
