"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { fetchRandomUser } from "@/lib/api";
import { isValidateIranianPhone } from "@/lib/validation";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    if (!isValidateIranianPhone(phone.trim())) {
      setError("شماره تلفن همراه معتبر نیست");
      return;
    }
    setError("");
    setLoading(true);

    try {
      const userData = await fetchRandomUser();
      localStorage.setItem("user", JSON.stringify(userData));
      router.push("/dashboard");
    } catch (error) {
      setError("خطا در دریافت اطلاعات کاربر");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded-md shadow-md sm:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Login</h1>
      <Input
        label="شماره تلفن همراه"
        value={phone}
        onChange={setPhone}
        error={error}
        placeholder="09xxxxxxxxx"
      />
      <Button loading={loading} onClick={handleLogin}>
        ورود
      </Button>
    </div>
  );
};

export default LoginPage;
