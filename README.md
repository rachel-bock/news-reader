# NYTreats - A New York Times Top Stories Reader

## Table of Contents

- [Summary](#summary)
- [Screenshots](#screenshots)
- [Setup Instructions](#setup-instructions)
- [Testing Instructions](#testing-instructions)
- [Wins](#wins)
- [Challenges](#challenges)
- [Contributors](#contributors)

## Summary

As the final solo project for the Turing School of Software and Design,
I created this news reader.  It pull news articles from the Top Stories API
provided by the New York Times and displays them in a summary format so that
the user can quickly see what articles are available for viewing.

The project's primary technology is React.  The project timeline was 8 hours from planning to implementation.
The spec is located on [Turing's website](https://mod4.turing.edu/projects/take_home/take_home_fe).

## Screenshots

### Wireframe

When I originally thought about the project, I wanted the news stories listing
to be the main body of the page.  After the user clicked a headline, the
news story would pop up in a modal.  Given the time constraints, I decided that
there was not enough time to research and practice how to create modals.  I
revised the original design to match the following (more basic) functionality.  
I used my notebook to draw out the revised wireframe as shown here.

![Paper Wireframe drawing](https://user-images.githubusercontent.com/70186075/190511344-0cb45374-1196-4fff-b7f0-1cbdd2ce2fe9.png)

### Application

![Sexy News Reader Application Screenshot goes here](https://user-images.githubusercontent.com/70186075/190511426-660d5082-c016-458a-a5d8-c463a12ef5f5.png)

## Setup Instructions

To run the project locally:

- Open a terminal window.
- Run `git clone git@github.com:rachel-bock/news-reader.git`
- Then `cd news-reader` to change to the repository directory
- Once in the repository directory, use `npm install` or `npm i` to install all dependencies
- When ready, run `npm start` to start the development server and open the project in your browser.

If the project does not open in your default browser, open http://www.localhost:3000 to access the application.

## Testing Instructions

Given more time, I would implement automated testing using Cypress.  
However, as it was, I prioritized additional functionality above testing for this project.


## Wins
- Filtering the news stories listed in the application.
- Getting the news story shown in the details area to match the news story that the user clicks on.
- Accessing the API provided by the New York Times.
- Setting up the section buttons in the navigation menu.

## Challenges
My first challenge was creating an application in the New York Times Developer portal.  I was not able to create an app which meant that I couldn't access the API key.  Without the API Key, the entire application would be missing the news stories.  This was resolved by logging out of the Developer portal and logging back in.  

Once I had the API key, the challenge became how to display the correct information on the screen.  I used Postman to access the API in order to verify the format of the data.  Once I had information about data format, then I was able to select the Headlines (title), Abstract, Byline and more to display to the user.

Another issue that arose was the viewing of the news article details.  As the user scrolled down to view additional headlines, the article details itself would appear at the top of the application page.  In other words, the user would need to click on an article then scroll to the top of the page to view the details of the article.  This was quite cumbersome and unwanted behavior.  I was able to get help with this.  [Nate Ewert-Krocker](https://github.com/NEwertKrocker) solved this issue by making the details view of the article fixed on the screen.  Following his example, I found the CSS property that allowed the details to remain in a fixed location.  (Thank you, Nate, for your example on how to overcome this challenge.)

The biggest challenge I faced was in the filtering functionality.  When I first implemented the filtering functionality, the article that was displayed after the user clicked on an article was not the article that the user clicked on.  This was frustrating to resolve.  Fortunately, I was able to refactor the filtering function from my Listing component to the App component so that the index of the articles in the articles array was pulled correctly.  Thus the user selected article was displayed.  

## Contributors
- [Rachel Bock](http://www.linkedin.com/in/rachelbock)
