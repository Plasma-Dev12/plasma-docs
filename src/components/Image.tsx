"use client";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState, useRef } from "react";

interface ImageProps {
  src: StaticImageData;
  alt: string;
  className?: string;
}

export default function ImageModal({ src, alt, className }: ImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const lastPosition = useRef({ x: 0, y: 0 });

  const handleModalToggle = () => {
    setIsOpen(!isOpen);
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleZoom = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    setZoomLevel((prev) => {
      const newZoom =
        event.deltaY < 0 ? Math.min(prev + 0.1, 3) : Math.max(prev - 0.1, 1);
      if (newZoom === 1) setPosition({ x: 0, y: 0 });
      return newZoom;
    });
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    if (zoomLevel > 1) {
      setIsDragging(true);
      lastPosition.current = {
        x: event.clientX - position.x,
        y: event.clientY - position.y,
      };
    }
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      setPosition({
        x: event.clientX - lastPosition.current.x,
        y: event.clientY - lastPosition.current.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <Image
        src={src}
        alt={alt}
        className={`cursor-pointer w-full rounded-2xl image-shadow ${className}`}
        onClick={handleModalToggle}
      />

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-5"
          onClick={handleModalToggle}
        >
          <div
            className="overflow-hidden cursor-grab m-20"
            onWheel={handleZoom}
            onClick={(e) => e.stopPropagation()}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{ cursor: isDragging ? "grabbing" : "grab" }}
          >
            <img
              src={src.src}
              alt={alt}
              style={{
                transform: `scale(${zoomLevel}) translate(${position.x}px, ${position.y}px)`,
                transition: isDragging ? "none" : "transform 0.2s ease",
              }}
              className="no-drag max-w-full max-h-screen rounded-lg"
            />
            <button
              className="cursor-pointer absolute top-4 right-4 rounded-full p-2 text-white text-4xl font-bold z-50"
              onClick={handleModalToggle}
            >
              ✕
            </button>
          </div>
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute flex justify-center items-center gap-5 text-lg bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-lg"
          >
            {Math.round(zoomLevel * 100)}%
            <p
              onClick={() => setZoomLevel((prev) => Math.min(prev + 0.5, 3))}
              className="select-none cursor-pointer text-3xl p-0 m-0"
            >
              +
            </p>
            <p
              onClick={() => setZoomLevel((prev) => Math.max(prev - 0.5, 1))}
              className="select-none cursor-pointer text-3xl p-0 mb-[7px]"
            >
              -
            </p>
          </div>
        </div>
      )}
    </>
  );
}
