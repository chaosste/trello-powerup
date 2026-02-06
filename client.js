/* global TrelloPowerUp */

var BLACK_ROCKET_ICON = 'https://cdn.glitch.com/1b42d7fe-bda8-4af8-a6c8-eff0cea9e08a%2Frocket-ship.png?1494946700421';

// Initialize your Power-Up
TrelloPowerUp.initialize({
    // Add a button to card backs
                           'card-buttons': function(t, options) {
                                 return [{
                                         icon: BLACK_ROCKET_ICON,
                                         text: 'Estimate Size',
                                         callback: function(t) {
                                                   // When clicked, show a popup
                                           return t.popup({
                                                       title: 'Card Estimation',
                                                       url: './estimate.html',
                                                       height: 184
                                           });
                                         }
                                 }];
                           },

    // Show a badge on the card front
    'card-badges': function(t, options) {
          return t.get('card', 'shared', 'estimate')
            .then(function(estimate) {
                      if (estimate) {
                                  return [{
                                                text: estimate.toUpperCase(),
                                                color: 'blue',
                                                icon: BLACK_ROCKET_ICON
                                  }];
                      }
                      return [];
            });
    }
});
