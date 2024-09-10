import { Mobile_Data } from "../../data/Phones_data";
import Product from "./Product";
const Products = () => {
    return (
        <div className='main_div'>
            {Mobile_Data.map(e => (
                <Product img={e.img} name={e.name} price={e.price} ram={e.ram} memory={e.memory} OS={e.OS} />
            ))}
        </div>
    )
}

export default Products