import react from 'react'
import styled from 'styled-components'
import {
  NotesMedical,
  Route,
  FileDownload,
  MapMarkedAlt,
} from 'styled-icons/fa-solid'
import { Group } from 'styled-icons/typicons/'
import { MailOutline } from 'styled-icons/material'
import { Law, ShieldLock } from 'styled-icons/octicons/'

export const Treatment = styled(NotesMedical)`
  width: 1rem;
  margin-right: 1rem;
`
export const Team = styled(Group)`
  width: 1.1rem;
  margin-right: 1rem;
`
export const Process = styled(Route)`
  width: 1.1rem;
  margin-right: 1rem;
`
export const Docs = styled(FileDownload)`
  width: 1rem;
  text-align: center;
  margin-right: 1rem;
`
export const Location = styled(MapMarkedAlt)`
  width: 1.2rem;
  margin-right: 1rem;
`
export const Contacts = styled(MailOutline)`
  width: 1.3rem;
  margin-right: 1rem;
`
export const Imprint = styled(Law)`
  width: 1.3rem;
  margin-right: 1rem;
`
export const Data = styled(ShieldLock)`
  width: 1.2rem;
  margin-right: 1rem;
`
