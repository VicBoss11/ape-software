import { useEffect, useState } from "react"

function Typewriter({ text, delay, infinite }) {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    let timeout;

    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex])
        setCurrentIndex(prevIndex => prevIndex + 1)
      }, delay)

    } else if (infinite) {
      setCurrentIndex(0)
      setCurrentText('')
    }

    return () => clearTimeout(timeout)
  }, [currentIndex, delay, infinite, text])

  return (
    currentText && <span>{currentText}</span>
  )
}

export default Typewriter
