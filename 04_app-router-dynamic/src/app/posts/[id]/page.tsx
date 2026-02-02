interface PostDetailPageProps {
  params: {
    id: string;
  };
}
export default async function PostDetailPage({ params }: PostDetailPageProps) {
  // 리액트 방식 => const {id} = useParams() 동적세그먼트
  // next 방식 => props 이용
  const { id } = await params;
  return (
    <div>
      <h1>게시글 상세</h1>
      <p> 게시글 ID : {id}</p>
      <p> 게시글 내용: {`이건 ${id} 번째 글 입니다`}</p>
    </div>
  );
}
