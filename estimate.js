/* global TrelloPowerUp */

// Initialize for iframe (not connector)
var t = TrelloPowerUp.iframe();

// Handle form submission
window.estimate.addEventListener('submit', function(event) {
    event.preventDefault();

                                   // Save the selected estimate to the card
                                   return t.set('card', 'shared', 'estimate', window.estimateSize.value)
      .then(function() {
              t.closePopup();
      });
});

// On load, set the previously selected value and resize
t.render(function() {
    return t.get('card', 'shared', 'estimate')
      .then(function(estimate) {
              if (estimate) {
                        window.estimateSize.value = estimate;
              }
      })
      .then(function() {
              t.sizeTo('#estimate').done();
      });
});
