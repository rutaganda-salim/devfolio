'use client'

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Send } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    await new Promise(resolve => setTimeout(resolve, 1000))
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    })
    
    setIsLoading(false)
    event.currentTarget.reset()
  }

  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8 max-w-5xl mx-auto">
      <header className="flex justify-between items-center mb-12">
        <Link 
          href="/"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="text-base">Back</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link>
          <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
          <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projects</Link>
          <Link href="/setup" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Setup</Link>
          <Link href="/shop" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Shop</Link>
          <Link href="/contact" className="text-sm font-medium">Contact</Link>
        </nav>
      </header>

      <main className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Have a question or want to work together? Feel free to reach out.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Your name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              placeholder="What's this about?"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Your message..."
              required
              className="min-h-[150px] resize-none"
            />
          </div>

          <Button 
            type="submit" 
            disabled={isLoading}
          >
            <Send className="mr-2 h-4 w-4" />
            {isLoading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </main>
    </div>
  )
}
