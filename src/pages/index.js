import Image from "next/image";
import { Inter } from "next/font/google";
import Blog from "./Blog";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex">
      <Blog />
    </div>
  );
}
