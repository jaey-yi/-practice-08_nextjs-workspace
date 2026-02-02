import Link from "next/link";

interface PostDetailPageProps {
  params: {
    id: string;
  };
}

export default function NewPostPage({ params }: PostDetailPageProps) {
  return (
    <div>
      <p>게시글 작성</p>
      {/* <Link href={`/posts/id/${params}`}></Link> */}
    </div>
  );
}
