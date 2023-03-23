Eso extension that does the following:

- Obtains position of current browser window using a basic calculation based on screen height & width and window height & width
- Obtains coordinates of email field and continue button using clientrects
- Creates listener for headers being sent, captures the Sh*pe headers & blocks outgoing request to endpoint
- Posts the headers in JSON format over TCP to local server that holds headers for bot to use & controls header harvesting browser
- Blocks the outgoing request to email check endpoint using a non Sh*pe detected method
