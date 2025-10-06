import { Card } from "@/components/ui/card"

const testimonials = [
  {
    quote: "Chads don't buffer.",
    author: "Anonymous Sigma",
    role: "Professional Grindset",
  },
  {
    quote: "I used to wait for videos. Now videos wait for me.",
    author: "Alpha Mike",
    role: "Content Dominator",
  },
  {
    quote: "Other downloaders? Beta behavior.",
    author: "Gigachad Greg",
    role: "Efficiency Expert",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-4 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight">
            What <span className="text-primary">Chads</span> Say
          </h2>
          <p className="text-xl text-muted-foreground font-bold">Real testimonials from real alphas</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-2 border-border relative overflow-hidden group hover:border-primary transition-all duration-300"
            >
              {/* Quote decoration */}
              <div className="absolute top-4 right-4 text-6xl text-primary/10 font-black">"</div>

              <div className="space-y-4 relative z-10">
                <p className="text-lg font-bold leading-relaxed">"{testimonial.quote}"</p>

                <div className="pt-4 border-t border-border">
                  <div className="font-black text-primary">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Meme placeholder */}
        <div className="mt-16 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-2xl">
            <img
              src="/gigachad-hero.jpg"
              alt="Chad meme"
              className="w-full h-auto rounded-lg border-4 border-primary shadow-[0_0_40px_rgba(34,197,94,0.3)]"
            />
          </div>
          <div className=" p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
            <p className="text-xl md:text-2xl font-bold text-white text-center drop-shadow-lg">
              "How I feel after downloading a 10-hour 4K video in 0.2 seconds with Chadloader"
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
