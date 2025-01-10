'use client'

import { useState, useEffect } from 'react'
import { Building2, ChevronRight, LinkIcon, Twitter, Instagram, Facebook, X, Dribbble } from 'lucide-react'
import { ModeToggle } from "@/components/mode-toggle"
import Link from "next/link"

export default function Home() {
  const [showSocials, setShowSocials] = useState(false)
  const [isAvailable, setIsAvailable] = useState(false)

  useEffect(() => {
    setIsAvailable(true)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground p-4 flex items-center justify-center">
      <main className="max-w-sm w-full">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Building2 className="h-4 w-4" />
            <span className="text-sm">kigali, rw</span>
          </div>
          <ModeToggle />
        </div>

        <div className="flex flex-col mb-8">
          <div className="flex justify-between items-start mb-2">
            <h1 className="text-4xl font-bold whitespace-nowrap">Salim Rutaganda</h1>
          </div>
          <p className="text-muted-foreground">Software Engineer</p>
        </div>

        <nav className="mb-8">
          <h2 className="text-sm text-muted-foreground mb-6">MENU</h2>
          <ul className="space-y-3">
            {[
              "About",
              "Projects",
              "Skills",
              "Chat",
              "Contact"
            ].map((item) => (
              <li key={item}>
                <Link 
                    href={item === "Chat" ? "https://salixai.vercel.app" : `/${item.toLowerCase()}`}
                    target={item === "Chat" ? "_blank" : undefined}
                    rel={item === "Chat" ? "noopener noreferrer" : undefined}
                    className="flex items-center justify-between group text-muted-foreground hover:bg-accent transition-colors rounded-lg py-2 px-4"
                  >
                  <span>{item}</span>
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <section className="mb-6">
          <h2 className="text-sm text-muted-foreground mb-6">ANOTHER LINKS</h2>
          <div className="space-y-4 pl-4">
            <Link 
              href="https://github.com/rutaganda-salim"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full border rounded-md p-2 text-muted-foreground hover:bg-accent transition-colors"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </Link>
            <div className="grid grid-cols-2 gap-1">
              <Link 
                href="https://figma.com/@salimrutaganda"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border rounded-md py-2 hover:bg-accent transition-colors"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v9.452zm-4.587-7.98c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z" />
                </svg>
                <span>Figma</span>
              </Link>
              <Link 
                href="https://linkedin.com/in/salimrutaganda"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border rounded-md py-2 hover:bg-accent transition-colors"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                <span>LinkedIn</span>
              </Link>
            </div>
          </div>
        </section>

        <div className="h-px bg-border mb-6" />

        <section className="relative h-10">
          <div className={`absolute inset-0 transition-opacity duration-300 ${showSocials ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <div className="flex items-center justify-between">
              <button
                onClick={() => {
                  setShowSocials(true)
                  setIsAvailable(false)
                }}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <LinkIcon className="h-4 w-4" />
                <span>More links</span>
              </button>
              
              {isAvailable ? (
                <button className="flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-green-200 transition-colors whitespace-nowrap">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  Available
                </button>
              ) : null}
            </div>
          </div>
          <div className={`absolute inset-0 transition-opacity duration-300 ${showSocials ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <Link href="https://x.com/salimnunez01" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md hover:bg-accent transition-colors">
                  <Twitter className="h-5 w-5 text-muted-foreground" />
                </Link>
                <Link href="https://instagram.com/salimnunez01" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md hover:bg-accent transition-colors">
                  <Instagram className="h-5 w-5 text-muted-foreground" />
                </Link>
                <Link href="#" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md hover:bg-accent transition-colors">
                  <Facebook className="h-5 w-5 text-muted-foreground" />
                </Link>
                <Link href="https://dribbble.com/laminx" target="_blank" rel="noopener noreferrer" className="p-2 rounded-md hover:bg-accent transition-colors">
                <Dribbble className="h-5 w-5 text-muted-foreground" />
                </Link>
                
              </div>
              <button
                onClick={() => {
                  setShowSocials(false)
                  setIsAvailable(true)
                }}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close social links"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

