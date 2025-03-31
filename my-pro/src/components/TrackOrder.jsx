import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectorders } from "../redux/orderSlice";

const TrackOrder = () => {
    const {id} = useParams()
    const orders =  useSelector(selectorders)
    const order = orders.find((item)=>item.id==id)

  return (
    <div className="max-w-xl mx-auto p-4 border shadow-lg bg-white rounded-lg">
      <h2 className="text-xl font-bold mb-3">Order Tracking</h2>

      {order ? (
        <div>
          <p className="text-gray-600 mb-2">
            <strong>Order ID:</strong> {order.id}
          </p>
          <p className="text-gray-600 mb-2">
            {/* <strong>Expected Delivery:</strong> {order.expectedDelivery} */}
          </p>

          {/* Order Tracking Timeline */}
          <div className="relative">
            {order.tracking.map((step, index) => (
              <div key={index} className="flex items-center gap-4 mb-4">
                <div
                  className={`w-6 h-6 rounded-full ${
                    index === order.tracking.length - 1
                      ? "bg-green-500"
                      : "bg-gray-400"
                  }`}
                ></div>
                <div>
                  <p className="font-semibold">{step.status}</p>
                  <p className="text-gray-500 text-sm">{step.date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <h3 className="text-lg font-bold mt-4">Order Summary</h3>
          <ul className="mt-2">
            {order.cartItems.map((item, index) => (
              <li key={index} className="border p-2 rounded-md shadow-sm">
                <p className="font-medium">{item.name}</p>
                <p className="text-gray-500">Quantity: {item.qty}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TrackOrder;
