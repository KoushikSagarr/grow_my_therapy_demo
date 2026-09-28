export default function AnnouncementBar() {
  return (
    <div className="w-full bg-[#43574D] text-[#F7F4EE] py-2.5 px-4 text-center border-b border-[#37473F] tracking-[0.18em] text-[10px] sm:text-[10.5px] font-normal uppercase select-none transition-colors">
      <div className="container-editorial flex items-center justify-center gap-2">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#A9B7A8]" aria-hidden="true" />
        <p className="truncate">
          In-Person Therapy in Santa Monica &amp; Secure Telehealth Across California
        </p>
      </div>
    </div>
  );
}
