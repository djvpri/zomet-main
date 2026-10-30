'use client'

import { useRef } from 'react'

/**
 * Screenshot di halaman detail produk yang bisa diklik untuk diperbesar.
 * Memakai <dialog> bawaan browser — tanpa library lightbox, bundle tetap nol tambahan.
 *
 * Berbeda dari ZoomThumb (yang menutupi seluruh kartu di /produk), komponen ini
 * membungkus gambarnya sendiri, jadi aman dipakai di dalam <figure> mana pun.
 */
export default function ZoomGambar({
  src,
  alt,
  width,
  height,
  maxHeight,
  className = '',
}: {
  src: string
  alt: string
  width: number
  height: number
  /** batas tinggi saat ditampilkan di kartu (px) */
  maxHeight?: number
  className?: string
}) {
  const box = useRef<HTMLDialogElement>(null)

  return (
    <>
      <button
        type="button"
        onClick={() => box.current?.showModal()}
        aria-label={`Perbesar gambar ${alt}`}
        className="group relative cursor-zoom-in rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          className={`block h-auto rounded-lg border border-gray-800 ${className}`}
          style={maxHeight ? { maxHeight } : undefined}
        />
        <span className="pointer-events-none absolute bottom-2 right-2 grid h-7 w-7 place-items-center rounded-md border border-gray-700 bg-gray-950/80 text-gray-300 opacity-0 transition-opacity group-hover:opacity-100">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
          </svg>
        </span>
      </button>

      <dialog
        ref={box}
        onClick={(e) => {
          if (e.target === box.current) box.current?.close()
        }}
        className="m-auto max-h-none max-w-none border-0 bg-transparent p-0 backdrop:bg-black/85"
      >
        <div className="flex max-h-[92vh] max-w-[92vw] flex-col items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            className="max-h-[86vh] max-w-[92vw] rounded-xl border border-gray-700 bg-gray-950 object-contain shadow-2xl"
          />
          <button
            type="button"
            onClick={() => box.current?.close()}
            className="cursor-pointer rounded-lg border border-gray-700 bg-gray-900/90 px-4 py-2 text-xs font-semibold text-gray-300 transition-colors hover:border-gray-500 hover:text-white"
          >
            Tutup
          </button>
        </div>
      </dialog>
    </>
  )
}
