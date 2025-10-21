export type PropertyProps = {
  id: number
  title: string
  developer: string
  location: string
  image: string
  bedrooms: number
  type: string
}

export type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  variant?: "primary" | "secondary"
  className?: string
}
