const {Given, When, Then, After} = require('cucumber');
const assert = require('assert');
const { Builder, By, until} = require('selenium-webdriver');
const chromedriver = require('chromedriver');
var chrome = require('selenium-webdriver/chrome');
const expectations = [
  {
      name: "Apple",
      sex: "Male",
      post_id: "#000001",
      timestamp: "3 hours ago",
      date_of_birth: "1972/05/05",
      date_found: "2022/05/28",
      location_found: "Solokhi",
  },
  {
      name: "Banana",
      sex: "Male",
      post_id: "#000002",
      timestamp: "12 hours ago",
      date_of_birth: "1992/05/19",
      date_found: "2022/06/12",
      location_found: "Solokhi",
  },
  {
      name: "Unknown",
      sex: "Female",
      post_id: "#000003",
      timestamp: "1 day ago",
      date_of_birth: "Unknown",
      date_found: "2022/05/28",
      location_found: "Solokhi",
  },
  {
      name: "Unknown",
      sex: "Female",
      post_id: "#000003",
      timestamp: "1 day ago",
      date_of_birth: "Unknown",
      date_found: "2022/05/28",
      location_found: "Solokhi",
  },
  {
      name: "Unknown",
      sex: "Female",
      post_id: "#000003",
      timestamp: "1 day ago",
      date_of_birth: "Unknown",
      date_found: "2022/05/28",
      location_found: "Solokhi",
  },
  {
      name: "Unknown",
      sex: "Female",
      post_id: "#000003",
      timestamp: "1 day ago",
      date_of_birth: "Unknown",
      date_found: "2022/05/28",
      location_found: "Solokhi",
  }
];

const expectation2 = [
  [ 
      "Male",
      "1972/05/05",
      "2022/05/28",
      "Solokhi",
 ],
  [
      "Male",
      "1992/05/19",
      "2022/06/12",
      "Solokhi",
  ],
  [
      "Female",
      "Unknown",
      "2022/05/28",
      "Solokhi",
  ],
  [
      "Female",
      "Unknown",
      "2022/05/28",
      "Solokhi",
  ],
  [
      "Female",
      "Unknown",
      "2022/05/28",
      "Solokhi",
  ],
  [
      "Female",
      "Unknown",
      "2022/05/28",
      "Solokhi",
   ]
];


Given('the user is on the {string} information page', function (string) {
  // Write code here that turns the phrase above into concrete actions
  this.driver = new Builder().forBrowser('chrome').build();
  this.driver.get('http://localhost:3000/');
});

Then('the user should see {string}', function (string) {
  // Write code here that turns the phrase above into concrete actions
    assert.equal(this.driver.getPageSource().contains(string), true);
});


