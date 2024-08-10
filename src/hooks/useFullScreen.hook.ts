import { useState, useEffect, useCallback } from 'react'

const useFullScreen = () => {
  const [isFullScreen, setIsFullScreen] = useState(false)

  const enterFullScreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enter full-screen mode: ${err.message} (${err.name})`)
      })
    }
  }, [])

  const exitFullScreen = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch((err) => {
        console.error(`Error attempting to exit full-screen mode: ${err.message} (${err.name})`)
      })
    }
  }, [])

  const toggleFullScreen = useCallback(() => {
    if (isFullScreen) {
      exitFullScreen()
    } else {
      enterFullScreen()
    }
  }, [isFullScreen, enterFullScreen, exitFullScreen])

  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement)
    }

    document.addEventListener('fullscreenchange', handleFullScreenChange)

    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange)
    }
  }, [])

  return { isFullScreen, enterFullScreen, exitFullScreen, toggleFullScreen }
}

export default useFullScreen
