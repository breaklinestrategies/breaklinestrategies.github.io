import React from "react";
import { motion } from "motion/react";
import { ArrowRight, ChevronRight, Mail, Flag, Sprout, Target, ChartNoAxesCombined, BriefcaseBusiness, TrendingUp, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const logoSrc = "/images/logo.png";
const heroCourse = "/images/hero-course.jpg";
const servicesCourse = "/images/services-course.jpg";

const serviceHighlights = [
  {
    title: "Consulting & Revenue Diagnosis",
    description:
      "Identify where revenue is being lost or underused, whether that comes from weak off-peak demand, underpriced peak tee times, low on-property spend, poor booking-channel mix, or seasonal swings in play.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Data Collection & Cleanup",
    description:
      "Work with the data a course already has, including tee-time bookings, POS exports, customer ZIP codes, pricing history, weather records, competitor promotions, and local-event calendars. The goal is to clean and organize the data so it can actually support decisions.",
    icon: Target,
  },
  {
    title: "Forecasting & Demand Modeling",
    description:
      "Use historical performance, weather, seasonality, competitor activity, and local demand drivers to forecast utilization and revenue. This helps operators understand what demand may look like before making pricing or staffing decisions.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Pricing & Promotion Strategy",
    description:
      "Turn demand patterns into practical rate changes, targeted discounts, and on-property incentives. The focus is increasing revenue without relying only on more rounds or unnecessary pressure on the course.",
    icon: TrendingUp,
  },
  {
    title: "Implementation Support",
    description:
      "Help translate the analysis into changes the team can test, measure, and refine. The work is built around practical execution, not dashboards or reports that sit unused.",
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
      <header className="sticky top-0 z-50 overflow-hidden border-b border-black/10 bg-[#f4f0ea]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-0 lg:px-8">
          <a href="#home" className="flex items-center">
            <img
              src={logoSrc}
              alt="BreakLine Strategies"
              className="block h-35 w-auto object-contain mix-blend-multiply md:h-40 -my-6"
            />
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-semibold text-black/200 transition hover:text-black"
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
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-14">
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

              <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-[#161616] md:text-5xl">
                Revenue analytics for golf operators who want smarter pricing, efficient utilization, and clearer growth decisions.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-black/70">
                BreakLine Strategies helps golf courses turn tee-time, customer, weather, competitor, and local-event data into pricing and revenue strategies that improve performance without overloading the course.
              </p>
              <div className="mt-8 rounded-2xl border border-black/10 bg-white/75 p-5 shadow-sm">
                <p className="text-sm uppercase tracking-[0.22em] text-black/45">
                  Recent project result
                </p>
                <p className="mt-2 text-2xl font-semibold text-[#161616]">
                  Contributed to a 12% revenue increase in two months.
                </p>
                <p className="mt-2 text-sm leading-6 text-black/65">
                  Pricing and promotion changes were based on booking behavior, customer travel distance,
                  utilization patterns, weather history, competitor promotions, and local events.
                </p>
              </div>
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
                  <p className="text-3xl font-semibold text-[#171717]">Pricing</p>
                  <p className="mt-2 text-sm leading-6 text-black/60">
                    Use booking patterns and demand signals to set smarter rates.
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-[#171717]">Utilization</p>
                  <p className="mt-2 text-sm leading-6 text-black/60">
                    Grow revenue without unnecessarily overloading the course.
                  </p>
                </div>
                <div>
                  <p className="text-3xl font-semibold text-[#171717]">Forecasting</p>
                  <p className="mt-2 text-sm leading-6 text-black/60">
                    Plan around weather, seasonality, competitors, and local demand drivers.
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
                  src={heroCourse}
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
                A practical process for finding and capturing revenue opportunities.
              </h2>
          
            </div>

            <div className="mt-14 overflow-hidden rounded-[2rem] border border-black/10 bg-[#ebe5dc] p-4 shadow-[0_25px_70px_rgba(0,0,0,0.08)]">
              <img
                src={servicesCourse}
                alt="Golf course aerial view"
                className="h-[420px] w-full rounded-[1.5rem] object-cover"
              />
            </div>

            <div className="mx-auto mt-16 max-w-3xl text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-lg">
                *
              </div>
              <h3 className="mt-6 text-4xl font-semibold tracking-tight text-[#161616]">
                From messy course data to decisions you can act on.
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-black/65">
                The work starts with understanding the business problem, then turns booking, customer, weather,
                competitor, local-event data, and more into pricing, forecasting, and utilization decisions.
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
                    className={
                      serviceHighlights.length === 5 && index === 3
                        ? "xl:col-start-1 xl:translate-x-1/2"
                        : serviceHighlights.length === 5 && index === 4
                        ? "xl:col-start-2 xl:translate-x-1/2"
                        : ""
                    }
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
          <div className="mx-auto max-w-7xl px-6 py-1 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm uppercase tracking-[0.26em] text-black/45">Case Studies</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#161616] md:text-5xl">
                Selected work that shows how BreakLine thinks.
              </h2>
              
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
              
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-black/10 bg-[#f7f4ef]">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <p className="text-sm uppercase tracking-[0.26em] text-black/45">Contact</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[#161616]">
                Want to find where your course is leaving revenue on the table?
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-black/65">
                Send a message with a little context about your course, booking system,
                or current revenue challenge. I’ll respond directly.
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
              <form
                action="https://formspree.io/f/mlgaylzd"
                method="POST"
                className="grid gap-5"
              >
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-black/50">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-2xl border border-black/10 bg-[#faf8f4] px-4 py-3 text-[#171717] outline-none placeholder:text-black/35"
                    placeholder="Your name"
                  />
                </div>

                <div>
                <label htmlFor="email" className="mb-2 block text-sm text-black/50">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-2xl border border-black/10 bg-[#faf8f4] px-4 py-3 text-[#171717] outline-none placeholder:text-black/35"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="mb-2 block text-sm text-black/50">
                  Course or Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className="w-full rounded-2xl border border-black/10 bg-[#faf8f4] px-4 py-3 text-[#171717] outline-none placeholder:text-black/35"
                  placeholder="Golf course, club, ownership group, or company"
                />
              </div>
              <div>
                <label htmlFor="interest" className="mb-2 block text-sm text-black/50">
                  What are you looking for help with?
                </label>
                <select
                  id="interest"
                  name="interest"
                  defaultValue=""
                  className="w-full rounded-2xl border border-black/10 bg-[#faf8f4] px-4 py-3 text-[#171717] outline-none"
                >
                  <option value="" disabled>
                    Select one
                  </option>
                  <option value="Pricing strategy">Pricing strategy</option>
                  <option value="Revenue forecasting">Revenue forecasting</option>
                  <option value="Utilization analysis">Utilization analysis</option>
                  <option value="Customer behavior analysis">
                    Customer behavior analysis
                  </option>
                  <option value="General consulting">General consulting</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm text-black/50">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full rounded-2xl border border-black/10 bg-[#faf8f4] px-4 py-3 text-[#171717] outline-none placeholder:text-black/35"
                  placeholder="Tell me a bit about your course, ownership group, or what you are trying to improve."
                />
              </div>

              <Button
                type="submit"
                className="w-full rounded-full bg-[#171717] py-6 text-white hover:bg-black/85"
              >
                Send message
              </Button>
            </form>
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
