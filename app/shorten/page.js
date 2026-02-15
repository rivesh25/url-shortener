"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setGenerated] = useState("")
    const [loading, setLoading] = useState(false)
    const [copied, setCopied] = useState(false)

    const generate = () => {
        if (!url || !shorturl) {
            alert("Please fill in both fields")
            return
        }
        
        setLoading(true)
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                seturl("")
                setshorturl("")
                console.log(result)
                alert(result.message)
                setLoading(false)
            })
            .catch((error) => {
                console.error(error)
                setLoading(false)
                alert("Error generating short URL")
            });
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generated)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className='min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 py-16 px-4'>
            <div className='mx-auto max-w-2xl'>
                <div className='text-center mb-8 animate-fade-in'>
                    <h1 className='font-bold text-4xl bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2'>Generate Short URLs</h1>
                    <p className='text-gray-600'>Transform your long URLs into short, shareable links</p>
                </div>
                
                <div className='bg-white shadow-2xl rounded-2xl p-8 flex flex-col gap-6 animate-scale-in'>
                    <div className='flex flex-col gap-4'>
                        <div>
                            <label className='text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2'>
                                <span>🔗</span>
                                <span>Original URL</span>
                            </label>
                            <input 
                                type="text"
                                value={url}
                                className='w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg border-2 border-gray-200 transition-all duration-200'
                                placeholder='https://example.com/very-long-url'
                                onChange={e => { seturl(e.target.value) }} 
                            />
                        </div>

                        <div>
                            <label className='text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2'>
                                <span>✨</span>
                                <span>Custom Short URL</span>
                            </label>
                            <input 
                                type="text"
                                value={shorturl}
                                className='w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-lg border-2 border-gray-200 transition-all duration-200'
                                placeholder='my-custom-link'
                                onChange={e => { setshorturl(e.target.value) }} 
                            />
                        </div>
                        
                        <button 
                            onClick={generate} 
                            disabled={loading}
                            className='bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 rounded-xl shadow-lg px-6 py-4 font-bold text-white hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 mt-2'
                        >
                            {loading ? (
                                <>
                                    <span className='animate-spin'>⏳</span>
                                    <span>Generating...</span>
                                </>
                            ) : (
                                <>
                                    <span>🚀</span>
                                    <span>Generate Short URL</span>
                                </>
                            )}
                        </button>
                    </div>

                    {generated && (
                        <div className='bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6 animate-slide-up'>
                            <div className='flex items-center gap-2 mb-3'>
                                <span className='text-2xl'>✅</span>
                                <span className='font-bold text-lg text-green-700'>Your Short URL is Ready!</span>
                            </div>
                            <div className='bg-white rounded-lg p-4 border-2 border-green-200'>
                                <code className='text-purple-600 font-mono break-all'>
                                    <Link target="_blank" href={generated} className='hover:underline'>
                                        {generated}
                                    </Link>
                                </code>
                            </div>
                            <button 
                                onClick={copyToClipboard}
                                className='mt-4 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition-all duration-200 flex items-center justify-center gap-2'
                            >
                                {copied ? (
                                    <>
                                        <span>✓</span>
                                        <span>Copied!</span>
                                    </>
                                ) : (
                                    <>
                                        <span>📋</span>
                                        <span>Copy to Clipboard</span>
                                    </>
                                )}
                            </button>
                        </div>
                    )}
                </div>
                
                <div className='mt-8 text-center text-gray-600 text-sm animate-fade-in'>
                    <p>💡 Tip: Use memorable and descriptive custom URLs for better recall</p>
                </div>
            </div>
        </div>
    )
}

export default Shorten