import { z } from "zod";
import Navbar from "../Navbar";
import { useState } from "react";
import { Button } from "../Generic";
import { Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import BASE_URL from "../../config/baseUrl";
import { PasswordInput } from "../ui/password-input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation, useNavigate } from "react-router-dom";

const signUpSchema = z.object({
  email: z.string().email("Noto‘g‘ri email formati"),
  password: z
    .string()
    .min(6, "Parol kamida 6 ta belgidan iborat bo‘lishi kerak"),
});

type SignUpFormData = z.infer<typeof signUpSchema>;

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpFormData) => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Ro‘yxatdan o‘tishda xatolik yuz berdi");
      }

      navigate("/signin");
    } catch (error) {
      console.error("Signup error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar type="signup" />
      <div className="flex items-center justify-center flex-col register w-full px-[3%]">
        <div className="flex flex-col py-[40px] justify-between 768:w-[600px] w-full border-2 border-border-color px-[37px] h-max min-h-max rounded-xl gap-[60px]">
          <div className="flex items-center justify-center w-full gap-[20px]">
            <div
              onClick={() => navigate("/signin")}
              className={`cursor-pointer 992:text-[20px] text-[18px] ${
                location.pathname === "/signin"
                  ? "text-primary-color"
                  : "text-light select-none"
              }`}
            >
              Kirish
            </div>
            <div
              onClick={() => navigate("/signup")}
              className={`cursor-pointer 992:text-[20px] text-[18px] ${
                location.pathname === "/signup"
                  ? "text-primary-color"
                  : "text-light select-none"
              }`}
            >
              Ro'yxatdan o'tish
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col w-full justify-start gap-[50px] h-full"
          >
            <div className="flex flex-col gap-[30px]">
              <div>
                {errors.password && (
                  <p className="text-danger text-[14px] mb-[8px] ml-[4px]">
                    {errors.password.message}
                  </p>
                )}
                <Input
                  variant="subtle"
                  placeholder="Your email address"
                  {...register("email")}
                  className="flex items-center outline-none rounded-[6px] py-[18px] px-[20px] h-max 992:text-[18px] text-[14px]"
                />
              </div>

              <div>
                {errors.password && (
                  <p className="text-danger text-[14px] mb-[8px] ml-[4px]">
                    {errors.password.message}
                  </p>
                )}
                <PasswordInput
                  variant="subtle"
                  placeholder="Your password"
                  {...register("password")}
                  className="flex items-center outline-none rounded-[6px] py-[18px] px-[20px] h-max 992:text-[18px] text-[14px]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-[20px] w-full mt-auto justify-center items-center">
              <Button
                type="solid"
                disabled={loading}
                onClick={handleSubmit(onSubmit)}
                className="w-full font-semibold p-btn-pdg"
              >
                {loading ? "Yuklanmoqda..." : "Yuborish"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
