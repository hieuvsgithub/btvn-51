import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { useForm } from "react-hook-form";
import actionSchema from "../../schemas/actionSchema";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  addProduct,
  editProduct,
  oderByIdProduct,
} from "../../features/product/productAction";
import { useEffect } from "react";
import { AppDispatch, RootState } from "../../store/store";
import { IProduct } from "../../interfaces/IProduct";

const ActionProduct = () => {
  const { id } = useParams();
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: zodResolver(actionSchema) });

  const nav = useNavigate();
  const { products } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    (async () => {
      try {
        if (id) {
          const productUpdate = await dispatch(oderByIdProduct(id)).unwrap();
          reset(productUpdate);
        }
      } catch (error) {
        console.log(error);
      }
    })();

    return () => {};
  }, []);

  const onSubmit = (data: IProduct) => {
    if (id) {
      console.log(data);
      dispatch(editProduct({ id, data }));
      nav("/");
    } else {
      dispatch(addProduct(data));
      confirm("them san pham thanh cong") && nav("/");
      reset();
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>{id ? <h3>update san pham</h3> : <h3>them san pham</h3>}</div>
        <div>
          <label htmlFor="">
            Title
            <input
              type="text"
              placeholder="title..."
              {...register("title", { required: true })}
            />
            {errors.title && <p>{errors.title.message}</p>}
          </label>
        </div>
        <div>
          <label htmlFor="">
            Price
            <input
              type="text"
              placeholder="price..."
              {...register("price", { valueAsNumber: true })}
            />
            {errors.price && <p>{errors.price.message}</p>}
          </label>
        </div>
        <div>
          <label htmlFor="">
            Description
            <input
              type="text"
              placeholder="description..."
              {...register("description")}
            />
            {errors.description && <p>{errors.description.message}</p>}
          </label>
        </div>
        <div>
          <button>{id ? "update" : "add"}</button>
        </div>
      </form>
    </>
  );
};

export default ActionProduct;
