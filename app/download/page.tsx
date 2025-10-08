"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Download, Loader2 } from "lucide-react"
import Link from "next/link"

interface VideoFormat {
  itag: number
  quality: string
  mimeType: string
  qualityLabel?: string
  audioBitrate?: number
  hasVideo: boolean
  hasAudio: boolean
}

interface VideoInfo {
  title: string
  author: string
  description: string
  thumbnails: Array<{ url: string; width: number; height: number }>
  formats: VideoFormat[]
}

export default function DownloadPage() {
  const [url, setUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [videoInfo, setVideoInfo] = useState<VideoInfo | null>(null)
  const [error, setError] = useState("")

  const fetchVideoInfo = async () => {
    if (!url.trim()) {
      setError("Paste a link, Chad. Don't leave it empty.")
      return
    }

    setLoading(true)
    setError("")
    setVideoInfo(null)

    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/youtube?url=${encodeURIComponent(url)}`,
      )

      if (!response.ok) {
        throw new Error("Failed to fetch video info")
      }

      const data = await response.json()
      setVideoInfo(data)
    } catch (err) {
      setError("Failed to fetch video info. Try again, Chad.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleDownload = (itag: number) => {
    const downloadUrl = `http://localhost:8080/api/v1/youtube/download?url=${encodeURIComponent(url)}&itag=${itag}`
    window.open(downloadUrl, "_blank")
  }

  const getFormatLabel = (format: VideoFormat) => {
    if (format.qualityLabel) {
      return format.qualityLabel
    }
    if (format.hasVideo && format.hasAudio) {
      return `${format.quality} (Video + Audio)`
    }
    if (format.hasVideo) {
      return `${format.quality} (Video Only)`
    }
    if (format.hasAudio) {
      return `Audio ${format.audioBitrate ? `(${format.audioBitrate}kbps)` : ""}`
    }
    return format.quality
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Green glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#39FF14] opacity-10 blur-[120px] rounded-full" />

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Back to Home button */}
        <Link href="/">
          <Button variant="ghost" className="mb-8 text-[#39FF14] hover:text-[#39FF14] hover:bg-[#39FF14]/10">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        {/* Main container */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-zinc-900/80 border-[#39FF14]/20 rounded-2xl p-8 shadow-[0_0_50px_rgba(57,255,20,0.15)]">
            {/* Heading */}
            <div className="text-center mb-8">
              <h1 className="text-5xl font-black mb-4 bg-gradient-to-r from-white via-[#39FF14] to-white bg-clip-text text-transparent">
                Paste your link, Chad 💪
              </h1>
              <p className="text-zinc-400 text-lg">Zero ads. Zero cringe. Just domination.</p>
            </div>

            {/* Input section */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <Input
                type="text"
                placeholder="https://youtube.com/watch?v=..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && fetchVideoInfo()}
                className="flex-1 bg-black border-[#39FF14]/30 text-white placeholder:text-zinc-600 focus:border-[#39FF14] focus:ring-[#39FF14]/20 h-14 text-lg"
              />
              <Button
                onClick={fetchVideoInfo}
                disabled={loading}
                className="bg-[#39FF14] text-black hover:bg-[#39FF14]/90 font-bold px-8 h-14 text-lg shadow-[0_0_20px_rgba(57,255,20,0.3)]"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Fetching...
                  </>
                ) : (
                  "Fetch Info"
                )}
              </Button>
            </div>

            {/* Error message */}
            {error && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-8 text-red-400">{error}</div>
            )}

            {/* Video info display */}
            {videoInfo && (
              <div className="space-y-8">
                {/* Thumbnail and metadata */}
                <div className="flex gap-6 flex-col md:flex-row">
                  <div className="flex-shrink-0">
                    {videoInfo.thumbnails && videoInfo.thumbnails.length > 0 ? (
                      <img
                        src={videoInfo.thumbnails[videoInfo.thumbnails.length - 1].url || "/placeholder.svg"}
                        alt={videoInfo.title}
                        className="w-full md:w-80 rounded-lg border-2 border-[#39FF14]/30 shadow-[0_0_30px_rgba(57,255,20,0.2)]"
                      />
                    ) : (
                      <div className="w-full md:w-80 h-48 bg-zinc-800 rounded-lg border-2 border-[#39FF14]/30 flex items-center justify-center text-zinc-600">
                        Meme Thumbnail Here
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2 text-[#39FF14]">{videoInfo.title}</h2>
                    <p className="text-zinc-400 mb-4">
                      by <span className="text-white font-semibold">{videoInfo.author}</span>
                    </p>
                    <p className="text-zinc-500 text-sm line-clamp-4">{videoInfo.description}</p>
                  </div>
                </div>

                {/* Formats grid */}
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-center">
                    Choose Your <span className="text-[#39FF14]">Format</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {videoInfo.formats.map((format) => (
                      <Card
                        key={format.itag}
                        className="bg-black/50 border-[#39FF14]/20 p-4 hover:border-[#39FF14]/50 transition-all hover:shadow-[0_0_20px_rgba(57,255,20,0.2)]"
                      >
                        <div className="mb-3">
                          <p className="font-bold text-lg text-[#39FF14] mb-1">{getFormatLabel(format)}</p>
                          <p className="text-xs text-zinc-500 truncate">{format.mimeType}</p>
                        </div>
                        <Button
                          onClick={() => handleDownload(format.itag)}
                          className="w-full bg-[#39FF14] text-black hover:bg-[#39FF14]/90 font-bold"
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Empty state */}
            {!videoInfo && !loading && !error && (
              <div className="text-center py-12 text-zinc-600">
                <p className="text-lg">Paste a YouTube link above to get started</p>
              </div>
            )}
          </Card>

          {/* Footer CTA */}
          <div className="text-center mt-8">
            <p className="text-2xl font-bold text-[#39FF14]">Stay Chad. Download more.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
