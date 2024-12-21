import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { useForm } from "react-hook-form";
import authSchema from "../../schemas/authSchema";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { addUser, fetchUser } from "../../features/user/userAction";
import { useNavigate } from "react-router-dom";

import { IUser } from "../../interfaces/IUser";

const Register = () => {
  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(authSchema) });
  const { users } = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    try {
      dispatch(fetchUser());
    } catch (error) {
      console.log(error);
    }

    return () => {};
  }, []);

  const onSubmit = (data: IUser) => {
    const accountAuth = users.find((item) => item.email === data.email);
    if (accountAuth) {
      confirm("tai khoan da ton tai");
    } else {
      dispatch(addUser(data));
      nav("/login");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} action="">
        <div>
          <label htmlFor="">
            Name
            <input
              type="text"
              placeholder="name..."
              {...register("name", { required: true })}
            />
            {errors.name && <p>{errors.name.message}</p>}
          </label>
        </div>
        <div>
          <label htmlFor="">
            Password
            <input
              type="password"
              placeholder="password..."
              {...register("password", { required: true })}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </label>
        </div>
        <div>
          <label htmlFor="">
            Email
            <input
              type="email"
              placeholder="email..."
              {...register("email", { required: true })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </label>
        </div>
        <div>
          <button>Register</button>
        </div>
      </form>
    </>
  );
};

export default Register;
