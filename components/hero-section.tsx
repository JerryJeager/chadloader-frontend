import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)]" />

      {/* Neon glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        {/* Gigachad placeholder */}
        <div className="mx-auto w-48 h-48 mt-8 mb-8 relative">
          <img
            src="/gigachad-meme-silhouette-alpha-male.jpg"
            alt="Gigachad"
            className="w-full h-full object-cover rounded-lg border-4 border-primary shadow-[0_0_30px_rgba(34,197,94,0.5)]"
          />
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-balance">
          Download YouTube
          <br />
          <span className="text-primary drop-shadow-[0_0_20px_rgba(34,197,94,0.8)]">Like a Chad</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground font-bold max-w-2xl mx-auto text-pretty">
          No ads. No limits. Just pure <span className="text-primary">Sigma efficiency</span>.
          <br />
          Paste link. Hit download. Dominate.
        </p>

        <a href={"https://github.com/JerryJeager/chadloader-app/releases/download/v1.0.0/chadloader.exe"} className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button
            size="lg"
            className="text-lg px-8 py-6 font-black bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_rgba(34,197,94,0.4)] hover:shadow-[0_0_40px_rgba(34,197,94,0.6)] transition-all"
          >
            <Download className="mr-2 h-5 w-5" />
            Download for Windows
          </Button>
          <p className="text-sm text-muted-foreground font-mono">// Beta Testers Stay Home</p>
        </a>

        {/* Stats */}
        <div className="grid grid-cols-3 pb-8 gap-8 pt-16 max-w-3xl mx-auto">
          <div className="space-y-2">
            <div className="text-4xl font-black text-primary">∞</div>
            <div className="text-sm text-muted-foreground font-bold">Downloads</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-black text-primary">0</div>
            <div className="text-sm text-muted-foreground font-bold">Ads Ever</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-black text-primary">100%</div>
            <div className="text-sm text-muted-foreground font-bold">Chad Energy</div>
          </div>
        </div>
      </div>
    </section>
  )
}
