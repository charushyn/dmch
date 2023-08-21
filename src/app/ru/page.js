'use client'

import Main from '../UI-ru/components/Main'
import Consultation from '../UI-ru/components/Consultation'
import Graphs from '../UI-ru/components/Graphs'
import OurServices from '../UI-ru/components/OurServices'
import Cooperation from '../UI-ru/components/Cooperation'
import Faq from '../UI-ru/components/FAQ'
import Team from '../UI-ru/components/Team'
import Feedback from '../UI-ru/components/Feedback'
import Footer from '../UI-ru/Footer'
import ModalThanks from '../UI-ru/components/ModalThanks'
import ModalForm from '../UI-ru/components/ModalForm'
import { useState } from 'react'


export default function Page() {
  const [isModalThanksOpen, setIsModalThanksOpen] = useState(false)
  const [isModalFormOpen, setIsModalFormOpen] = useState(false)
  return (
    <div>
      <ModalForm isOpen={isModalFormOpen} onClose={() => setIsModalFormOpen(false)} onSuccess={() => setIsModalThanksOpen(true)}></ModalForm>
      <ModalThanks isOpen={isModalThanksOpen} onClose={() => setIsModalThanksOpen(false)}></ModalThanks>
      <Main></Main>
      <Consultation toConsultation={() => setIsModalFormOpen(true)}></Consultation>
      <Graphs></Graphs>
      <OurServices></OurServices>
      <Cooperation onSuccess={() => setIsModalThanksOpen(true)}></Cooperation>
      <Faq></Faq>
      <Team></Team>
      <Feedback></Feedback>
      <Footer></Footer>
    </div>
  )
}