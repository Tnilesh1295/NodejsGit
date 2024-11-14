const fs = require('fs');

// The request handler function
const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    // Serve the form when accessing the root URL
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Read and Write From a File</title></head>');
        res.write('<body>');
        res.write('<form action="/message" method="POST">');
        res.write('<input type="text" name="message">');
        res.write('<button type="submit">Send</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end(); // End the response here
    }

    // Handle form submission on /message
    if (url === '/message' && method === 'POST') {
        const body = [];

        // Collecting data chunks from the request
        req.on('data', (chunk) => {
            body.push(chunk);
        });

        // When all data is received, process it
        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1]; // Extract message from the form data

            // Write the message to a file
            fs.writeFile('message1.txt', message, (err) => {
                if (err) {
                    console.error(err);
                    res.statusCode = 500; // Handle write file errors
                    res.write('Server error');
                    return res.end();
                }

                // Redirect the user after successful file write
                res.statusCode = 302;
                res.setHeader('Location', '/'); // Redirect to the homepage
                return res.end(); // End the response after the redirect
            });
        });
    }

    // Default response for other routes
    res.write('<html>');
    res.write('<head><title>Read and Write From a File</title></head>');
    res.write('<body>This is my first page</body>');
    res.write('</html>');
    res.end(); // Make sure the response ends here
};

// Export the request handler module
module.exports = {
    handler: requestHandler,
    someText: "Some hardcoded text"
};