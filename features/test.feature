Feature: view deceased information

  As a desperate user finding his father, Eric
  I want to view the list of the deceased people who are found/buried by the others
  So I know where to find them after the war, or to continue searching for them if they havent been found dead

Scenario: view a list of posts on the "Deceased Information" page
  Given the user is on the "deceased" information page
  Then the user should see "Deceased Information"
  And the user should see a list of posts of deceased people

Scenario: view the breif information of each post on the "Deceased Information" page
  Given the user is on the "deceased" information page
  Then the user should see the brief of each entry

Scenario: check the order of the posts
  Given the user is on the "deceased" information page
  Then the user should see the most recent posts on the top

Scenario: view the detailed information of each deceased peoson
  Given the user is on the "deceased" information page
  When the user clicks the post with id "1"
  Then the user should go to the detailed information page of the post with id "1"
  And the user should see "Detailed Information"
  And the user should see the detailed information of the posts

Scenario: view the detailed information of each deceased peoson
  Given the user is on the "deceased" information page
  When the user clicks the post with id "1"
  Then the user should go to the detailed information page of the post with id "1"
  And the user should see "Detailed Information"
  And the user should see the detailed information of the posts

Scenario: view the "Add Deceased Information" form
  Given the user is on the "deceased" information page
  When the user clicks the "add" icon
  Then the user should go to the "new" "deceased" page
  And the user should see "Add Detailed Information"

Scenario: hide the protected information
  Given the user is on the detailed information page of the post with id "1"
  Then the user should not see the protected information

Scenario: return to the deceased information page from the detailed information page
  Given the user is on the detailed information page of the post with id "1"
  When the user clicks the "return" icon
  Then the user should go to the "deceased" information page
  And the user should be where he browsed before clicking the post to see the detailed information

Scenario: scroll to the bottom of the page
  Given the user is on the "deceased" information page
  When the user scrolls to the bottom of the page
  Then the user should see a "footer" indicating the bottom of the page
