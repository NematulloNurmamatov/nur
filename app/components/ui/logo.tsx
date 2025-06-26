import Link from "next/link";
import Image from "next/image";
import logo from "@/src/assets/img/man.jpg";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex" aria-label="Cruip">
      <Image className="rounded-full" src={logo} alt="Logo" width={40} height={40} />
    </Link>
  );
}
