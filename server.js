const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);


mongoose.connect(DB)
  .then(() => {
    console.log('DB connection successful!');
  })
  .catch((err) => {
    console.log('DB connection failed!', err);
  });


const port = process.env.PORT || 3000;
app.listen(port, 'localhost', () => {
  console.log(`App running on port ${port}...`);
});
