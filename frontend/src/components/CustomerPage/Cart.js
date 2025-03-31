import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import CartTable from "./CartTable";
import OrderTable from "../DefaultPage/OrderTable";
import "./Cart.css";

const Cart = () => {
    const [view, setView] = useState("cart");
    const [showSummary, setShowSummary] = useState(false);
    const navigate = useNavigate();

    const handleCheckout = async () => {
        alert("Order placed successfully!");
        setShowSummary(false);
    };

    return (
        <div className="container mt-4 text-gold">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <h3 className="text-gold">My {view === "cart" ? "Cart" : "Orders"}</h3>
            </div>
            
            <div className="btn-group mb-3">
                <button 
                    className={`btn ${view === "cart" ? "btn-custom" : "btn-outline-custom"}`} 
                    onClick={() => setView("cart")}
                >
                    Cart
                </button>
                <button 
                    className={`btn ${view === "orders" ? "btn-custom" : "btn-outline-custom"}`} 
                    onClick={() => setView("orders")}
                >
                    Orders
                </button>
            </div>
            
            <div className="card p-3 border-gold">
                {view === "cart" ? <CartTable /> : <OrderTable />}
            </div>

            {showSummary && (
                <div className="modal show d-block" tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content border-gold">
                            <div className="modal-header bg-gold text-dark">
                                <h5 className="modal-title">Order Summary</h5>
                                <button 
                                    type="button" 
                                    className="btn-close" 
                                    onClick={() => setShowSummary(false)}
                                ></button>
                            </div>
                            <div className="modal-body text-gold">
                                <CartTable summaryMode={true} />
                            </div>
                            <div className="modal-footer">
                                <button 
                                    className="btn btn-custom" 
                                    onClick={handleCheckout}
                                >
                                    Confirm Order
                                </button>
                                <button 
                                    className="btn btn-outline-custom" 
                                    onClick={() => setShowSummary(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <button 
                onClick={() => navigate(-1)} 
                className="btn btn-outline-custom mt-3"
            >
                ⬅ Back
            </button>
        </div>
    );
};

export default Cart;
