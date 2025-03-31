import React, { useEffect, useState } from 'react'
import { getData } from './api';
import { toast } from 'react-toastify';
import axios from 'axios';

const CouponCode = ({total}) => {
    const [discountedPrice, setDiscountedPrice] = useState(total);
    const [selectedCoupon, setSelectedCoupon] = useState(null);
    const [couponMessage, setCouponMessage] = useState("");
    const [coupons,setCoupons] = useState([])
    useEffect(()=>{
         getData(`${import.meta.env.VITE_BASE_URL}/coupons`).then((res)=>{  
               setCoupons(res)   })
              .catch((err)=>{ toast.error(err.message)})
    },[])

    const [userOrders, setUserOrders] = useState([]);

  const {username} = JSON.parse(sessionStorage.getItem("3rdfeb"))
  useEffect(() => {
    const fetchUserOrders = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/orders?username=${username}`
        );
        setUserOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
        toast.error("Failed to load order history.");
      }
    };

    fetchUserOrders();
  }, [username]);

    const applyCoupon = (selectedCode) => {
        const couponData = coupons.find((c) => c.code === selectedCode);
    
        if (!couponData) {
          setSelectedCoupon(null);
          setCouponMessage("");
          return;
        }
    
        const hasUsedCoupon = userOrders.some((order) => order.appliedCoupon === selectedCode);
    
        if (hasUsedCoupon) {
          toast.error("This coupon has already been used.");
          return;
        }
    
        if (total < couponData.minPrice) {
          setSelectedCoupon(null);
          setCouponMessage(
            `❌ Coupon "${couponData.code}" applies only for orders above ₹${couponData.minPrice}.`
          );
          return;
        }
    
        setSelectedCoupon(couponData);
        setCouponMessage(`✅ Coupon "${couponData.code}" applied!`);
    
        let newPrice = total;
        if (couponData.type === "percentage") {
          newPrice = total - (total * couponData.value) / 100;
        } else if (couponData.type === "flat") {
          newPrice = total - couponData.value;
        }
    
        setDiscountedPrice(newPrice);
        sessionStorage.setItem("discountedPrice",newPrice);
        sessionStorage.setItem("appliedCoupon", couponData.code);
      };
    
      const cancelCoupon = () => {
        setSelectedCoupon(null);
        setCouponMessage("");
        setDiscountedPrice(total);
      };

  return (
    <div className='card mb-3 p-2'>
        <h1>Apply Coupon</h1> <hr/>
        <div className="card-body">
        <select  onChange={(e) => applyCoupon(e.target.value)}
        className="w-full p-2 border rounded-md mb-2"
        value={selectedCoupon ? selectedCoupon.code : ""} >
        <option value="" selected disabled>Select a Coupon</option>
        {coupons.map((c) => (
          <option key={c.code} value={c.code}>
            {c.code} - {c.type === "percentage" ? `${c.value}% Off` : `₹${c.value} Off`} 
            {` (Min: ₹${c.minPrice})`}
          </option>
        ))}
      </select>
        <br/>
      {couponMessage && (
        <p className={`mt-2  ${selectedCoupon ? "text-success" : "text-danger"}`}>
          {couponMessage} </p>  )}
        <span className=" mt-4">Total Price: ₹{discountedPrice}</span> <br/>


      {selectedCoupon && (
        <button
          onClick={cancelCoupon}
          className="btn btn-danger mt-3"
        >
          Cancel Coupon
        </button>
      )}
        </div>
      
    </div>

  )
}

export default CouponCode
