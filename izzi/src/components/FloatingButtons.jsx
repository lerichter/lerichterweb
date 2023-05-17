import { ChevronsUp } from 'lucide-react'
import Image from 'next/image'
import whatsAppIcon from '@/images/whatsapp-icon.svg'

function WhatsappIcon() {
  return (
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#4aca59] rounded-full h-12 w-12 flex items-center justify-center shadow-lg hover:bg-[#3e9e4f] transition-all hover:translate-y-[-4px]"
    >
      <Image
        src={whatsAppIcon}
        className='w-6 h-6'
        alt="Whatsapp"
        width={60}
        height={60}
      />
    </a>
  )
}

function ScrollToTopButton() {
  return (
    <button
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }}
      className="bg-pink rounded-full h-12 w-12 flex items-center justify-center shadow-lg hover:bg-neutral-500 transition-all hover:translate-y-[-4px]"
    >
      <ChevronsUp className="text-white" />
    </button>
  )
}

export function FloatingButtons() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col lg:flex-row gap-4">
      <WhatsappIcon />

      <ScrollToTopButton />
    </div>
  )
}
