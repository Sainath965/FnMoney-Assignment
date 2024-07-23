const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use(cors());

const taskRoutes = require('./routes/task');
const userRoutes = require('./routes/user');
const contactRoutes = require('./routes/contact');

app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes);
app.use('/api/contacts', contactRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
