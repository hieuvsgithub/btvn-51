import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  fetchProduct,
} from "../../features/product/productAction";
import { useEffect } from "react";
import { IProduct } from "../../interfaces/IProduct";
import { Link } from "react-router-dom";
import { AppDispatch } from "../../store/store";

const ProductItem = () => {
  const { products, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    (async () => {
      try {
        dispatch(fetchProduct());
      } catch (error) {
        console.log(error);
      }
    })();
    return () => {};
  }, []);

  if (loading) {
    return (
      <tr>
        <td colSpan="4">Loading...</td>
      </tr>
    );
  }
  if (error) {
    return (
      <tr>
        <td colSpan="4">Tải sản phẩm thất bại</td>
      </tr>
    );
  }

  return (
    <>
      {products.length ? (
        products.map((item: IProduct) => {
          return (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>
                <button onClick={() => dispatch(deleteProduct(item.id))}>
                  delete
                </button>
                <Link to={`/update_product/${item.id}`}>update</Link>
              </td>
            </tr>
          );
        })
      ) : (
        <tr>
          <td>ko co sp</td>
        </tr>
      )}
    </>
  );
};

export default ProductItem;
