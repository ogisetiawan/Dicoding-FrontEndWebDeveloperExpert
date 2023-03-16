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
  I.waitForElement('.restaurant__name a', 5);
  I.seeElement('.restaurant__name a');

  const firstRestaurant = locate('.restaurant__name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  
  // pause();
  I.waitForElement('#likeButton', 5); //? need adding load per seconds
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const likedRestaurantName = await I.grabTextFrom('.restaurant__name');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('liking one restaurant and then unliking the restaurant', async ({I}) => {
  I.see('Restaurant not found', '.restaurant-item__not__found');

  I.amOnPage('/');
  I.waitForElement('.restaurant__name a', 5);
  I.seeElement('.restaurant__name a');

  const firstRestaurant = locate('.restaurant__name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const likedRestaurantName = await I.grabTextFrom('.restaurant__name');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('Restaurant not found', '.restaurant-item__not__found');
});
