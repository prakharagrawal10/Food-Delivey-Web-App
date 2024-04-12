import React, { useEffect, useState } from 'react';
import './AccountPage.css'; // Import CSS file for styling

const AccountPage = () => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Fetch user data from MongoDB database
        // Replace 'fetchUserData' with your actual API call or database query
        fetchUserData()
            .then(data => setUserData(data))
            .catch(error => console.error(error));
    }, []);

    const fetchUserData = async () => {
        // Perform the API call or database query to fetch user data
        // Replace 'fetch' with your actual API library or database client
        // For now, return hardcoded values
        return { 
            name: "John Doe", 
            email: "john@example.com",
            address: "123 Main St",
            phoneNumber: "123-456-7890",
            // Add more fields as needed
        };
    };

    return (
        <div className="account-page"> {/* Add className for styling */}
            <h1>My Account</h1>
            {userData && (
                <div className="profile-information"> {/* Add className for styling */}
                    <h2>Profile Information</h2>
                    <p>Name: {userData.name}</p>
                    <p>Email: {userData.email}</p>
                    <p>Address: {userData.address}</p>
                    <p>Phone Number: {userData.phoneNumber}</p>
                    {/* Add more profile information fields as needed */}
                </div>
            )}
            <div className="order-history">
                <h2>Order History</h2>
                <div className="order">
                    <p>Order ID: 123456</p>
                    <p>Date: January 1, 2023</p>
                    <p>Total: $25.00</p>
                </div>
                <div className="order">
                    <p>Order ID: 789012</p>
                    <p>Date: February 15, 2023</p>
                    <p>Total: $30.50</p>
                </div>
                {/* Add more order details as needed */}
            </div>
        </div>
    );
};

export default AccountPage;
