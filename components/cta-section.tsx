import { Button } from "@/components/ui/button"
import { Download, ArrowRight } from "lucide-react"
import Link from "next/link"

export function CtaSection() {
  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Neon glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[150px]" />

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <h2 className="text-5xl md:text-7xl font-black tracking-tight text-balance">
          Ready to Download
          <br />
          <span className="text-primary">Like a Chad?</span>
        </h2>

        <p className="text-xl md:text-2xl text-muted-foreground font-bold max-w-2xl mx-auto">
          Join the elite. Stop wasting time with inferior tools.
          <br />
          Your content awaits.
        </p>

        <Link href="/download" className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button
            size="lg"
            className="text-lg px-10 py-7 font-black bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_40px_rgba(34,197,94,0.5)] hover:shadow-[0_0_50px_rgba(34,197,94,0.7)] transition-all"
          >
            <Download className="mr-2 h-6 w-6" />
            Start Dominating Now
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
        </Link>

        <p className="text-sm text-muted-foreground font-mono pt-8">// No credit card. No signup. No excuses.</p>
      </div>

      {/* Footer */}
      <footer className="mt-32 pt-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-2xl font-black">
              Chad<span className="text-primary">Loader</span>
            </div>
            <div className="text-sm text-muted-foreground">© 2025 ChadLoader. Built by Chads, for Chads.</div>
          </div>
        </div>
      </footer>
    </section>
  )
}
