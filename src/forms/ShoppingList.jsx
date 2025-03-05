import { useState } from "react";
import ValidatedShoppingListForm from "./ValidatedShoppingListForm";
// import ShoppingListForm from "./ShoppingListForm";
import {v4 as uuid} from "uuid";

export default function ShoppingList() {
  const [items, setItems] = useState([
    { id: uuid(), product: "Bananas", qty: 8 },
    { id: uuid(), product: "Eggs", qty: 12 },
  ]);

  const addItem = (item) => {
    setItems((currItems) => {
      return [...currItems, {...item, id: uuid()}];
    });
  }

  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.product} - {item.qty}
            </li>
          );
        })}
      </ul>
      <ValidatedShoppingListForm addItem = {addItem}/>
    </div>
  );
}
