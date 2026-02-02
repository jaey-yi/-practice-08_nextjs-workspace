import Link from "next/link";

export default function PostsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">게시글 목록</h1>

      <Link href={"/posts/new"}>게시글 작성</Link>
    </div>
  );
}
