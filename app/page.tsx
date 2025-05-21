import Link from "next/link";
import { ArrowRight, CheckCircle, Mail, MapPin, MessageCircleMore, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Testimonial } from "@/components/testimonial";
import { ContactForm } from "@/components/contact-form";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { InteractiveServiceSelector } from "@/components/interactive-service-selector";
import { AnimatedStats } from "@/components/animated-stats";
import { InteractivePortfolio } from "@/components/interactive-portfolio";
import { InteractiveTimeline } from "@/components/interactive-timeline";
import { PricingCalculator } from "@/components/pricing-calculator";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ParticleBackground } from "@/components/particle-background";
import { FloatingElements } from "@/components/floating-elements";
import { AnimatedLogo } from "@/components/animated-logo";
import { AnimatedSphere } from "@/components/animated-sphere";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white relative overflow-hidden">
          <ParticleBackground />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <ScrollReveal direction="left">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      Creative Solutions for Your Digital Presence
                    </h1>
                    <p className="max-w-[600px] text-gray-300 md:text-xl">
                      We transform your ideas into compelling digital
                      experiences. From video editing to web development, we've
                      got you covered.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link href="#contact">
                      <Button
                        size="lg"
                        className="bg-white text-black hover:bg-gray-200"
                      >
                        Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="#services">
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-white text-black hover:text-white hover:bg-white/10"
                      >
                        Explore Services
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.2}>
                <div className="flex items-center justify-center">
                  <div className="relative h-[350px] w-[350px] md:h-[450px] md:w-[450px]">
                    <AnimatedSphere />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-16 bg-white border-b">
          <div className="container px-4 md:px-6">
            <ScrollReveal>
              <AnimatedStats />
            </ScrollReveal>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="services"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 relative overflow-hidden"
        >
          <FloatingElements />
          <div className="container px-4 md:px-6 relative z-10">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">
                    Our Services
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    What We Offer
                  </h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We provide a comprehensive range of creative services to
                    help your business stand out in the digital landscape.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <div className="mx-auto max-w-5xl py-12">
              <ScrollReveal delay={0.2}>
                <InteractiveServiceSelector />
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.4}>
              <div className="flex justify-center">
                <Link href="#contact">
                  <Button
                    size="lg"
                    className="bg-black text-white hover:bg-gray-800"
                  >
                    Get a Custom Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Process Section */}
        <section id="our_process" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">
                    Our Process
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    How We Work
                  </h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our streamlined process ensures that your project is
                    completed efficiently and to your satisfaction.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <div className="mx-auto max-w-5xl py-12">
              <InteractiveTimeline />
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section
          id="portfolio"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
        >
          <div className="container px-4 md:px-6">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">
                    Our Work
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Featured Projects
                  </h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Take a look at some of our recent projects across different
                    service categories.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <div className="mx-auto max-w-6xl py-12">
              <InteractivePortfolio />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">
                    Testimonials
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    What Our Clients Say
                  </h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Don't just take our word for it. Here's what our clients
                    have to say about our services.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <ScrollReveal delay={0.1}>
                <Testimonial
                  quote="The team delivered exceptional video editing services that exceeded our expectations. Highly recommended!"
                  author="Sarah Johnson"
                  company="Marketing Director, TechCorp"
                />
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <Testimonial
                  quote="Their graphic design work transformed our brand identity. We've seen a significant increase in engagement since working with them."
                  author="Michael Chen"
                  company="CEO, StartUp Innovations"
                />
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <Testimonial
                  quote="The web development project was completed on time and within budget. The team was professional and responsive throughout."
                  author="Jessica Williams"
                  company="Founder, Creative Solutions"
                />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Animated Logo Showcase */}
        {/* <section className="w-full py-12 md:py-24 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-white/20 px-3 py-1 text-sm">
                  Interactive Experience
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Creative Technology
                </h2>
                <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We combine cutting-edge technology with creative design to
                  deliver immersive digital experiences.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-3xl py-12">
              <div className="h-[400px] w-full">
                <AnimatedLogo />
              </div>
              <div className="text-center mt-8">
                <p className="text-gray-300">
                  Hover over the 3D logo to interact with it
                </p>
                <Link href="#contact" className="mt-6 inline-block">
                  <Button
                    size="lg"
                    className="bg-white text-black hover:bg-gray-200"
                  >
                    Start Your Project
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section> */}

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">
                    Pricing
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Custom Solutions, Custom Pricing
                  </h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We offer tailored pricing based on your specific project
                    requirements.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <ScrollReveal direction="left" delay={0.2}>
                <Card className="border-2 border-black h-full">
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl">Custom Quote</CardTitle>
                    <CardDescription>
                      Tailored to your specific needs
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                        <span>Personalized service package</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                        <span>Flexible payment terms</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                        <span>
                          50% Advance Payment is required to begin the project.
                        </span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 w-[60px] h-[60px]  text-green-500" />
                        <span>
                          If the delivered work is not understandable or does
                          not meet the agreed requirements, a partial or full
                          refund will be considered based on the extent of the
                          issue
                        </span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 w-[35px] h-[35px] text-green-500" />
                        <span>
                          Payment Options: Pay via PayPal, Visa (debit/credit),
                          or UPI (Google Pay, PhonePe, Paytm)
                        </span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                        <span>Regular progress updates</span>
                      </li>
                    </ul>
                    <div className="text-center mt-6">
                      <Link href="#contact">
                        <Button
                          size="lg"
                          className="bg-black text-white hover:bg-gray-800 w-full"
                        >
                          Request a Quote
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.3}>
                <PricingCalculator />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">
                    Contact Us
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Get In Touch
                  </h2>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Ready to start your project? Contact us for a custom quote.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
              <ScrollReveal direction="left" delay={0.2}>
                <div>
                  <div className="space-y-4">
                    <a
                      href="mailto:amanshukla141078@gmail.com"
                      className="flex items-center hover:underline hover:text-blue-500"
                    >
                      <Mail className="h-5 w-5 mr-2" />
                      <span>amanshukla141078@gmail.com</span>
                    </a>

                    <a href="tel:+917307994373" className="flex items-center hover:underline hover:text-blue-500">
                      <Phone className="h-5 w-5 mr-2" />
                      <span>+91 7307994373</span>
                    </a>

                    <a
                      href="https://wa.me/917307994373?text=Hi%20Promotion%20Studio%2C%20I%20am%20interested%20in%20graphic%20design%20or%20video%20editing%20services.%20Please%20share%20a%20quote."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center hover:underline hover:text-green-600"
                    >
                      <MessageCircleMore className="h-5 w-5 mr-2" />
                      <span>Get Quote on WhatsApp</span>
                    </a>

                    

                    {/* <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-2" />
                      <span>127, Gorakhpur</span>
                    </div> */}
                  </div>
                  <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      <Link
                        target="_blank"
                        href="https://www.facebook.com/share/17nvsrgnyx/"
                        className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                        <span className="sr-only">Facebook</span>
                      </Link>
                      <Link
                        target="_blank"
                        href="https://www.instagram.com/aman_editor111?igsh=dXAyMXRicHpsNnNo"
                        className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <rect
                            x="2"
                            y="2"
                            width="20"
                            height="20"
                            rx="5"
                            ry="5"
                          ></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                        <span className="sr-only">Instagram</span>
                      </Link>
                      {/* <Link
                        href="#"
                        className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                        </svg>
                        <span className="sr-only">Twitter</span>
                      </Link>
                      <Link
                        href="#"
                        className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                        <span className="sr-only">LinkedIn</span>
                      </Link> */}
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={0.3}>
                <ContactForm />
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
