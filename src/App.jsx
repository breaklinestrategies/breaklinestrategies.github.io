import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Mail, Flag, Sprout, Target, ChartNoAxesCombined, BriefcaseBusiness, TrendingUp, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const logoSrc = "data:image/webp;base64,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";
const featuredGolfImage = "data:image/webp;base64,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";

const serviceHighlights = [
  {
    title: "Consulting",
    description:
      "Start by identifying where the business is underperforming. Whether the issue is weak demand on certain days, low spend in the pro shop, or seasonal swings in play, the first step is defining the real business problem and the data needed to solve it.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Data Collection",
    description:
      "Build or improve the system used to capture the right information. If you already use platforms like ForeUp or GolfNow, the work can build on that foundation rather than starting from scratch.",
    icon: Target,
  },
  {
    title: "Data Structuring",
    description:
      "Raw exports are rarely ready for analysis. Organize and format data so it is clean, consistent, and easy to use now, while also improving how it is collected going forward.",
    icon: Sprout,
  },
  {
    title: "Analytics & Insight",
    description:
      "Turn data into models, dashboards, and practical recommendations. This can include understanding who is spending, when revenue peaks, where opportunities are being missed, and how pricing or promotions can be improved.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Demand Drivers",
    description:
      "Look beyond basic reporting to understand what actually drives demand. Weather, competition, traffic patterns, local events, and seasonality all shape performance, and those patterns can be measured and planned around.",
    icon: Flag,
  },
  {
    title: "Implementation Support",
    description:
      "Use the findings to guide real decisions, from pricing and marketing to operational planning. The point is not just insight for insight's sake, but changes that fit the course and can actually be executed.",
    icon: ChevronRight,
  },
];

const caseStudies = [
  {
    title: "Pricing and Demand Review",
    category: "Case Study",
    description:
      "A structured review of tee-time demand, rate patterns, and customer behavior to identify where pricing can be tightened and where revenue is being left on the table.",
    outcome: "Built to show how better demand segmentation can improve pricing decisions.",
  },
  {
    title: "Course Revenue Opportunity Audit",
    category: "Case Study",
    description:
      "A sample project focused on identifying missed revenue opportunities across play patterns, seasonality, and on-site spend rather than looking only at headline totals.",
    outcome: "Framed around practical changes in pricing, promotions, and operational focus.",
  },
  {
    title: "Ownership Group Growth Strategy",
    category: "Case Study",
    description:
      "An example engagement for a company managing multiple properties, designed to compare performance across courses and prioritize the highest-impact growth opportunities.",
    outcome: "Useful for showing portfolio-level thinking, not just single-course analysis.",
  },
];

