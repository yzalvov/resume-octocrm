import { useEffect, useState } from 'react'

export function useFetchJsonFile(path: string) {
  const [isLoading, setIsLoading] = useState(true)
  const [jsonContent, setJsonContent] = useState()
  const [error, setError] = useState()
  useEffect(() => {
    console.log('useFetchJsonFile fired')
    async function runEffect() {
      try {
        const resp = await fetch(path)
        if (!resp.ok) {
          throw new Error('Local fetch error, status is: ' + resp.status)
        }
        const content = await resp.json()
        // console.log('typeof content', typeof content)
        setJsonContent(content)
      } catch (error) {
        // setError(error)
      } finally {
        // setIsLoading(false)
      }
    }

    runEffect()
  }, [path])

  // return { isLoading, jsonContent, error }
  return {}
}
