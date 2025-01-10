/* src/pages/api/landlord/tenants.js */
  export default function handler(_, res) {
    res.status(200).json([
      { id: 1, name: "Alice", paymentStatus: "On Time", balance: 0 },
      { id: 2, name: "Bob", paymentStatus: "Late", balance: 150 },
    ]);
  }
  ```