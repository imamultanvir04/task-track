
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (

    <div className="min-h-screen">
      {/**Hero Section */}
      <section className="container mx-auto py-20 text-center">
      
      <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold gradient-title pb-6 flex flex-col">
        Track Your Workflow <br/>
        <span className="flex mx-auto gap-3 sm:gap-4 items-center">
          With {" "}
          <Image
             src={"/logo2.png"}
             alt="Task Tracker Logo"
             width={400}
             height={80}
             className="h-14  sm:h-28 w-auto object-contain"
             />
             
        </span>
      </h1>

    <p className="text-xl text-gray-800 mb-10 max-w-3xl mx-auto">Boost your team with our intuitive project management solution</p>

    <Link href="/onboarding"> 
    <Button size="lg" className="mr-2">
      Get Started <ChevronRight size={18} className="ml-1" />
      </Button> 
      </Link>

      <Link href="/sign-up"> 
    <Button size="lg" className="mr-4">
      Register <ChevronRight size={18}  />
      </Button> 
      </Link>


      
    </section>
    </div>
  );
}
