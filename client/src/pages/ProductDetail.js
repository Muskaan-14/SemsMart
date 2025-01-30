// import { useParams } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Navbar";

function ProductDetail() {
//   const { productId } = useParams();
  
  // Dummy Product Data
  const [product, setProduct] = useState({
    pname: "Maruti Suzuki Swift 2021",
    pdesc: "2021 - 29,000 km - Excellent Condition",
    price: "425000",
    category: "Autos",
    pimage: "/images/product1.jpg",
    // pimage2: "https://via.placeholder.com/400",
    addedBy: "Nidhi Jain",
  });

  // Dummy User Data
  const [user, setUser] = useState(null);

  const handleContact = () => {
    setUser({
      username: "Nidhi Jain",
      mobile: "9832938221",
      email: "Nidhi.Jain@securemeters.com",
    });
  };

  return (
    <>
      <Header />
      <h2 style={{ textAlign: "center", margin: "20px 0", color: "#333" }}>
        PRODUCT DETAILS
      </h2>

      <div style={{ 
        display: "flex", 
        justifyContent: "space-around", 
        flexWrap: "wrap", 
        padding: "20px" 
      }}>
        {/* Product Image Section */}
        <div style={{ flex: "1", maxWidth: "50%", textAlign: "center" }}>
          <img 
            src={product.pimage} 
            alt="Product" 
            style={{ width: "100%", maxWidth: "400px", height: "auto", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }} 
          />
          {product.pimage2 && (
            <img 
              src={product.pimage2} 
              alt="Product 2" 
              style={{ width: "100%", maxWidth: "400px", height: "auto", marginTop: "10px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }} 
            />
          )}
          <h6 style={{ marginTop: "15px", fontSize: "18px", color: "#555" }}>
            Product Details:
          </h6>
          <p style={{ color: "#666", fontSize: "16px" }}>{product.pdesc}</p>
        </div>

        {/* Product Info Section */}
        <div style={{ flex: "1", maxWidth: "40%", padding: "20px" }}>
          <h3 style={{ margin: "10px 0", color: "#d9534f" }}>
            Rs. {product.price} /-
          </h3>
          <p style={{ fontSize: "18px", color: "#333", fontWeight: "bold" }}>
            {product.pname} | {product.category}
          </p>
          <p style={{ fontSize: "16px", color: "#5cb85c" }}>
            {product.pdesc}
          </p>

          <button 
            onClick={handleContact} 
            style={{
              backgroundColor: "#0275d8",
              color: "#fff",
              padding: "10px 15px",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
              marginTop: "15px",
              transition: "0.3s"
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = "#025aa5"}
            onMouseOut={(e) => e.target.style.backgroundColor = "#0275d8"}
          >
            SHOW CONTACT DETAILS
          </button>

          {user && (
            <div style={{ marginTop: "20px", padding: "15px", border: "1px solid #ddd", borderRadius: "10px", backgroundColor: "#f9f9f9", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
              <h4 style={{ color: "#333" }}>{user.username}</h4>
              <h3 style={{ color: "#0275d8" }}>{user.mobile}</h3>
              <h6 style={{ color: "#777" }}>{user.email}</h6>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
