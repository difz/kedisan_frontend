import React, { useEffect, useState, useCallback, useRef } from "react";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
} from "framer-motion";
import type { PanInfo, ResolvedValues } from "framer-motion";
import LazyImage from "../components/LazyImage";

interface RollingGalleryProps {
  autoplay?: boolean;
  pauseOnHover?: boolean;
  images?: { id: number; src: string; alt: string }[];
}

const RollingGallery: React.FC<RollingGalleryProps> = ({
  autoplay = false,
  pauseOnHover = false,
  images = [],
}) => {
  const galleryData = images && images.length > 0 ? images : [];

  const [dimensions, setDimensions] = useState({
    faceWidth: window.innerWidth <= 640 ? 150 : 300,
    faceHeight: window.innerWidth <= 640 ? 150 : 200,
  });
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Debounced resize handler to prevent blinking
  const handleResize = useCallback(() => {
    if (resizeTimeoutRef.current) {
      clearTimeout(resizeTimeoutRef.current);
    }

    resizeTimeoutRef.current = setTimeout(() => {
      const mobile = window.innerWidth <= 640;
      setDimensions({
        faceWidth: mobile ? 150 : 300,
        faceHeight: mobile ? 150 : 200,
      });
    }, 150); // 150ms debounce
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, [handleResize]);

  const { faceWidth, faceHeight } = dimensions;
  const faceCount = galleryData.length;

  // Calculate radius based on image width to prevent overlap
  // Add 20px gap between images
  const gap = 20;
  const circumference = faceCount * (faceWidth + gap);
  const radius = circumference / (2 * Math.PI);

  const dragFactor = 0.05;
  const rotation = useMotionValue(0);
  const controls = useAnimation();

  // Use the actual radius for the container width
  const cylinderWidth = radius * 2;

  const transform = useTransform(
    rotation,
    (val: number) => `rotate3d(0,1,0,${val}deg)`
  );

  const startInfiniteSpin = (startAngle: number) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: {
        duration: 40,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    if (autoplay) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    } else {
      controls.stop();
    }
  }, [autoplay]);

  const handleUpdate = (latest: ResolvedValues) => {
    if (typeof latest.rotateY === "number") {
      rotation.set(latest.rotateY);
    }
  };

  const handleDrag = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ): void => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ): void => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);
    if (autoplay) {
      startInfiniteSpin(finalAngle);
    }
  };

  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) controls.stop();
  };

  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    }
  };

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] overflow-hidden bg-[#F7F7F7] isolate">
      {/* Fade edges */}
      <div className="absolute top-0 left-0 h-full w-[24px] sm:w-[48px] z-10 bg-gradient-to-r from-[#F7F7F7] to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 h-full w-[24px] sm:w-[48px] z-10 bg-gradient-to-l from-[#F7F7F7] to-transparent pointer-events-none" />

      <div className="flex h-full items-center justify-center [perspective:1200px] [transform-style:preserve-3d] overflow-hidden">
        <motion.div
          drag="x"
          dragElastic={0}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          animate={controls}
          onUpdate={handleUpdate}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          className="flex min-h-[200px] cursor-grab items-center justify-center [transform-style:preserve-3d] active:cursor-grabbing"
        >
          {galleryData.map((img, i) => (
            <div
              key={img.id}
              className="group absolute flex items-center justify-center [backface-visibility:hidden] will-change-transform"
              style={{
                width: `${faceWidth}px`,
                height: `${faceHeight}px`,
                transform: `rotateY(${(360 / faceCount) * i}deg) translateZ(${radius}px)`,
              }}
            >
              <div className="w-full h-full overflow-hidden flex items-center justify-center">
                <LazyImage
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover rounded-xl border-2 border-white transition-transform duration-300 ease-out group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;
