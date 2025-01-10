export default (req, res) => {
  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;

  console.log('Client ID:', clientId);
  // Your logic using these credentials...

  res.status(200).json({ message: 'Success' });
};