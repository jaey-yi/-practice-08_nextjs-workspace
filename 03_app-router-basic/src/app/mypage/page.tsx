export default function MyPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">마이페이지</h1>
      <p>URL: /mypage</p>
      <p>파일경로: app/mypage/page.tsx</p>
      <br />
      <h1 className="text-2xl font-bold">
        <a href="/mypage/orders">주문내역페이지</a>
      </h1>
    </div>
  );
}
