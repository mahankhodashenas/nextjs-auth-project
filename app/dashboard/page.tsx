"use client";

import Button from "@/components/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface User {
  name: string;
  email: string;
  picture: string;
}

const DashboardPage = () => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      router.push("/login");
      return;
    }
    setUser(JSON.parse(storedUser));
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  if (!user) {
    return <p className="text-center mt-20">Loading ...</p>;
  }

  return (
    <div className="max-w-md w-full mx-auto mt-20 p-6 border rounded-md shadow-md text-center sm:p-8">
      <Image
        src={user.picture}
        alt={user.name}
        width={80}
        height={80}
        className="rounded-full mx-auto mb-4"
      />
      <h1 className="text-2xl sm:text-3xl font-bold mb-2">خوش اومدین {user.name}</h1>
      <p className="mb-6 text-gray-600">{user.email}</p>
      <Button onClick={handleLogout}> خروج </Button>
    </div>
  );
};
export default DashboardPage;
