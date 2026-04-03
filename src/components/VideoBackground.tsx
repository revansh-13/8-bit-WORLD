"use client";

export default function VideoBackground() {
  return (
    <div className="fixed inset-0 w-full h-full z-[-1] overflow-hidden pointer-events-none opacity-80 mix-blend-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/8-bit-video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
