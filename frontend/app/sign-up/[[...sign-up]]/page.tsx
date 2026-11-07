import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center p-4">
      <SignUp />
    </div>
  );
}