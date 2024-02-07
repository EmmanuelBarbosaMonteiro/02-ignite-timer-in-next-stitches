'use client'

import Image from 'next/image'
import { HeaderContainer } from './styles'
import LogoIgnite from '@/assets/logo-ignite.svg'
import { Scroll, Timer } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()
  const isActive = (path: string) => pathname === path

  return (
    <HeaderContainer>
      <Image src={LogoIgnite} alt="" />
      <nav>
        <Link legacyBehavior href="/">
          <a title="Timer" className={isActive('/') ? 'active' : ''}>
            <Timer size={24} />
          </a>
        </Link>
        <Link legacyBehavior href="/history">
          <a title="Histórico" className={isActive('/history') ? 'active' : ''}>
            <Scroll size={24} />
          </a>
        </Link>
      </nav>
    </HeaderContainer>
  )
}
