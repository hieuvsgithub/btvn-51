import { Link } from "react-router-dom";
import ProductItem from "./ProductItem";

const ProductList = () => {
  return (
    <>
      <div>
        <Link to="/add_product" className="ml-auto ">
          Add product
        </Link>
        <table className="table-auto">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <ProductItem />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductList;
