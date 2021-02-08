import React from "react"
import ConfigContext from "./config-context"

const { Provider } = ConfigContext

const ConfigProvider = ({ pageContext, children }) => {
  const { configJson } = pageContext
  return <Provider value={{ ...configJson }}>{children}</Provider>
}

export default ConfigProvider
