// components/contact.tsx - SIMPLIFIED VERSION
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simple mailto link for static site
    const mailtoLink = `mailto:rihobotelias123@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message + "\n\nFrom: " + formData.email)}`
    window.location.href = mailtoLink
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Your form fields here */}
      <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg">
        Send Message <Send className="inline ml-2" />
      </button>
    </form>
  )
}