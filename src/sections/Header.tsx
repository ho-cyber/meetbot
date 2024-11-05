import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "../assets/972f5064-085f-418b-a711-5244265a4c4a.png";
import MenuIcon from "@/assets/menu.svg";
import Image from "next/image";
import Link from 'next/link';


export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">Explore the intricacies of Maths and Science</p>
        <div className="inline-flex gap-1 items-center">
          <p>Explore Maths and Science Programmes</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>

      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Saas Logo" height={60} width={200} />
            <MenuIcon className="h-5 w-5 md:hidden" />

            <nav className="hidden md:flex gap-6 text-black/60 items-center">
            <Link href="/programmes">Programmes</Link> {/* Link to the new Programmes page */}

              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">Get for free</button>
            </nav>

          </div>
        </div>
      </div>
    </header>
  );
};
