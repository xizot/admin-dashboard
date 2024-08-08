import { useNavigate } from 'react-router-dom'

const useHistory = () => {
  const navigate = useNavigate()

  return {
    push: (path: string, state?: any) => {
      navigate(path, { state })
    },
    replace: (path: string, state?: any) => {
      navigate(path, { replace: true, state })
    },
    goPrevious: () => {
      navigate(-1)
    },
    goBack: () => {
      const backUrl = new URLSearchParams(window.location.search).get('backUrl')
      navigate(backUrl || '/')
    },
    goForward: () => {
      navigate(1)
    }
  }
}

export default useHistory
