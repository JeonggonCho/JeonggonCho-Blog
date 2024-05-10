import { FC, useEffect, useRef } from "react"
import { Theme, useTheme } from "@emotion/react"

const PostComments: FC = () => {
  const commentsRef = useRef<HTMLDivElement>(null)

  const { isDarkMode } = useTheme() as Theme & { isDarkMode: boolean }

  useEffect(() => {
    const loadCommentsScript = () => {
      const existingScript = document.getElementById("giscus-script")
      if (existingScript) {
        existingScript.parentNode?.removeChild(existingScript)
      }

      const scriptEl = document.createElement("script")
      scriptEl.id = "giscus-script"
      scriptEl.src = "https://giscus.app/client.js"
      scriptEl.crossOrigin = "anonymous"
      scriptEl.async = true
      scriptEl.setAttribute("data-repo", "JeonggonCho/JeonggonCho_Blog")
      scriptEl.setAttribute("data-repo-id", "R_kgDOLzqvxQ")
      scriptEl.setAttribute("data-category", "Comments")
      scriptEl.setAttribute("data-category-id", "DIC_kwDOLzqvxc4CfRaZ")
      scriptEl.setAttribute("data-mapping", "pathname")
      scriptEl.setAttribute("data-strict", "0")
      scriptEl.setAttribute("data-reactions-enabled", "1")
      scriptEl.setAttribute("data-emit-metadata", "0")
      scriptEl.setAttribute("data-input-position", "top")
      scriptEl.setAttribute("data-lang", "ko")
      scriptEl.setAttribute("data-theme", isDarkMode ? "preferred_color_scheme" : "light")

      commentsRef.current?.appendChild(scriptEl)
    }

    loadCommentsScript()

    return () => {
      const existingScript = document.getElementById("giscus-script")
      if (existingScript) {
        existingScript.parentNode?.removeChild(existingScript)
      }
    }
  }, [isDarkMode])

  return (
    <section ref={commentsRef} />
  )
}

export default PostComments
