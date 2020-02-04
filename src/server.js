import app from './app';
const port = 3000;

app.listen(3000, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
});