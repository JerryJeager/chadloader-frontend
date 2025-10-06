import { Card } from "@/components/ui/card"
import { Zap, ShieldOff, Music, Video } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Download at maximum speed. No waiting. No buffering. Pure velocity.",
  },
  {
    icon: ShieldOff,
    title: "Zero Ads",
    description: "Ads are for betas. We keep it clean. Just you and your content.",
  },
  {
    icon: Video,
    title: "Video Downloads",
    description: "Any quality. Any format. Full control. Download like you own it.",
  },
  {
    icon: Music,
    title: "Audio Extraction",
    description: "Rip audio in seconds. MP3, WAV, whatever. Your playlist, your rules.",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight">Built Different</h2>
          <p className="text-xl text-muted-foreground font-bold">Features that separate Chads from the rest</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.2)] group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-black">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
