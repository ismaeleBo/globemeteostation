# GlobeMeteoStation

GlobeMeteoStation is a React application that displays meteorological information using different APIs. It provides real-time weather updates and local time information for various locations around the globe.

Redux Toolkit's RTK Query module was used to handle API calls, I am aware that there are more immediate solutions but I still wanted to use RTK because of its excellent cache management system and because it will allow me to extend the app easily when I want to integrate new API calls, plus having Redux Toolkit already configured it will be easy to integrate other slices later to implement new features such as favorites management, global behaviors specific to certain weather conditions and more.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [APIs Used](#apis-used)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Environment Variables](#environment-variables)
- [License](#license)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ismaeleBo/globemeteostation
   ```
2. Navigate to the project directory:
   ```bash
   cd globemeteostation
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Prerequisites

Before you begin, ensure you have met the following requirements:

1. **Node.js and npm**:

   - You need to have Node.js installed on your machine. You can download it from the [official Node.js website](https://nodejs.org/). npm (Node Package Manager) is included with Node.js.
   - Verify the installation by running the following commands in your terminal:
     ```bash
     node -v
     npm -v
     ```

2. **API Key**:

   - Obtain an API key from [TimeZoneDB](https://timezonedb.com/api). This key is required to fetch time-related information for various locations.

3. **Git**:
   - Ensure Git is installed on your machine for cloning the repository. You can download it from the [official Git website](https://git-scm.com/).
   - Verify the installation by running the following command in your terminal:
     ```bash
     git --version
     ```

Having these prerequisites will ensure a smooth setup and development experience with GlobeMeteoStation.

## Usage

1. Set up environment variables. Create a `.env` file in the root directory of the project based on the provided `env.example` file:
   ```bash
   cp env.example .env
   ```
   Add your API key for the TimeZoneDB API:
   ```env
   REACT_APP_TIMEZONEDB_API_KEY=your_api_key_here
   ```
2. Start the development server:
   ```bash
   npm start
   ```
3. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## APIs Used

- **Open Street Map API**: Used to fetch geographical locations based on a query.
- **Open Meteo API**: Provides weather information for a specified location.
- **TimeZoneDB API**: Fetches local time for a specified location using the TimeZoneDB API (the only one that requires an api key).

## Project Structure

```plaintext
globemeteostation/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── api/
│   │   ├── api.ts
│   │   ├── constants.ts
│   │   ├── transforms.ts
│   │   └── types.ts
│   ├── components/
│   │   ├── SearchBox
│   │   ├── SearchInput
│   │   ├── SearchResult
│   │   └── ...
│   ├── store/
│   │   ├── index.ts
│   │   └── ...
|   ├── theme/
|   |   ├── index.ts
|   |   ├── palette.ts
│   │   └── typography.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── .env.example
├── package.json
└── README.md
```

## Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in development mode. Open `http://localhost:3000` to view it in the browser.
- `npm build`: Builds the app for production to the `build` folder.
- `npm test`: Launches the test runner in the interactive watch mode.
- `npm eject`: If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Happy coding!
