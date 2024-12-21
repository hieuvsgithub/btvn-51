import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import authSchema from "../../schemas/authSchema";
import { IUser } from "../../interfaces/IUser";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchUser } from "../../features/user/userAction";
import { useEffect } from "react";

const Login = () => {
  const nav = useNavigate();
  const {
    register,
    // reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(authSchema),
  });
  const { users } = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    try {
      dispatch(fetchUser());
    } catch (error) {}

    return () => {};
  }, []);

  const onSubmit = (data: IUser) => {
    console.log(data);
    if (data.email === "trunghieu@gamil.com") {
      nav("/admin");
    } else {
      const accountExists = users.find(
        (item: any) => item.email === data.email
      );
      console.log(accountExists);
      if (accountExists) {
        nav("/");
        console.log(1);
      } else {
        confirm("Tài khoản không tồn tại !!");
      }
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="w-1/4 flex-col px-5 py-10 mx-auto mt-16 border-solid border-2 border-slate-700 rounded-md"
      >
        <h2 className="text-center text-3xl font-semibold mb-8">Login</h2>
        <div className="block">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="block  w-full "
            placeholder="Name..."
            {...register("name", { required: true })}
          />
          {errors.name && <p>{errors.name?.message}</p>}
        </div>

        <div className="block mb-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="block w-full"
            placeholder="Password..."
            {...register("password", { required: true })}
          />
          {errors.password && <p>{errors.password?.message}</p>}
        </div>
        <div className="block mb-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="block  w-full"
            placeholder="email..."
            {...register("email", { required: true })}
          />
          {errors.email && <p>{errors.email?.message}</p>}
        </div>
        <div className="block mb-3">
          <Link className="text-sm font-medium" to="/register">
            Bạn chưa có tài khoản ?
          </Link>
        </div>
        <div className="  block mb-4">
          <button
            className="py-1 border-solid border font-medium border-slate-700 rounded-sm bg-sky-500 block w-3/4 text-center mx-auto"
            type="submit"
          >
            Đăng nhập
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
