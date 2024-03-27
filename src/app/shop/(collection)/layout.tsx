import Navbar from '@/components/navbar';

export default function CollectionLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      <>{children}</>
    </>
  );
}
