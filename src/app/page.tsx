import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Bug, CheckCircle, Shield, Users, Zap, Globe, FileCheck, Clock } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-[#2a3952] min-h-screen flex justify-center items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/5 via-transparent to-transparent" />
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/abstract-technology-network-connections-quality-as.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container relative mx-auto px-4 py-20 sm:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-balance font-bold text-4xl text-[#f4e5b8] sm:text-5xl md:text-6xl lg:text-7xl">
              Reliable Software Quality, Powered by Freelance QA Experts
            </h1>
            <p className="mb-10 text-balance text-lg text-[#a89968] sm:text-xl md:text-2xl leading-relaxed">
              A unified platform connecting companies with vetted freelance QA professionals for bug hunting,
              project-based testing, and dedicated QA roles.
            </p>
            {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-[#d4af37] text-[#0a1628] hover:bg-[#f4e5b8] font-semibold text-lg px-8">
                Find QA Talent
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0a1628] font-semibold text-lg px-8 bg-transparent"
              >
                Join as a QA Freelancer
              </Button>
            </div> */}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="what-we-do" className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 font-bold text-3xl text-[#d4af37] sm:text-4xl md:text-5xl">What We Do</h2>
          <p className="text-[#f4e5b8] text-lg leading-relaxed sm:text-xl">
            We provide a flexible QA marketplace where businesses can access on-demand quality assurance expertise, and
            QA professionals can work on meaningful projects — from quick bug hunts to long-term product ownership.
          </p>
          <p className="mt-6 text-[#a89968] text-lg leading-relaxed">
            Whether you are launching a new product, scaling an existing system, or improving software reliability, our
            platform helps you ensure quality at every stage.
          </p>
        </div>
      </section>


      {/* How It Works Section */}
      <section className="border-y border-[#2a3952] bg-[#0a1628] py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center font-bold text-3xl text-[#d4af37] sm:text-4xl md:text-5xl">How It Works</h2>
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
            {/* For Companies */}
            <div>
              <h3 className="mb-8 font-semibold text-2xl text-[#f4e5b8] sm:text-3xl">For Companies</h3>
              <div className="space-y-6">
                {[
                  "Post a QA project or testing mission",
                  "Define scope, tools, and timeline",
                  "Review tester profiles or receive applications",
                  "Track progress and approve deliverables",
                  "Release payment securely",
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#d4af37] font-bold text-[#0a1628] text-lg">
                      {index + 1}
                    </div>
                    <p className="pt-2 text-[#f4e5b8] text-lg leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* For QA Freelancers */}
            <div>
              <h3 className="mb-8 font-semibold text-2xl text-[#f4e5b8] sm:text-3xl">For QA Freelancers</h3>
              <div className="space-y-6">
                {[
                  "Create a tester profile and verify skills",
                  "Browse available testing projects",
                  "Apply or accept invitations",
                  "Submit structured bug reports or test results",
                  "Get paid for approved work",
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#d4af37] font-bold text-[#0a1628] text-lg">
                      {index + 1}
                    </div>
                    <p className="pt-2 text-[#f4e5b8] text-lg leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-4 py-20">
        <h2 className="mb-12 text-center font-bold text-3xl text-[#d4af37] sm:text-4xl md:text-5xl">
          Services & Work Types
        </h2>
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          <Card className="bg-[#1a2942] border-[#2a3952]">
            <CardHeader>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-[#d4af37]/10">
                <Bug className="h-7 w-7 text-[#d4af37]" />
              </div>
              <CardTitle className="text-[#f4e5b8] text-2xl">Bug Hunting & Exploratory Testing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-[#a89968]">
              <div className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#d4af37]" />
                <span>Paid per validated bug</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#d4af37]" />
                <span>Severity-based rewards</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#d4af37]" />
                <span>Clear scope and reporting guidelines</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1a2942] border-[#2a3952]">
            <CardHeader>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-[#d4af37]/10">
                <FileCheck className="h-7 w-7 text-[#d4af37]" />
              </div>
              <CardTitle className="text-[#f4e5b8] text-2xl">Project-Based QA</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-[#a89968]">
              <div className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#d4af37]" />
                <span>Manual testing</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#d4af37]" />
                <span>Automation testing</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#d4af37]" />
                <span>Regression & UAT support</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#d4af37]" />
                <span>Web, mobile, and API testing</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1a2942] border-[#2a3952]">
            <CardHeader>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-[#d4af37]/10">
                <Users className="h-7 w-7 text-[#d4af37]" />
              </div>
              <CardTitle className="text-[#f4e5b8] text-2xl">Dedicated QA (Contract-Based)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-[#a89968]">
              <div className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#d4af37]" />
                <span>Full or part-time engagement</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#d4af37]" />
                <span>Integrated into your product team</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-[#d4af37]" />
                <span>Ongoing quality ownership</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* QA Freelance Workflow */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-center font-bold text-3xl text-[#d4af37] sm:text-4xl md:text-5xl">
            QA Freelance Workflow
          </h2>
          <p className="mb-16 text-center text-[#a89968] text-lg leading-relaxed">
            Our platform is designed with a clear, fair, and transparent workflow so QA professionals understand exactly
            how they progress and get rewarded.
          </p>

          <div className="space-y-6">
            {[
              {
                title: "User Verification",
                description:
                  "Sign up and complete identity, skill, and experience verification to ensure trust and quality across the platform.",
              },
              {
                title: "Join the Platform",
                description:
                  "Once verified, you officially join the QA freelancer pool and gain access to available testing opportunities.",
              },
              {
                title: "Waiting for Assignment",
                description:
                  "Receive invitations or browse open testing missions based on your skills, tools, and availability.",
              },
              {
                title: "Doing the Work",
                description:
                  "Perform testing activities according to the defined scope: Bug hunting, exploratory testing, test case execution, automation or regression testing.",
              },
              {
                title: "Project Closed",
                description:
                  "Submitted work and bug reports are reviewed and validated. Approved results are marked as completed.",
              },
              {
                title: "Get Bounties / Rewards",
                description: "Earn payments based on validated bugs, completed milestones, or agreed project fees.",
              },
              {
                title: "Payout",
                description: "Withdraw your earnings securely through supported payout methods after project closure.",
              },
            ].map((step, index) => (
              <Card key={index} className="relative overflow-hidden bg-[#1a2942] border-[#2a3952]">
                <div className="absolute left-0 top-0 h-full w-1 bg-[#d4af37]" />
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#d4af37] font-bold text-[#0a1628] text-xl">
                      {index + 1}
                    </div>
                    <CardTitle className="text-[#f4e5b8] text-xl sm:text-2xl">{step.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="pl-16 text-[#a89968] leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="mb-12 text-center font-bold text-3xl text-[#d4af37] sm:text-4xl md:text-5xl">Who It's For</h2>
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {[
            { title: "Startups", desc: "Launch faster with fewer bugs" },
            { title: "Scale-ups", desc: "Maintain quality while growing rapidly" },
            { title: "Enterprises", desc: "Add flexible QA capacity without long-term hiring" },
            { title: "QA Professionals", desc: "Work independently on diverse products" },
          ].map((audience, index) => (
            <Card key={index} className="bg-[#1a2942] border-[#2a3952]">
              <CardHeader>
                <CardTitle className="text-[#d4af37] text-2xl">{audience.title}</CardTitle>
                <CardDescription className="text-[#a89968] text-lg">{audience.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section id="why-choose" className="border-y border-[#2a3952] bg-[#0a1628] py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center font-bold text-3xl text-[#d4af37] sm:text-4xl md:text-5xl">
            Why Choose Our Platform
          </h2>
          <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Shield,
                title: "Quality-Focused Talent",
                desc: "Curated QA professionals with proven experience",
              },
              { icon: Zap, title: "Flexible Engagement Models", desc: "Bug-based, project-based, or dedicated QA" },
              { icon: FileCheck, title: "Transparent Reporting", desc: "Standardized bug report templates" },
              { icon: CheckCircle, title: "Secure Payments", desc: "Escrow-based payments for both parties" },
              { icon: Globe, title: "Global & Remote", desc: "Work with teams and testers worldwide" },
              { icon: Clock, title: "Built for Modern QA", desc: "Agile, CI/CD-friendly workflows" },
            ].map((feature, index) => (
              <Card key={index} className="bg-[#1a2942] border-[#2a3952] text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#d4af37]/10">
                    <feature.icon className="h-8 w-8 text-[#d4af37]" />
                  </div>
                  <CardTitle className="text-[#f4e5b8] text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#a89968]">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Fairness */}
      <section className="border-y border-[#2a3952] bg-[#0a1628] py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center font-bold text-3xl text-[#d4af37] sm:text-4xl md:text-5xl">
            Trust & Fairness
          </h2>
          <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
            {[
              "Clear testing scopes and rules",
              "Severity-based bug validation",
              "Dispute resolution mechanisms",
              "Rating & reputation system for testers and clients",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-[#d4af37]" />
                <p className="text-[#f4e5b8] text-lg leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-balance font-bold text-3xl text-[#f4e5b8] sm:text-4xl md:text-5xl">
            Join our QA marketplace and start collaborating with trusted QA professionals today.
          </h2>
          {/* <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-[#d4af37] text-[#0a1628] hover:bg-[#f4e5b8] font-semibold text-lg px-8">
              Post a Project
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0a1628] font-semibold text-lg px-8 bg-transparent"
            >
              Become a QA Freelancer
            </Button>
          </div> */}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#2a3952] bg-[#0a1628] py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2 text-[#a89968]">© 2026 QA Platform by Coding Collective. All rights reserved.</p>
          <p className="text-[#a89968] text-sm">
            Connecting software teams with quality-driven freelance QA professionals worldwide.
          </p>
        </div>
      </footer>
    </div>
  )
}
