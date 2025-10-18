"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

type BeforeAfterSliderProps = {
  before: string
  after: string
  title?: string
  initial?: number // 0-100
}

export function BeforeAfterSlider({ before, after, title, initial = 50 }: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [position, setPosition] = useState(() => Math.max(0, Math.min(100, initial)))
  const [dragging, setDragging] = useState(false)

  const clamp = (v: number) => Math.max(0, Math.min(100, v))

  const updateFromPointer = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPosition(clamp(pct))
  }, [])

  useEffect(() => {
    if (!dragging) return

    const onMove = (e: PointerEvent) => {
      updateFromPointer(e.clientX)
    }
    const onUp = () => setDragging(false)

    window.addEventListener("pointermove", onMove)
    window.addEventListener("pointerup", onUp)
    window.addEventListener("pointercancel", onUp)

    return () => {
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerup", onUp)
      window.removeEventListener("pointercancel", onUp)
    }
  }, [dragging, updateFromPointer])

  const startDrag = (e: React.PointerEvent) => {
    ;(e.target as Element).setPointerCapture?.(e.pointerId)
    setDragging(true)
    updateFromPointer(e.clientX)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const step = 2
    if (e.key === "ArrowLeft") {
      e.preventDefault()
      setPosition((p) => clamp(p - step))
    } else if (e.key === "ArrowRight") {
      e.preventDefault()
      setPosition((p) => clamp(p + step))
    }
  }

  return (
    <div className="relative group cursor-col-resize" ref={containerRef} aria-label={title || "Before and after slider"}>
      <div className="relative overflow-hidden rounded-lg h-64 bg-card border border-border">
        {/* Base After image */}
        <img src={after || "/placeholder.svg"} alt={title ? `${title} after` : "After"} className="w-full h-full object-cover" />

        {/* Clipped Before layer */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}
          onPointerDown={startDrag}
          onPointerMove={(e) => dragging && updateFromPointer(e.clientX)}
          role="presentation"
        >
          <img src={before || "/placeholder.svg"} alt={title ? `${title} before` : "Before"} className="w-full h-full object-cover" />
        </div>

        {/* Divider / Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-accent outline-none"
          style={{ left: `${position}%` }}
          role="slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          tabIndex={0}
          onPointerDown={startDrag}
          onKeyDown={handleKeyDown}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent rounded-full p-2 flex items-center gap-1">
            <ChevronLeft className="w-4 h-4 text-background" />
            <ChevronRight className="w-4 h-4 text-background" />
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-background/80 rounded text-sm font-semibold text-foreground">Before</div>
        <div className="absolute top-4 right-4 px-3 py-1 bg-background/80 rounded text-sm font-semibold text-foreground">After</div>
      </div>
      {title ? <h3 className="mt-4 text-lg font-bold text-foreground text-center">{title}</h3> : null}
    </div>
  )
}
