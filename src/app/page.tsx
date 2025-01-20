import Link from "next/link";

export default function Home() {
  return (
    <div>
      DASHBOARD
      <Link href={"/cooking"}>go for cooking</Link>
    </div>
  );
}
