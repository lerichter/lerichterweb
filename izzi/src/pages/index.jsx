import Head from 'next/head'

import { Section } from '@/components/Section'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { Services } from '@/components/Services'
import { FloatingButtons } from '@/components/FloatingButtons'

export default function Home() {
  return (
    <>
      <Head>
        <title>Le Richter</title>
        <meta
          name="description"
          content=""
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <Section />
        <Services />
        <Pricing />
        <FloatingButtons />
      </main>
      <Footer />
    </>
  )
}
