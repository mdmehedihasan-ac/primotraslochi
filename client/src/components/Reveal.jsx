import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * Wraps children in a scroll-triggered Framer Motion reveal.
 * direction: 'up' | 'left' | 'right' | 'none'
 * delay: seconds
 */
export default function Reveal({ children, direction = 'up', delay = 0, className = '', style = {}, as = 'div' }) {
  const ref   = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px 0px' });

  const hidden = {
    opacity: 0,
    y: direction === 'up'   ?  44 : 0,
    x: direction === 'left' ? -44 : direction === 'right' ? 44 : 0,
  };
  const visible = {
    opacity: 1, y: 0, x: 0,
    transition: { duration: 0.62, delay, ease: [0.16, 1, 0.3, 1] },
  };

  const Tag = motion[as] ?? motion.div;

  return (
    <Tag
      ref={ref}
      className={className}
      style={style}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{ hidden, visible }}
    >
      {children}
    </Tag>
  );
}
