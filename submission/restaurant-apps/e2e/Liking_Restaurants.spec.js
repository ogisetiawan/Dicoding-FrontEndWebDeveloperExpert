const assert = require('assert');

Feature('Liking Restaurants');

Before(({I}) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({I}) => {
  I.seeElement('#query');
  I.see('Restaurant not found', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async ({I}) => {
  I.see('Restaurant not found', '.restaurant-item__not__found');

  I.amOnPage('/');
  I.waitForElement('.restaurant__name a', 10);
  I.seeElement('.restaurant__name a');
  

  const firstRestaurant = locate('.restaurant__name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  
  I.seeElement('#likeButton');
  pause();
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const likedRestaurantName = await I.grabTextFrom('.restaurant__name');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
    // I.see('Restaurant not found', '.restaurant-item__not__found');
    
    // I.amOnPage('/');
    // I.waitForElement('.restaurant__name a', 10);
    
    // I.seeElement('.restaurant__name a');
    // I.click(locate('.restaurant__name a').first());

    // pause();
    // I.seeElement('#likeButton');
    // I.click('#likeButton');

    // I.amOnPage('/#/favorite');
    // I.seeElement('.restaurant-item');
});

// Scenario('liking one restaurant and then unliking the restaurant', async ({I}) => {
//   I.see('Restaurant not found', '.restaurant-item__not__found');

//   I.amOnPage('/');

//   I.seeElement('.restaurant__name a');

//   const firstRestaurant = locate('.restaurant__name a').first();
//   const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
//   I.click(firstRestaurant);

//   I.seeElement('#likeButton');
//   I.click('#likeButton');

//   I.amOnPage('/#/favorite');
//   I.seeElement('.restaurant-item');
//   const likedRestaurantName = await I.grabTextFrom('.restaurant__name');

//   assert.strictEqual(firstRestaurantName, likedRestaurantName);
//   I.click(firstRestaurant);

//   I.seeElement('#likeButton');
//   I.click('#likeButton');

//   I.amOnPage('/#/favorite');
//   I.see('Restaurant not found', '.restaurant-item__not__found');
// });
