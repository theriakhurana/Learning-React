import { useState } from "react";

export default function ShoppingListForm({ addItem }) {
  const [formData, setFormdata] = useState({ product: "", qty: 0 });

  const handleChange = (evt) => {
    setFormdata((currData) => {
      return {
        ...currData,
        [evt.target.name]: evt.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(formData);
    setFormdata({product: "", qty : 0});
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

      <label htmlFor="qty">Quantity :</label>
      <input
        type="text"
        placeholder="qty"
        name="qty"
        id="qty"
        onChange={handleChange}
        value={formData.qty}
      />

      <button>Add Item</button>
    </form>
  );
}
