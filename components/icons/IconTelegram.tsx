import React from 'react'

const IconTelegram: React.FC<React.SVGProps<SVGSVGElement>> = ({
  width,
  height,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    style={{ marginRight: '8px' }}
  >
    <path d="M9.999 16.2 9.84 19c.36 0 .52-.16.72-.36l1.72-1.64 3.56 2.6c.66.36 1.16.16 1.34-.6l2.42-11.4c.24-1.08-.4-1.52-1.06-1.26L3.18 10.9c-1.04.4-1.02.96-.18 1.2l4.6 1.44 10.68-6.72c.5-.3.96-.14.58.2l-8.87 7.38z" />
  </svg>
)

export default IconTelegram
