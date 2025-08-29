"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const schema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  remember: z.boolean().optional(),
});

type FormData = z.infer<typeof schema>;

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
<div className="flex min-h-screen items-center justify-center bg-gray-50">
  <div className="w-full max-w-md">
    <div className="text-center mb-15">
      <h1 className="text-[56px] font-bold text-gray-800 font-poppins">Sign In</h1>
      <p className="mt-5 text-gray-500 whitespace-nowrap">
        Just sign in if you have an account in here. Enjoy our Website
      </p>
    </div>

    <Card className="shadow-md">
      <CardHeader>
        <CardTitle className="sr-only">Login</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          {/* Email */}
          <div className="relative w-full">
            <label
              htmlFor="email"
              className="absolute -top-2 left-3 bg-white px-1 text-sm text-blue-400"
            >
              Your Email / Username
            </label>
            <input
              id="email"
              type="email"
              placeholder="soeraji@squareteam.com"
              className="w-full rounded-lg border border-blue-300 px-3 py-2 text-gray-800 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Password */}
          <div className="relative w-full">
            <label
              htmlFor="password"
              className={`absolute -top-2 left-3 bg-white px-1 text-sm 
              ${errors.password ? "text-red-400" : "text-blue-400"}`}
            >
              Enter Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              {...register("password")}
              className={`w-full rounded-lg px-3 py-2 text-gray-800 outline-none 
              ${errors.password 
                ? "border border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500" 
                : "border border-blue-300 focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
              }`}
            />
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Remember Me + Forgot Password */}
          <div className="flex items-center justify-between space-y-3">
            <div className="flex items-center gap-2">
              <Checkbox id="remember" {...register("remember")} />
              <Label htmlFor="remember">Remember Me</Label>
            </div>
            <a
              href="#"
              className=" text-sm text-blue-600 hover:underline"
            >
              Forgot Password
            </a>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col space-y-5">
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Login
          </Button>
          <p className="text-sm text-center text-gray-600">
            Don't have account?{" "}
            <Link href="/login" className="text-blue-600 hover:underline">
              Register
            </Link>
          </p>
        </CardFooter>
      </form>
    </Card>
  </div>
</div>

  );
}
