
'use client'

import Main from './UI/components/Main'
import Consultation from './UI/components/Consultation'
import Graphs from './UI/components/Graphs'
import OurServices from './UI/components/OurServices'
import Cooperation from './UI/components/Cooperation'
import Faq from './UI/components/FAQ'
import Team from './UI/components/Team'
import Feedback from './UI/components/Feedback'
import Footer from './UI/Footer'
import ModalThanks from './UI/components/ModalThanks'
import ModalForm from './UI/components/ModalForm'
import { useState } from 'react'


export default function App() {
  const [isModalThanksOpen, setIsModalThanksOpen] = useState(false)
  const [isModalFormOpen, setIsModalFormOpen] = useState(false)
  return (
    <div>
      <ModalForm isOpen={isModalFormOpen} onClose={() => setIsModalFormOpen(false)} onSuccess={() => setIsModalFormOpen(true)}></ModalForm>
      <Main toConsultation={() => setIsModalFormOpen(true)}></Main>
      <Consultation toConsultation={() => setIsModalFormOpen(true)}></Consultation>
      <Graphs></Graphs>
      <OurServices toConsultation={() => setIsModalFormOpen(true)}></OurServices>
      <Cooperation onSuccess={() => setIsModalFormOpen(true)}></Cooperation>
      <Faq toConsultation={() => setIsModalFormOpen(true)}></Faq>
      <Team></Team>
      <Feedback></Feedback>
      <Footer></Footer>
    </div>
  )
}
