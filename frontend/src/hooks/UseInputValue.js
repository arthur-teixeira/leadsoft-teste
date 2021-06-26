import { useState } from "react"

const useInputValue = initial => {
  const [value,setValue] = useState(initial)
  return{
    value,
    onChange: e => {
      setValue(e.target.value || e.target.innerText)
    },
    setValue
  }
}

export default useInputValue