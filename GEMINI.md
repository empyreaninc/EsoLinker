# Project: EsoLinker

## Project Overview

EsoLinker is a Chrome browser extension designed to intercept and analyze network traffic for a specific website. Its primary function is to capture proprietary headers (prefixed with `Sh*pe` or `exj5WzXnUF-`) from requests made to `api.endclothing.com`. 

In addition to header harvesting, the extension gathers contextual browser information, including:
- The coordinates of the email input field and continue button on the page.
- The browser window's current position and dimensions.

All captured data is then transmitted via HTTP POST requests to a local server running on `http://127.0.0.1:3000`. The original outgoing request to the target endpoint is blocked.

This extension appears to be a tool for automating or interacting with the checkout or sign-up process on `endclothing.com`, likely for a bot or other automated system that requires valid headers to operate.

## Building and Running

This project is a simple, plain JavaScript Chrome extension and does not have any build process or dependencies managed by a package manager.

### Running the Extension

1.  **Start the local server:** Before running the extension, you must have the corresponding local server application running and listening for requests on `http://127.0.0.1:3000`. This server is responsible for receiving and processing the data sent by the extension.
2.  **Load the extension in Chrome:**
    *   Open Google Chrome and navigate to `chrome://extensions`.
    *   Enable "Developer mode" using the toggle switch in the top-right corner.
    *   Click the "Load unpacked" button.
    *   Select the directory containing this project's files (`EsoLinker`).
3.  **Activate the extension:** Once loaded, the extension will be active. It will automatically run on pages that match its criteria, specifically looking for requests to `api.endclothing.com`.

### Testing

There are no automated tests included in this project. To test the extension, you would need to:
1.  Run the local server.
2.  Load the extension in Chrome.
3.  Navigate to a page on `endclothing.com` that triggers a request to the `.../email-availability` endpoint.
4.  Monitor the console logs in the extension's background page and the output of your local server to verify that the correct headers and data are being captured and transmitted.

## Development Conventions

The codebase does not follow any explicit coding style or conventions. It is written in a straightforward, procedural style using plain JavaScript.

- **Dependencies:** The project has no external npm dependencies.
- **Linting/Formatting:** There are no linting or formatting tools (like ESLint or Prettier) configured.
- **Architecture:** The logic is primarily contained within the `background.js` script. A `content.js` file exists but is currently empty/commented out. The extension follows a simple event-driven model based on browser events like web requests and page navigation.
