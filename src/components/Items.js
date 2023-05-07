import Item from "./Item";

const Items = ({itemsList}) => {
    return <div>
        {itemsList.map((item, index) => {
            return <Item key={index} item={item} />
        })}
    </div>
}

export default Items;