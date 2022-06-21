Feature: add deceased information

  As a person who found and buried someone died in the middle of the road, Eric
  I want to post the information of the person who is buried by me and the burial location 
  So that people finding their relatives or friends can look through the list to see if they have died and if so, retrieve their buried location.

Scenario: view the "add deceased information" page
  Given the user is on the "new" "deceased" page
  Then the user should see "Add Deceased Information"
  And the user should see some fields marked with "*"

Scenario: post successfully by filling all the required fields
  Given the user is on the "new" "deceased" page
  When the user fills all the required fields
  And the user fills some optional fields
  And the user clicks “Post”
  Then the user should get back to the refreshed “deceased” information page
  And the user should see a successful toast
  And the user should see the post generated on the top of the "deceased" information page

Scenario: fail to post without filling all the required fields
  Given the user is on the "new" "deceased" page
  When the user fills some of the required fields
  And the user fills some optional fields
  And the user clicks “Post”
  Then the user should see a red warning 
  And the user should see that the required fields he forgot to fill are highlighted in red.

Scenario: fail multiple times
  Given the user is on the "new" "deceased" page
  And the user is warned to fill "Time Found" and "Sex"
  When the user fills "Time found"
  And the user clicks “Post”
  Then the user should see a red warning 
  And I should see the field "Sex" is highlighted in red
  And I should see the field "Time Found" returns to normal 

Scenario: finally post successfully 
  Given the user is on the "new" "deceased" page
  And the user is warned to fill "Time Found" and "Sex"
  When the user fills "Time Found"
  And the user fills "Sex"
  And the user clicks “Post”
  Then the user should get back to the refreshed “deceased” information page
  And the user should see a successful toast
  And the user should see the post generated on the top of the "deceased" information page

Scenario: return to the "deceased information" page from "add detailed information" page
  Given the user is on the "new" "deceased" page
  When the user clicks the "return" icon
  Then the user should go to the "deceased" information page
  And the user should be where he browsed before clicking the post to see the detailed information


