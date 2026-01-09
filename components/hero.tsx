"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const images = [
  "/socios.png",
  "/fundodiniz.png",
  "/saude.png",
]

export function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="w-full m-0 p-0">
      <div className="relative w-full h-[420px] sm:h-[520px] lg:h-[620px] overflow-hidden bg-background">

        {images.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className={`
              absolute inset-0
              transition-opacity duration-700 ease-in-out
              ${index === current ? "opacity-100" : "opacity-0"}
            `}
          >
            {/* QUADRO DA IMAGEM — COLADO NO TOPO */}
            <div className="absolute top-0 left-0 right-0 border-t border-b border-primary">
              <Image
                src={src}
                alt="Diniz Contabilidade"
                width={1600}
                height={900}
                className="object-contain w-full"
                priority={index === 0}
              />
            </div>
          </div>
        ))}

      </div>
    </section>
  )
}
