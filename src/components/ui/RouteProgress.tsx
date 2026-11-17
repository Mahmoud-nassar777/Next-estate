"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useCallback, useEffect, useRef, useState } from "react"

export default function RouteProgress() {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const [progress, setProgress] = useState(0)
    const [visible, setVisible] = useState(false)

    const interval = useRef<ReturnType<typeof setInterval> | null>(null)
    const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
    const active = useRef(false)

    const start = useCallback(() => {
        if (active.current) return
        active.current = true

        if (hideTimer.current) clearTimeout(hideTimer.current)
        if (interval.current) clearInterval(interval.current)

        setVisible(true)
        setProgress(8)

        // بيزحف ناحية 90% وبيبطّأ كل ما يقرب
        interval.current = setInterval(() => {
            setProgress((p) => p + (90 - p) * 0.08)
        }, 200)
    }, [])

    const done = useCallback(() => {
        if (!active.current) return
        active.current = false

        if (interval.current) clearInterval(interval.current)

        setProgress(100)
        hideTimer.current = setTimeout(() => {
            setVisible(false)
            setProgress(0)
        }, 400)
    }, [])

    // الصفحة اتغيرت => خلص
    useEffect(() => {
        done()
    }, [pathname, searchParams, done])

    // أي ضغطة على لينك داخلي => ابدأ
    useEffect(() => {
        const onClick = (e: MouseEvent) => {
            if (
                e.defaultPrevented ||
                e.button !== 0 ||
                e.metaKey ||
                e.ctrlKey ||
                e.shiftKey ||
                e.altKey
            )
                return

            const anchor = (e.target as HTMLElement).closest("a")
            if (!anchor) return

            const href = anchor.getAttribute("href")
            if (
                !href ||
                href.startsWith("#") ||
                anchor.target === "_blank" ||
                anchor.hasAttribute("download")
            )
                return

            const url = new URL(anchor.href, window.location.href)
            if (url.origin !== window.location.origin) return

            // نفس الصفحة بالظبط => متبدأش
            if (
                url.pathname === window.location.pathname &&
                url.search === window.location.search
            )
                return

            start()
        }

        document.addEventListener("click", onClick, true)
        return () => document.removeEventListener("click", onClick, true)
    }, [start])

    return (
        <div
            aria-hidden
            className="pointer-events-none fixed left-0 top-0 z-9999 h-0.75 w-full"
            style={{
                opacity: visible ? 1 : 0,
                transition: "opacity 300ms ease",
            }}
        >
            <div
                className="h-full bg-primary shadow-[0_0_10px_var(--color-primary)]"
                style={{
                    width: `${progress}%`,
                    transition: "width 250ms ease-out",
                }}
            />
        </div>
    )
}