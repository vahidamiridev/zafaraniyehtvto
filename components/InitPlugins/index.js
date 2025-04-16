import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function InitPlugins() {
  const router = useRouter()

  const runPlugins = () => {
    // وقتی DOM آماده شد و اسکریپت‌ها لود شدن:
    if (typeof window.$ === 'function') {
      try {
        $('.counter').counterUp?.()
        $('.carousel').owlCarousel?.()
        $('#portfolio').cubeportfolio?.()
        // هر چی نیاز هست دستی بزن
      } catch (err) {
        console.error('Plugin init error:', err)
      }
    }
  }

  useEffect(() => {
    runPlugins() // first load
    router.events.on('routeChangeComplete', runPlugins)
    return () => {
      router.events.off('routeChangeComplete', runPlugins)
    }
  }, [])

  return null
}
