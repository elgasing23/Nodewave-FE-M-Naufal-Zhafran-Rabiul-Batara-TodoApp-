"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Router } from "lucide-react";

const schema = z
  .object({
    firstName: z.string().min(1, "First name required"),
    lastName: z.string().min(1, "Last name required"),
    phone: z.string().min(8, "Phone number not valid"),
    country: z.string().min(1, "Country required"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Min 6 chars"),
    confirmPassword: z.string().min(6, "Confirm password"),
    about: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof schema>;

export default function RegisterPage() {
  const router = useRouter();
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
      <div className="w-full max-w-xl">
        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-[48px] font-bold text-gray-800 font-poppins">
            Register
          </h1>
          <p className="mt-3 text-gray-500">
            Let’s sign up first for enter into Square Website. Uh She Up!
          </p>
        </div>

        {/* Card */}
        <Card className="shadow-lg border-0 rounded-2xl">
          <form onSubmit={handleSubmit(onSubmit)}>
            <CardContent className="grid grid-cols-2 gap-4 p-8">
              {/* First Name */}
              <div className="relative w-full">
                <label
                  htmlFor="firstName"
                  className="absolute -top-2 left-3 bg-white px-1 text-sm text-blue-400"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  {...register("firstName")}
                  placeholder="Soeraji"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-800 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none"
                />
                {errors.firstName && (
                  <p className="text-xs text-red-500 mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              {/* Last Name */}
              <div className="relative w-full">
                <label
                  htmlFor="lastName"
                  className="absolute -top-2 left-3 bg-white px-1 text-sm text-blue-400"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  {...register("lastName")}
                  placeholder="Doe"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-800 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none"
                />
              </div>

              {/* Phone */}
              <div className="relative w-full col-span-1">
                <label
                  htmlFor="phone"
                  className="absolute -top-2 left-3 bg-white px-1 text-sm text-blue-400"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+62"
                  {...register("phone")}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-800 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none"
                />
              </div>

              {/* Country */}
              <div className="relative w-full">
                <label
                  htmlFor="country"
                  className="absolute -top-2 left-3 bg-white px-1 text-sm text-blue-400"
                >
                  Your Country
                </label>
                <select
                  id="country"
                  {...register("country")}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-800 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none"
                >
                  <option value="">Select Country</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Email */}
              <div className="relative w-full col-span-2">
                <label
                  htmlFor="email"
                  className="absolute -top-2 left-3 bg-white px-1 text-sm text-blue-400"
                >
                  Mail Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="soeraji@squareteam.com"
                  {...register("email")}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-800 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none"
                />
              </div>

              {/* Password */}
              <div className="relative w-full">
                <label
                  htmlFor="password"
                  className="absolute -top-2 left-3 bg-white px-1 text-sm text-blue-400"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  {...register("password")}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-800 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none"
                />
              </div>

              {/* Confirm Password */}
              <div className="relative w-full">
                <label
                  htmlFor="confirmPassword"
                  className="absolute -top-2 left-3 bg-white px-1 text-sm text-blue-400"
                >
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  {...register("confirmPassword")}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-800 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none"
                />
              </div>

              {/* About */}
              <div className="relative w-full col-span-2">
                <label
                  htmlFor="about"
                  className="absolute -top-2 left-3 bg-white px-1 text-sm text-blue-400"
                >
                  Tell us about yourself
                </label>
                <textarea
                  id="about"
                  placeholder="Hello my name..."
                  rows={3}
                  {...register("about")}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-800 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none"
                />
              </div>
            </CardContent>

            <CardFooter className="flex gap-4 px-8 pb-5 justify-between">
            <Button
                type="button"
                variant="outline"
                onClick={() => router.push("/signin")} 
                className="w-1/2 bg-white border border-gray-300 text-gray-700 hover:bg-gray-100"
            >
            Login
            </Button>
            <Button
                type="submit"
                className="w-1/2 bg-blue-600 hover:bg-blue-700 text-white"
            >
            Register
            </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}
