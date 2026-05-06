import express from 'express';
const app = express();


app.use(express.json());
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to the Health Check Server',
  });
});
app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is healthy',
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});