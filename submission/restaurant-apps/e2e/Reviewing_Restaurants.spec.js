const assert = require('assert');

Feature('Reviewing Restaurants');

Scenario('Review test', async ({I}) => {
  I.amOnPage('/');
  I.waitForElement('.restaurant__name a', 5);
  I.seeElement('.restaurant__name a');

  const firstRestaurant = locate('.restaurant__name a').first();
  I.click(firstRestaurant);

  I.waitForElement('.review__input', 5);
  I.seeElement('.review__input');

  const name = 'ogis';
  const review = 'mantap si i i ini';

  I.fillField('#enterName', name);
  I.fillField('#enterReview', review);

  I.click('#btnSubmit');
  I.wait(5);

  const latestReview = locate('.review__text').last();
  const textLatestReview = await I.grabTextFrom(latestReview);

  assert.strictEqual(`"${review}"`, textLatestReview);
});
