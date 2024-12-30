Feature: Board functionality

  Scenario: Blog test
    Given I am on empty home page
    When I clicked the blog link
    When I am searching for the articles
    When I clicked the articles card

########################### Blog ################################

  Scenario: Workshops test
    Given I am on empty home page
    When I clicked the Workshops link
    When I clicked the articles cypress core workshop card
    When I clicked activate button

##    When I subscribe to the channel
    When I type my first name
    When I type my email
    When I click the subscribe button

