export default function Skeleton() {
  return (
    <div className='flex flex-col items-center gap-4 w-[100%] max-w-[339px] animate-pulse'>
      <div className='w-full h-[336px] bg-gray-100' />
      <div className='flex items-start self-stretch justify-between mt-3'>
        <div className='w-32 h-6 bg-gray-100 rounded-normal' />
        <div className='w-20 h-6 bg-gray-100 rounded-normal' />
      </div>
      <div className='w-full h-12 bg-gray-100 rounded-normal' />
    </div>
  );
}
