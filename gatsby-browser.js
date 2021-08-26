/* eslint-disable react/display-name */

const React = require("react")
const { Client } = require("styletron-engine-atomic")
const { Provider } = require("styletron-react")
const { LightTheme, BaseProvider } = require("baseui")

const styletronEngine = new Client()

exports.wrapRootElement = ({ element }) => {
  return (
    <Provider value={styletronEngine}>
      <BaseProvider theme={LightTheme}>{element}</BaseProvider>
    </Provider>
  )
}