const resultsHighlights = [
  {
    metric: "Channel Analysis",
    title: "Mapped booking behavior across every major tee-time source",
    description:
      "Analyzed where golfers were booking, how far in advance they booked by channel, how much they paid, and the total revenue generated from each source. This made it possible to compare channel value instead of treating every booking source the same.",
    icon: TrendingUp,
  },
  {
    metric: "Portfolio Utilization",
    title: "Compared utilization across multiple courses by day and month",
    description:
      "Built a multi-course view of utilization rates to show how performance changed across the portfolio throughout the year. That helped identify where demand was strongest, where capacity was being underused, and where pricing and operations needed to adapt.",
    icon: BarChart3,
  },
  {
    metric: "Pricing Strategy",
    title: "Turned travel, demand, and spending patterns into rate changes",
    description:
      "Used ZIP-code analysis, willingness-to-travel patterns, seasonal demand, and customer spending behavior to support new tee-time pricing and targeted on-property incentives. The result was a more intentional rate structure built around when customers were most willing to play and spend.",
    icon: ChartNoAxesCombined,
  },
];

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Results", href: "#results" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function BreakLineStrategiesSite() {
  return (
    <div className="min-h-screen bg-[#f4f0ea] text-[#171717]">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f4f0ea]/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-4">
            <img src={logoSrc} alt="BreakLine Strategies" className="h-12 w-auto object-contain md:h-14" />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-black/70 transition hover:text-black"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#contact">
            <Button className="rounded-full bg-[#171717] px-5 text-white hover:bg-black/85">
              Get in touch
            </Button>
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,150,120,0.18),transparent_28%),radial-gradient(circle_at_left,rgba(0,0,0,0.05),transparent_25%)]" />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="relative z-10"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.22em] text-black/65 shadow-sm">
                <Flag className="h-3.5 w-3.5" />
                Revenue strategy for golf operators
              </div>

              <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight text-[#161616] md:text-6xl">
                Helping golf courses and ownership groups grow with sharper strategy.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-black/70">
                BreakLine Strategies works with golf businesses to improve revenue performance, uncover growth
                opportunities, and turn operational data into decisions that actually move the business forward.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="#contact">
                  <Button size="lg" className="rounded-full bg-[#171717] px-6 text-white hover:bg-black/85">
                    Start a conversation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a href="#services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full border-black/15 bg-white/70 px-6 text-[#171717] hover:bg-white"
                  >
                    View services
                  </Button>
                </a>
              </div>

              <div className="mt-12 grid gap-5 border-t border-black/10 pt-8 sm:grid-cols-3">
                <div>
                  <p className="text-3xl font-semibold text-[#171717]">Revenue</p>
                  <p className="mt-2 text-sm leading-6 text-black/60">
                    Focus on pricing, demand, and business performance.
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-[#171717]">Growth</p>
                  <p className="mt-2 text-sm leading-6 text-black/60">
                    Build plans around real opportunities, not vague goals.
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-[#171717]">Clarity</p>
                  <p className="mt-2 text-sm leading-6 text-black/60">
                    Translate messy information into decisions you can act on.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="relative"
            >
              <div className="absolute -left-8 top-10 h-48 w-48 rounded-full bg-[#7d8e74]/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white p-4 shadow-[0_30px_80px_rgba(0,0,0,0.10)]">
                <img
                  src={featuredGolfImage}
                  alt="Golf course view"
                  className="h-[420px] w-full rounded-[1.5rem] object-cover"
                />
                <div className="absolute inset-x-10 bottom-10 rounded-[1.5rem] border border-white/30 bg-black/65 p-6 text-white backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/70">Built for golf businesses</p>
                  <h2 className="mt-2 text-2xl font-semibold">Strategy, analytics, and implementation support</h2>
                  <p className="mt-3 max-w-lg text-sm leading-6 text-white/80">
                    Designed for owners and operators who want a clearer view of where revenue is coming from, where it is being missed, and what to do next.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="services" className="border-t border-black/10 bg-white/40">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm uppercase tracking-[0.26em] text-black/45">Services</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#161616] md:text-5xl">
                A commitment to growth and problem-solving.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/65">
                This section borrows the strongest parts of your earlier services page: a centered intro, a visual break
                with a golf image, and a more detailed service grid underneath. It keeps the original feel, but makes it
                cleaner, more premium, and easier to scan.
              </p>
            </div>

            <div className="mt-14 overflow-hidden rounded-[2rem] border border-black/10 bg-[#ebe5dc] p-4 shadow-[0_25px_70px_rgba(0,0,0,0.08)]">
              <img
                src={featuredGolfImage}
                alt="Golf course aerial view"
                className="h-[420px] w-full rounded-[1.5rem] object-cover"
              />
            </div>

            <div className="mx-auto mt-16 max-w-3xl text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-lg">
                *
              </div>
              <h3 className="mt-6 text-4xl font-semibold tracking-tight text-[#161616]">
                A practical process for creating solutions.
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-black/65">
                From identifying the problem and collecting the right data to producing insights and helping implement
                changes, the work is structured around making the business stronger, not just producing reports.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {serviceHighlights.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                  >
                    <Card className="h-full rounded-[1.75rem] border-black/10 bg-white/80 shadow-[0_18px_40px_rgba(0,0,0,0.05)]">
                      <CardContent className="p-7">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-[#eef2ea] text-[#2f4a32]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h4 className="mt-6 text-2xl font-semibold text-[#161616]">{service.title}</h4>
                        <p className="mt-4 text-sm leading-7 text-black/70">{service.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="case-studies" className="border-t border-black/10 bg-white/70">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm uppercase tracking-[0.26em] text-black/45">Case Studies</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#161616] md:text-5xl">
                Selected work that shows how BreakLine thinks.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-black/65">
                These can be real projects, sample analyses, or condensed breakdowns of work you have already done. The
                goal is to show process, judgment, and business thinking before a client ever gets on a call.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                >
                  <Card className="h-full rounded-[1.75rem] border-black/10 bg-[#faf7f2] shadow-[0_18px_40px_rgba(0,0,0,0.05)]">
                    <CardContent className="p-7">
                      <p className="text-xs uppercase tracking-[0.22em] text-black/45">{study.category}</p>
                      <h3 className="mt-4 text-2xl font-semibold text-[#161616]">{study.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-black/70">{study.description}</p>
                      <div className="mt-6 rounded-2xl border border-black/10 bg-white px-4 py-4">
                        <p className="text-xs uppercase tracking-[0.18em] text-black/45">Why it matters</p>
                        <p className="mt-2 text-sm leading-6 text-black/70">{study.outcome}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="results" className="border-t border-black/10 bg-[#eef2ea]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="text-sm uppercase tracking-[0.26em] text-black/45">Results</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#161616] md:text-5xl">
                  A place for the outcomes behind the work.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-black/65">
                  This section now reflects the kind of work you actually did: analyzing booking channels, lead times,
                  pricing, total revenue, course utilization, player ZIP codes, travel behavior, and seasonal demand.
                  That analysis supported updated tee-time rates and on-property offers designed to keep customers on site
                  longer and make pricing better match real demand.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {resultsHighlights.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ duration: 0.45, delay: index * 0.05 }}
                      className="rounded-[1.75rem] border border-black/10 bg-white p-7 shadow-[0_18px_40px_rgba(0,0,0,0.05)]"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-[#f6f8f2] text-[#2f4a32]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="mt-6 text-xs uppercase tracking-[0.22em] text-black/45">{item.metric}</p>
                      <h3 className="mt-3 text-2xl font-semibold text-[#161616]">{item.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-black/70">{item.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-black/10">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div>
              <p className="text-sm uppercase tracking-[0.26em] text-black/45">About</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#161616]">
                A focused consulting brand for the business side of golf.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-black/70">
              <p>
                BreakLine Strategies is built around a simple idea: golf businesses deserve sharper thinking when it comes
                to revenue growth, performance, and long-term planning.
              </p>
              <p>
                Instead of offering generic business advice, the focus here is on golf courses and the groups that own and
                operate them. That makes the work more specific, more useful, and much closer to the actual economics of
                the business.
              </p>
              <p>
                Once you send over your final about-page copy, this section can be swapped out directly with your own
                story, background, and point of view.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-black/10 bg-[#f7f4ef]">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="text-sm uppercase tracking-[0.26em] text-black/45">Contact</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#161616]">
                Let’s talk about your course, portfolio, or growth goals.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-black/70">
                For now, the cleanest contact setup is a simple form paired with your email. Later, we can wire this up to
                Netlify Forms or another free form handler when the site is ready to deploy.
              </p>

              <div className="mt-10 space-y-4 text-black/70">
                <a
                  href="mailto:breaklinestrategies@gmail.com"
                  className="flex items-center gap-3 transition hover:text-black"
                >
                  <Mail className="h-4 w-4" />
                  <span>breaklinestrategies@gmail.com</span>
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_22px_60px_rgba(0,0,0,0.07)]">
              <div className="grid gap-5">
                <div>
                  <label className="mb-2 block text-sm text-black/50">Name</label>
                  <input
                    className="w-full rounded-2xl border border-black/10 bg-[#faf8f4] px-4 py-3 text-[#171717] outline-none placeholder:text-black/35"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-black/50">Email</label>
                  <input
                    className="w-full rounded-2xl border border-black/10 bg-[#faf8f4] px-4 py-3 text-[#171717] outline-none placeholder:text-black/35"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm text-black/50">Message</label>
                  <textarea
                    rows={6}
                    className="w-full rounded-2xl border border-black/10 bg-[#faf8f4] px-4 py-3 text-[#171717] outline-none placeholder:text-black/35"
                    placeholder="Tell me a bit about your course, ownership group, or what you are trying to improve."
                  />
                </div>
                <Button className="w-full rounded-full bg-[#171717] py-6 text-white hover:bg-black/85">
                  Send message
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/10 bg-white/60">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-black/50 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 BreakLine Strategies. All rights reserved.</p>
          <div className="flex gap-6">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="transition hover:text-black">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
