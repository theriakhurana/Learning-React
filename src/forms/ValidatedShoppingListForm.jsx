import { useState } from "react";

export default function ValidatedShoppingListForm({ addItem }) {
  const [formData, setFormdata] = useState({ product: "", qty: 0 });

  const [productIsValid, setProductIsValid] = useState(false);

  const handleChange = (evt) => {
    if(evt.target.name === "product"){
      validate(evt.target.value);
    }
    setFormdata((currData) => {
      return {
        ...currData,
        [evt.target.name]: evt.target.value,
      };
    });
  };

  const validate = (product) =>{
    if(product.length === 0) setProductIsValid(false);
    else setProductIsValid(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(productIsValid){
      addItem(formData);
      setFormdata({ product: "", qty: 0 });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>
        Product is : {formData.product} and quantity is: {formData.qty}
      </h2>
      <label htmlFor="product">Product :</label>
      <input
        type="text"
        placeholder="product name"
        name="product"
        id="product"
        onChange={handleChange}
        value={formData.product}
      />
      {!productIsValid && (
        <p style={{ color: "red" }}>Product name cannot be empty</p>
      )}

      <label htmlFor="qty">Quantity :</label>
      <input
        type="number"
        placeholder="qty"
        name="qty"
        id="qty"
        onChange={handleChange}
        value={formData.qty}
      />

      <button disabled={!productIsValid}>Add Item</button>
    </form>
  );
}
