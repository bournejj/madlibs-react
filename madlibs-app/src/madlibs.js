import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

import MadLibsForm from "./MadlibsForm";


const Madlibs = () => {
 
//   const [items, setItems] = useState(INITIAL_STATE);
//   const addItem = (newItem) => {
//     setItems(items => [...items, { ...newItem, id: uuid() }])
//   }
  return (
    <div>
      
      <MadLibsForm />
      <div>
        {/* {items.map(({ id, name, qty }) => <Item id={id} name={name} qty={qty} key={id} />)} */}
      </div>

    </div>
  )

}

export default Madlibs;