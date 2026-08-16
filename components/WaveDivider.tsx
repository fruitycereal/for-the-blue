type WaveDividerProps = {
  fill?: string;
  flip?: boolean;
  className?: string;
};

export default function WaveDivider({
  fill = "#1E3765",
  flip = false,
  className = "",
}: WaveDividerProps) {
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      className={`-mt-1 block h-14 w-full sm:h-20 ${flip ? "rotate-180" : ""} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0,80 L0,40 Q360,0 720,40 Q1080,80 1440,40 L1440,80 Z" fill={fill} />
    </svg>
  );
}