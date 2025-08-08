import React, { useState } from "react";
import { BookOpen, Sparkles, Megaphone, Image as ImageIcon, PlayCircle, Download, Mail, Info, Heart, Smile, Shield, Stethoscope, Hospital } from "lucide-react";

// Minimal UI helpers
function Button({ className = "", children, variant = "default", ...props }) {
  const base = "inline-flex items-center px-4 py-2 text-sm font-medium rounded-full transition";
  const variants = {
    default: "bg-amber-500 text-white hover:bg-amber-600",
    outline: "border border-amber-300 text-amber-700 bg-white hover:bg-amber-50"
  };
  return (
    <button className={`${base} ${variants[variant] || ""} ${className}`} {...props}>{children}</button>
  );
}
function Card({ className = "", children }) {
  return <div className={`rounded-2xl shadow-sm bg-white ${className}`}>{children}</div>;
}
function CardContent({ className = "", children }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}
function Input({ className = "", ...props }) {
  return <input className={`border rounded px-3 py-2 w-full ${className}`} {...props} />;
}
function Textarea({ className = "", ...props }) {
  return <textarea className={`border rounded px-3 py-2 w-full ${className}`} {...props} />;
}

export default function App() {
  // ...rest of the code from the earlier response...
  // To save space, paste the full component from the last long response!
}
