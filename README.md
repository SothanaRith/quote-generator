# Quote Generator App

This is a simple React.js application that fetches random quotes using the Quotable API and allows users to save their favorite quotes.

## Features
- Fetches random quotes from an external API
- Saves favorite quotes to a list using Redux for state management
- Navigation between Home and Favorites pages using React Router
- Displays additional details like tags and date added
- Error handling for API failures
- Mobile-friendly design

## Setup Instructions

### Prerequisites
Ensure you have the following installed:
- Node.js (latest LTS version recommended)
- npm or yarn

### Installation
1. Clone this repository:
   ```sh
   git clone <your-repo-link>
   cd quote-generator-app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

## API Issues & Alternative Solution
The app fetches quotes from `https://api.quotable.io/random`. If the API is down or unreachable, try these alternatives:
1. **Check API in browser** – Open `https://api.quotable.io/random` to see if it's working.
2. **Use a CORS proxy** – Replace the fetch URL in `quoteSlice.js` with:
   ```js
   const response = await fetch("https://cors-anywhere.herokuapp.com/https://api.quotable.io/random");
   ```
   You may need to enable this proxy service first at [CORS Anywhere](https://cors-anywhere.herokuapp.com/).
3. **Use a local mock API** – If the API is unstable, you can create a mock JSON file and fetch data from it.

## Deployment
You can deploy the app using services like:
- Netlify
- Vercel
- GitHub Pages

## License
This project is open-source under the MIT License.
