import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liên Hệ | Camera Vstarcam ",
  description: "Camera Vstarcam - An Lành Cho Gia Đình Việt",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="w-[100vw] p:h-[30vh] d:h-[700px] bg-center bg-[url(https://firebasestorage.googleapis.com/v0/b/vstarcamvietnam-ebe57.appspot.com/o/1.jpg?alt=media&token=d570701b-d919-41b7-86c0-0cb36c31382f)] bg-no-repeat bg-cover">
        <div className="w-full h-full bg-[rgba(0,0,0,0.16)]"></div>
      </div>
      {children}
    </>
  );
}
