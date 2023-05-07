import { useState } from "react";


const AddItem = ({addItemToList}) => {
    const [itemName, setItemName] = useState("");
    return <div>
        <input 
        name="itemName"
         value={itemName} 
        onChange={({target}) => setItemName(target.value)} />
        <button type="button" onClick={() => {
            addItemToList({name : itemName});
            setItemName("");
        }}>Add Item</button>
    </div>
}

export default AddItem;