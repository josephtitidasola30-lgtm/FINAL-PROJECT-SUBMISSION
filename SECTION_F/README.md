# Cypress SauceDemo Automation Testing Project

## Project Description

This project contains automated end-to-end tests created using Cypress for the SauceDemo website.

The tests cover login, product selection, cart functionality, checkout process, and logout.

## Setup Instructions

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm

### Installation Steps

1. Clone the repository:

git clone <repository-url>

2. Navigate into the project folder:

cd <project-folder-name>

3. Install project dependencies:

npm install

## Execution Instructions

To open Cypress Test Runner, run:

npx cypress open

Select E2E Testing and choose a browser to execute the tests.

To run Cypress tests in headless mode, run:

npx cypress run

## Test Reporting

Mochawesome reporting is configured in this project to generate test execution reports.

The reports provide information about:
- Passed test cases
- Failed test cases
- Test execution results

## Application Under Test

SauceDemo Website:

https://www.saucedemo.com/