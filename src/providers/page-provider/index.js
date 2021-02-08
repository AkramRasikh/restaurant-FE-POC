import React from "react"
import ConfigProvider from "../config-provider"

const PageProvider = ({ element, props }) => (
  <ConfigProvider {...props}>{element}</ConfigProvider>
)

export default PageProvider
