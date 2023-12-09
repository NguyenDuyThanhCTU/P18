export default function VideoPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="w-[100vw] p:h-[30vh] d:h-[700px] bg-center bg-[url(https://firebasestorage.googleapis.com/v0/b/vstarcamvietnam-ebe57.appspot.com/o/7.jpg?alt=media&token=4fd01e54-06f9-4879-9a16-7a2664b3be3e)] bg-no-repeat bg-cover">
        <div className="w-full h-full bg-[rgba(0,0,0,0.16)]"></div>
      </div>
      {children}
    </>
  );
}
