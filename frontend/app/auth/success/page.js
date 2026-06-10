import { Suspense } from "react";
import AuthSuccessContent from "./AuthSuccessContent";

export default function AuthSuccess() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><p className="text-gray-500">Redirecting...</p></div>}>
      <AuthSuccessContent />
    </Suspense>
  );
}