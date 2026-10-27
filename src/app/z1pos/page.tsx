import { redirect } from 'next/navigation'

// URL lama /z1pos sudah pindah ke /produk/z1-pos
export default function LegacyZ1Pos() {
  redirect('/produk/z1-pos')
}
