import { forwardRef, createRef, ReactNode } from "react"
import clsx from "clsx"

interface ContainerTypeProps {
  className?: string
  children?: ReactNode
  style?: object
  ref?: typeof createRef<HTMLDivElement>
}

interface ContainerProps {
  className?: string
  children: ReactNode
  style: object
  ref: typeof createRef<HTMLDivElement>
}

const OuterContainer = forwardRef(function OuterContainer({
  className,
  children,
  style,
  ref,
}: ContainerTypeProps) {
  return (
    <div ref={ref} className={clsx("sm:px-8", className)} {...style}>
      <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
    </div>
  )
})

const InnerContainer = forwardRef(function InnerContainer({
  className,
  children,
  style,
  ref,
}: ContainerTypeProps) {
  return (
    <div ref={ref} className={clsx("relative px-4 sm:px-8 lg:px-12", className)} {...style}>
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </div>
  )
})

export const Container = forwardRef(function Container({ children, style, ref }: ContainerProps) {
  return (
    <OuterContainer ref={ref} {...style}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  )
})

// Container.Outer = OuterContainer
// Container.Inner = InnerContainer
