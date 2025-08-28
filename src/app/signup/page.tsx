import { GalleryVerticalEnd } from "lucide-react";
import Image from "next/image";
import { SignupForm } from "@/components/signup-form";

export default function SignupPage() {
  return (
    <div className="relative min-h-svh overflow-hidden">
      {/* Full page background image */}
      <div className="absolute inset-0">
        <Image
          src="/signupillustration.png"
          alt="Image"
          fill
          className="object-cover dark:brightness-[0.2] dark:grayscale"
          priority
        />
      </div>
      <div className="relative z-10 min-h-svh lg:w-1/2">
        <div className="min-h-svh backdrop-blur-lg bg-white/80 dark:bg-black/50 border-r border-white/20 rounded-tr-4xl rounded-br-4xl">
          <div className="flex flex-col gap-4 p-6 md:p-10 min-h-svh">
            <div className="flex justify-center gap-2 md:justify-start">
              <a href="#" className="flex items-center gap-2 font-medium">
                <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                FlashIt
              </a>
            </div>
            <div className="flex flex-1 items-center justify-center">
              <div className="w-full max-w-xs">
                <SignupForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
