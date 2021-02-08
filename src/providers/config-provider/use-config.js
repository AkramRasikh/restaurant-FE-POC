import { useContext } from "react"
import ConfigContext from "./config-context"

const useConfig = () => {
  const config = useContext(ConfigContext)
  return config
}

export default useConfig
