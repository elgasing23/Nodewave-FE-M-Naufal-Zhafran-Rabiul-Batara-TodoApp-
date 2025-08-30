"use client";

import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Navbar() {
  return (
    <div className="w-full flex items-center justify-between px-6 py-3 border-b bg-white shadow-sm">
      {/* Left: Search bar */}
      <div className="flex items-center gap-2">
        <span className="text-gray-400 text-sm">★</span>
        <Input
          placeholder="Search (Ctrl+/)"
          className="w-64 h-8 text-sm border-gray-300 focus:ring-blue-400 focus:border-blue-400"
        />
      </div>

      {/* Right: User profile */}
      <div className="flex items-center gap-2">
        <span className="text-gray-700 text-sm">User</span>
        <Avatar>
          <AvatarImage src="https://i.pravatar.cc/40" alt="user" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
