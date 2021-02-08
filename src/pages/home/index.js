import React, { useEffect, useState } from "react"
import io from "socket.io-client"
import axios from "axios"

const HomePage = () => {
  const SOCKET_SERVER_URL = "http://localhost:3000"
  const newSocket = io(SOCKET_SERVER_URL)

  const [response, setResponse] = useState(null)

  const getRequest = async () => {
    try {
      const response = await axios.get(`${SOCKET_SERVER_URL}/`)
      setResponse(response.data)
    } catch (error) {
      console.error("error: ", error)
    }
  }

  useEffect(() => {
    newSocket.on("sendMsg", msg => {
      console.log("sendMsg: ", msg)
    })
  }, [newSocket])

  const handleClick = () => {
    newSocket.emit("event", { payload: "chilling!!!" })
    console.log("emitting")
  }

  useEffect(() => {
    getRequest()
  }, [])

  return (
    <>
      <div>Home Page!</div>
      <div>
        <button onClick={handleClick}>click</button>
      </div>
      {response && <div>{response}</div>}
    </>
  )
}

export default HomePage
