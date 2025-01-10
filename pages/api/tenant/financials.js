export default function handler(_, res) {
  res.status(200).json({
    totalPayments: 1500,
    lateFees: 75,
    remainingBalance: 225,
  });
}
