import React, { useState } from "react"

export default function ContactForm() {
  const [name, setName] = useState<string>("")
  const [message, setMessage] = useState<string>("")
  const [subject, setSubject] = useState<string>("")

  const handleEmailClick = () => {
    const mailtoLink = `mailto:ukhezo.web3@gmail.com?subject=${encodeURIComponent(
      `${name}-${subject}`
    )}&body=${encodeURIComponent(message)}`
    window.location.href = mailtoLink
  }

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const handleChangeSubject = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value)
  }

  const handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value)
  }

  return (
    <main className="mt-10 flex flex-col">
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={handleChangeName}
        className="block w-full bg-gradient-to-tr from-[#3f3f3f] to-[#141414] rounded-lg border-0 py-3 px-5 text-gray-00  placeholder:text-gray-500 outline-none sm:text-sm sm:leading-6 mb-6"
        placeholder="Name *"
      />
      <input
        type="text"
        name="subject"
        id="subject"
        value={subject}
        onChange={handleChangeSubject}
        className="block w-full bg-gradient-to-tr from-[#3f3f3f] to-[#141414] rounded-lg border-0 py-3 px-5 text-gray-00  placeholder:text-gray-500 outline-none sm:text-sm sm:leading-6 mb-6"
        placeholder="Subject *"
      />
      <textarea
        placeholder="Message *"
        value={message}
        onChange={handleChangeMessage}
        className="block w-full h-[200px] bg-gradient-to-tr from-[#3f3f3f] to-[#141414] rounded-lg border-0 py-3 px-5 text-gray-00  placeholder:text-gray-500 outline-none sm:text-sm sm:leading-6 mb-6"
      />
      <button
        className={`block w-full bg-lightGray font-semibold rounded-lg py-3 ${
          name === "" || name === "" || name === "" ? "opacity-70" : ""
        }`}
        onClick={handleEmailClick}
        disabled={name === "" || subject === "" || message === "" ? true : false}
      >
        Contact
      </button>
    </main>
  )
}
