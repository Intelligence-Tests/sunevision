import React from 'react';
import whatsapp from "../assets/whatsappicon.jpg";

const WhatsappFeature = () => {
    const openWhatsApp = () => {
        const phoneNumber = "7019918890"; // Replace with the recipient's phone number
        const message = "Hi! I want to know more about 'Sun E-Vision Arch' design plans and services.";
        const whatsappURL = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
        window.open(whatsappURL, "_blank");
    };

    return (
        <div
            className="whatsapp-icon"
            style={{
                position: "fixed",
                bottom: "100px",
                right: "-4px",
                zIndex: 1000,
                cursor: "pointer",
                transition: "all 0.3s ease",
            }}
            onClick={openWhatsApp}
        >
            <img
                src={whatsapp}
                alt="WhatsApp Icon"
                style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "transparent",
                    padding: "5px",
                    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                    transition: "all 0.3s ease",
                }}
            />
        </div>
    );
};

export default WhatsappFeature;
