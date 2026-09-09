import { Button, Container, HeaderNav, Logo } from '@/uikit'
import type { NavItem } from '@/uikit'
import { getTicketsUrl } from '@/constants/links'
import { NAV_ITEMS } from '@/constants/navigation'
import styles from './Header.module.scss'

type HeaderProps = {
  navItems?: NavItem[]
}

export function Header({ navItems = [...NAV_ITEMS] }: HeaderProps) {
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <Logo />
        <div className={styles.actions}>
          <HeaderNav items={navItems} />
          <Button
            as="a"
            href={getTicketsUrl()}
            variant="ghost"
            size="sm"
            className={styles.tickets}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Tickets
          </Button>
        </div>
      </Container>
    </header>
  )
}
