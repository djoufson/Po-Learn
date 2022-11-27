import { useEffect } from 'react'

const useLoad = (dependencies) => {
  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [dependencies])
}

export default useLoad