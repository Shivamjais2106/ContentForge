import Link from "next/link";

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-6">
      
      <h1 className="text-3xl font-bold">Resources</h1>

      <Link href="/resources/blog">Go to Blog</Link>
      <Link href="/resources/docs">Go to Docs</Link>
      <Link href="/resources/helpCenter">Go to Help Center</Link>

    </div>
  );
}