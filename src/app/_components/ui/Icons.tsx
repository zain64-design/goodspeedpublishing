import type { IconProps } from '@/app/_types'

export const CurveLine = ({ width = 65, height = 65, className = '', color = '#C2F15E' }: IconProps) => (
<svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 65 65" fill="none" className={className}>
  <path d="M6.5 50.3738C8.83188 44.3776 13.8965 38.6251 18.0556 33.8183C26.867 23.6346 36.6732 12.2168 48.0556 4.81827C54.7417 0.472252 47.728 14.7829 47.1667 16.2627C41.6895 30.7025 32.8031 44.0202 27.9444 58.5961C27.7768 59.0991 27.363 59.6829 27.6111 60.1516C28.2127 61.2879 29.4245 58.3126 30.1667 57.2627C34.0692 51.742 37.758 46.0383 41.4444 40.3738C42.0538 39.4376 55.0073 16.683 57.2778 17.8183C60.1632 19.261 48.7229 40.934 47.3889 43.0961C44.0948 48.4348 49.6912 44.6505 52.5 43.3738" stroke={color} strokeWidth="8" strokeLinecap="round"/>
</svg>
);