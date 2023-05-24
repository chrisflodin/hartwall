import React, { useState, useEffect, createContext } from 'react'
import { Socket, io } from 'socket.io-client'
import { Session, User } from '../types/types'
import { useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import { IAppProvider } from '../types/AppContext'
import { SocketError } from '../types/Error'

interface socketEvent {
  event: string
  params: {}
}

const AppContext = createContext<any>(null)
const socket = io(import.meta.env.VITE_SERVER_ADDRESS)

export const AppProvider = ({ children }: { children: JSX.Element | undefined }) => {
  const providers: IAppProvider = {

  }

  return <AppContext.Provider value={providers}>{children}</AppContext.Provider>
}

export default AppContext
