
'use client'

import Main from './components/Main'
import Consultation from './components/Consultation'
import Graphs from './components/Graphs'
import OurServices from './components/OurServices'
import Cooperation from './components/Cooperation'
import Faq from './components/FAQ'
import Team from './components/Team'
import Feedback from './components/Feedback'
import Footer from './components/Footer'
import ModalThanks from './components/ModalThanks'
import { useState } from 'react'


export default function App() {
  const [isModalThanksOpen, setIsModalThanksOpen] = useState(false)
  return (
    <>
      <ModalThanks isOpen={isModalThanksOpen} onClose={() => setIsModalThanksOpen(false)}></ModalThanks>
      <Main></Main>
      <Consultation></Consultation>
      <Graphs></Graphs>
      <OurServices></OurServices>
      <Cooperation onSuccess={() => setIsModalThanksOpen(true)}></Cooperation>
      <Faq></Faq>
      <Team></Team>
      <Feedback></Feedback>
      <Footer></Footer>
    </>
  )
}
