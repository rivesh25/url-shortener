"use client"
import React from 'react'
import { useState } from 'react'

const Shorten = () => {
    const [url, setUrl] = useState("")
    const [shortUrl, setShortUrl] = useState("")
    const [generated, setGenerated] = useState(false)
    const [message, setMessage] = useState("")

    const generate = async () => {
        const res = await fetch('/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url, shortUrl })
        })
        const data = await res.json()
        if (data.success) {
            setGenerated(true)
            setMessage(`URL shortened successfully! Short URL: ${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`)
            setUrl("")
            setShortUrl("")
        } else {
            setMessage(data.message || 'Something went wrong')
        }
    }

    return (
        <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
            <h1 className='font-bold text-2xl'>Generate your short URL</h1>
            <div className='flex flex-col gap-2'>
                <input type="text"
                value={url}
                className="p-4 focus:outline-purple-600"
                placeholder='Enter your URL here'
                onChange={e => setUrl(e.target.value)} />

                <input type="text"
                value={shortUrl}
                className="p-4 focus:outline-purple-600"
                placeholder='Enter your preferred short URL text'
                onChange={e => setShortUrl(e.target.value)} />
                <button onClick={generate} className='bg-purple-500 text-white rounded-lg shadow-lg p-3 py-1 font-bold cursor-pointer'>Generate</button>
            </div>
            {message && <p className='text-center text-lg'>{message}</p>}
        </div>
    )
}

export default Shorten
