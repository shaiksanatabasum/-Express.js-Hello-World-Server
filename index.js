const express = require('express'); // Import express 
const app = express();             
// Define route for root URL 
app.get('/', (req, res) => { 
res.send('Hello World from Express!'); 
}); 
// Start server on port 3000 
const PORT = 3000; 
app.listen(PORT, () => { 
console.log(`Server is running on 
http://localhost:${PORT}`); 
});