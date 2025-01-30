import { useState } from "react";
import Header from "../components/Navbar";
import { useNavigate } from "react-router-dom";
// import categories from "./CategoryPage";

function AddProduct() {
  const navigate = useNavigate();
  const [pname, setPname] = useState('');
  const [pdesc, setPdesc] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [pimage, setPimage] = useState(null);
  const [pimage2, setPimage2] = useState(null);

  const handleSubmit = () => {
    alert("Product Added!");
    navigate('/home');
  };

  return (
    <div>
      <Header />
      <div className="p-3">
        <h2>ADD PRODUCT HERE:</h2>
        
        <label>Product Name</label>
        <input className="form-control" type="text" value={pname}
          onChange={(e) => setPname(e.target.value)} />

        <label>Product Description</label>
        <input className="form-control" type="text" value={pdesc}
          onChange={(e) => setPdesc(e.target.value)} />

        <label>Product Price</label>
        <input className="form-control" type="text" value={price}
          onChange={(e) => setPrice(e.target.value)} />

        <label>Product Category</label>
        <select className="form-control" value={category}
          onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select a category</option>
          <option>Bikes</option>
          <option>Mobiles</option>
          <option>Cloth</option>
          {/* {categories && categories.map((item, index) => (
            <option key={index}>{item}</option>
          ))} */}
        </select>

        <label>Product Image</label>
        <input className="form-control" type="file"
          onChange={(e) => setPimage(e.target.files[0])} />

        <label>Product Second Image</label>
        <input className="form-control" type="file"
          onChange={(e) => setPimage2(e.target.files[0])} />

        <button onClick={handleSubmit} className="btn btn-primary mt-3">
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default AddProduct;
