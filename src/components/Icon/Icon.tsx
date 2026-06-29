import type { TablerIcon } from '@tabler/icons-react'
import type { Theme } from '@/tokens/theme'

export type IconSize = keyof Theme['size']

export interface IconProps {
  icon: TablerIcon
  size?: IconSize
  color?: string
  stroke?: number
  className?: string
}

const SIZE_MAP: Record<IconSize, number> = {
  icon: 16,
  iconSm: 12,
  bullet: 8,
  iconButton: 32,
}

export default function Icon({
  icon: TablerIconComponent,
  size = 'icon',
  color,
  stroke = 1.5,
  className,
}: IconProps) {
  return (
    <TablerIconComponent
      size={SIZE_MAP[size]}
      {...(color !== undefined ? { color } : {})}
      stroke={stroke}
      aria-hidden="true"
      className={className}
    />
  )
}
