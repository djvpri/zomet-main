'use client'
import { useState } from 'react'

interface Props {
  url: string
  title: string
  description: string
}

export default function ShareButtons({ url, title, description }: Props) {
  const [copied, setCopied] = useState(false)
  const [igToast, setIgToast] = useState(false)

  const encodedUrl = encodeURIComponent(url)
  const encodedText = encodeURIComponent(`${title}\n\n${url}`)

  function copyLink() {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    })
  }

  async function shareInstagram() {
    if (navigator.share) {
      try {
        await navigator.share({ title, text: description, url })
        return
      } catch {}
    }
    // Fallback desktop: copy link
    navigator.clipboard.writeText(url).then(() => {
      setIgToast(true)
      setTimeout(() => setIgToast(false), 3000)
    })
  }

  const shares = [
    {
      key: 'wa',
      label: 'WhatsApp',
      icon: 'bi-whatsapp',
      color: 'hover:text-green-400 hover:border-green-400/40 hover:bg-green-400/5',
      onClick: () => window.open(`https://wa.me/?text=${encodedText}`, '_blank'),
    },
    {
      key: 'fb',
      label: 'Facebook',
      icon: 'bi-facebook',
      color: 'hover:text-blue-400 hover:border-blue-400/40 hover:bg-blue-400/5',
      onClick: () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, '_blank', 'width=600,height=400'),
    },
    {
      key: 'ig',
      label: 'Instagram',
      icon: 'bi-instagram',
      color: 'hover:text-pink-400 hover:border-pink-400/40 hover:bg-pink-400/5',
      onClick: shareInstagram,
    },
    {
      key: 'copy',
      label: copied ? 'Tersalin!' : 'Salin Link',
      icon: copied ? 'bi-check2' : 'bi-link-45deg',
      color: copied
        ? 'text-green-400 border-green-400/40 bg-green-400/5'
        : 'hover:text-white hover:border-gray-500 hover:bg-white/5',
      onClick: copyLink,
    },
  ]

  return (
    <div className="mt-12 pt-8 border-t border-gray-800">
      <p className="text-sm text-gray-500 mb-4 flex items-center gap-2">
        <i className="bi bi-share" /> Bagikan artikel ini
      </p>

      <div className="flex flex-wrap gap-3">
        {shares.map((s) => (
          <button
            key={s.key}
            onClick={s.onClick}
            className={`inline-flex items-center gap-2 rounded-lg border border-gray-700 px-4 py-2 text-sm text-gray-400 transition-all duration-200 cursor-pointer ${s.color}`}
          >
            <i className={`bi ${s.icon} text-base`} />
            {s.label}
          </button>
        ))}
      </div>

      {/* Toast Instagram desktop */}
      {igToast && (
        <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-pink-500/10 border border-pink-500/20 px-4 py-2.5 text-sm text-pink-300">
          <i className="bi bi-instagram" />
          Link disalin! Buka Instagram lalu paste di story atau bio kamu.
        </div>
      )}
    </div>
  )
}
