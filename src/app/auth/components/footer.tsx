export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className='flex h-[72px] items-center gap-1 justify-center'>
      <span className='text-regular-normal'>© {year} Stardust Threads</span>
    </footer>
  );
}
