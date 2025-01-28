import React, { useState, useEffect } from 'react';

function MyOrders() {
  const [orders, setOrders] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    async function fetchUserOrders() {
      // Simulating fetching user orders
      const fetchedOrders = [
        {
          id: '001',
          product: 'Product 1',
          status: 'Shipped',
          date: '2025-01-20',
          total: '$100.00',
        },
        {
          id: '002',
          product: 'Product 2',
          status: 'Delivered',
          date: '2025-01-15',
          total: '$50.00',
        },
        {
          id: '003',
          product: 'Product 3',
          status: 'Processing',
          date: '2025-01-10',
          total: '$200.00',
        },
      ];

      setOrders(fetchedOrders);
    }

    fetchUserOrders();
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <div className="max-w-4xl mx-auto shadow-lg rounded-lg p-6 bg-white">
        <h1 className="text-3xl font-semibold text-blue-700">My Orders</h1>

        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="border p-4 rounded-lg shadow-md bg-white">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-2xl font-semibold text-blue-700">{order.product}</h2>
                  <p className="text-lg text-blue-600">Order ID: {order.id}</p>
                  <p className="text-sm text-blue-500">Order Date: {order.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg text-blue-600">Status: {order.status}</p>
                  <p className="text-xl font-bold text-blue-700">Total: {order.total}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyOrders;
