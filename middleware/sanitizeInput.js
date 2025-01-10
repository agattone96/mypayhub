export function sanitizeInput(req, res, next) {
  try {
    req.body = JSON.parse(JSON.stringify(req.body).replace(/<\/?[^>]+(>|$)/g, ""));
    next();
  } catch (error) {
    res.status(400).send({ error: 'Invalid input' });
  }
}