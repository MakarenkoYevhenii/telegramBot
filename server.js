import {app} from './index.js'


app.listen(3001 || process.env.PORT, '0.0.0.0', () => {
    console.log("Server is running.");
  });
