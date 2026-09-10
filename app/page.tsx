"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Phone, Mail, MapPin, Clock, ChevronRight, Star,
  CheckCircle, TrendingUp, Shield, Users, Award,
  BarChart3, FileText, Calculator, Briefcase, Menu, X
} from "lucide-react";
import { Animate, AnimateStagger, AnimateScale, CountUp } from "./components/Animate";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const services = [
    { icon: <FileText className="w-8 h-8" />, title: "Tax Consultancy", description: "Expert tax planning and compliance services for individuals and businesses", color: "bg-blue-600" },
    { icon: <Calculator className="w-8 h-8" />, title: "Accounting Services", description: "Comprehensive accounting solutions tailored to your business needs", color: "bg-orange-500" },
    { icon: <Briefcase className="w-8 h-8" />, title: "Audit & Assurance", description: "Statutory and internal audit services with meticulous attention to detail", color: "bg-green-500" },
    { icon: <BarChart3 className="w-8 h-8" />, title: "Financial Advisory", description: "Strategic financial planning and business advisory services", color: "bg-blue-600" },
    { icon: <Shield className="w-8 h-8" />, title: "GST Compliance", description: "Complete GST registration, filing, and compliance management", color: "bg-orange-500" },
    { icon: <TrendingUp className="w-8 h-8" />, title: "Business Registration", description: "Company incorporation, ROC compliance, and regulatory filings", color: "bg-green-500" },
  ];

  const stats = [
    { number: 15, suffix: "+", label: "Years Experience", icon: <Award className="w-6 h-6" /> },
    { number: 500, suffix: "+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { number: 100, suffix: "%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: 24, suffix: "/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> },
  ];

  const testimonials = [
    { name: "Rajesh Kumar", company: "Kumar Enterprises", text: "Exceptional service and professional approach. The team handled our tax matters with great expertise and dedication.", rating: 5 },
    { name: "Priya Sharma", company: "Sharma & Associates", text: "Highly knowledgeable and responsive. They have been instrumental in streamlining our financial processes.", rating: 5 },
    { name: "Amit Verma", company: "Verma Industries", text: "Outstanding audit services and valuable business insights. A trusted partner for our financial needs.", rating: 5 },
  ];

  const faqs = [
    { question: "What services do you offer?", answer: "We offer comprehensive services including tax consultancy, accounting, audit & assurance, GST compliance, financial advisory, and business registration services." },
    { question: "How can I schedule a consultation?", answer: "You can schedule a consultation by calling us at +91-9582549263 or +91-7290000757, or by sending an email to cachandanvarshney@gmail.com" },
    { question: "Do you provide services for startups?", answer: "Yes, we specialize in helping startups with company registration, GST compliance, accounting setup, and ongoing financial advisory services." },
    { question: "What are your office timings?", answer: "Our office is open Monday to Saturday from 10:00 AM to 6:00 PM. We also offer flexible consultation timings based on client requirements." },
  ];

  const whyUs = [
    { icon: <Award className="w-12 h-12" />, title: "Expertise & Experience", desc: "Over 15 years of industry experience with qualified professionals" },
    { icon: <Shield className="w-12 h-12" />, title: "Commitment to Excellence", desc: "Dedicated to delivering high-quality service and accuracy" },
    { icon: <Users className="w-12 h-12" />, title: "Client-Centric Approach", desc: "Personalized solutions tailored to your specific needs" },
    { icon: <Clock className="w-12 h-12" />, title: "Timely Delivery", desc: "We value your time and ensure on-time service delivery" },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center text-xs md:text-sm gap-x-4 gap-y-1">
            <div className="flex items-center gap-x-4 flex-wrap justify-center gap-y-1">
              <a href="tel:+919582549263" className="flex items-center gap-1.5 hover:text-orange-400 transition">
                <Phone className="w-3 h-3 flex-shrink-0" /><span>+91-9582549263</span>
              </a>
              <a href="tel:+917290000757" className="flex items-center gap-1.5 hover:text-orange-400 transition">
                <Phone className="w-3 h-3 flex-shrink-0" /><span>+91-7290000757</span>
              </a>
            </div>
            <a href="mailto:cachandanvarshney@gmail.com" className="hidden sm:flex items-center gap-1.5 hover:text-orange-400 transition">
              <Mail className="w-3 h-3 flex-shrink-0" /><span>cachandanvarshney@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-12 h-12 md:w-16 md:h-16 relative flex-shrink-0">
                <Image src="/CA-India-Logo.png" alt="CA India Logo" width={64} height={64} className="object-contain" />
              </div>
              <div className="min-w-0">
                <h1 className="text-lg md:text-2xl font-bold text-blue-900 leading-tight truncate">CA Chandan Varshney</h1>
                <p className="text-xs md:text-sm text-gray-600">Chartered Accountant</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-blue-900 font-semibold hover:text-orange-500 transition">Home</Link>
              <Link href="#about" className="text-gray-700 hover:text-orange-500 transition">About Us</Link>
              <Link href="#why-us" className="text-gray-700 hover:text-orange-500 transition">Why Choose Us</Link>
              <Link href="#services" className="text-gray-700 hover:text-orange-500 transition">Services</Link>
              <Link href="#team" className="text-gray-700 hover:text-orange-500 transition">Our Team</Link>
              <Link href="#blog" className="text-gray-700 hover:text-orange-500 transition">Blog</Link>
              <Link href="#gallery" className="text-gray-700 hover:text-orange-500 transition">Gallery</Link>
              <Link href="#contact" className="text-gray-700 hover:text-orange-500 transition">Contact Us</Link>
            </div>
            <button className="md:hidden text-blue-900" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          {menuOpen && (
            <div className="md:hidden pb-4 flex flex-col gap-3">
              {[["Home","/"],["About Us","#about"],["Why Choose Us","#why-us"],["Services","#services"],["Our Team","#team"],["Blog","#blog"],["Gallery","#gallery"],["Contact Us","#contact"]].map(([label, href]) => (
                <Link key={label} href={href}
                  className="text-gray-700 hover:text-orange-500 transition py-1"
                  onClick={() => setMenuOpen(false)}>
                  {label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden min-h-[90vh] flex items-center">
        {/* Animated background circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-700 rounded-full opacity-20 animate-float" style={{animationDelay:"0s"}} />
          <div className="absolute top-1/2 -right-32 w-80 h-80 bg-orange-500 rounded-full opacity-10 animate-float" style={{animationDelay:"1.5s"}} />
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-blue-500 rounded-full opacity-15 animate-float" style={{animationDelay:"3s"}} />
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Animate direction="left" delay={0.1}>
                <span className="inline-block bg-orange-500 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
                  Trusted CA Firm in Noida
                </span>
              </Animate>
              <Animate direction="left" delay={0.25}>
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  Your Trusted Partner for
                  <span className="text-orange-400"> Financial Excellence</span>
                </h1>
              </Animate>
              <Animate direction="left" delay={0.4}>
                <p className="text-base md:text-xl mb-8 text-gray-300">
                  Professional Chartered Accountant services in Noida. We provide comprehensive tax, audit, and advisory solutions tailored to your business needs.
                </p>
              </Animate>
              <Animate direction="left" delay={0.55}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#contact" className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition font-semibold text-lg flex items-center justify-center gap-2 animate-pulse-glow">
                    Schedule Consultation <ChevronRight className="w-5 h-5" />
                  </a>
                  <a href="#services" className="bg-white text-blue-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition font-semibold text-lg flex items-center justify-center">
                    Our Services
                  </a>
                </div>
              </Animate>
              <Animate direction="up" delay={0.7}>
                <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {stats.map((stat, i) => (
                    <div key={i} className="text-center px-1">
                      <div className="flex justify-center mb-1 text-orange-400">{stat.icon}</div>
                      <div className="text-xl md:text-3xl font-bold">
                        <CountUp target={stat.number} suffix={stat.suffix} />
                      </div>
                      <div className="text-xs text-gray-300 leading-tight">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </Animate>
            </div>
            <Animate direction="right" delay={0.3} className="hidden md:block">
              <div className="relative">
                <div className="absolute -inset-4 bg-orange-500 rounded-2xl opacity-20 animate-pulse" />
                <Image
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=500&fit=crop"
                  alt="Professional CA Team"
                  width={600} height={500}
                  className="rounded-2xl shadow-2xl relative z-10 object-cover"
                />
                {/* Floating badge */}
                <div className="absolute -bottom-6 -left-6 bg-white text-blue-900 rounded-xl shadow-xl p-4 z-20 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <div className="font-bold text-sm">500+ Clients</div>
                      <div className="text-xs text-gray-500">Trusted Nationwide</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 bg-orange-500 text-white rounded-xl shadow-xl p-4 z-20 animate-float" style={{animationDelay:"2s"}}>
                  <div className="font-bold text-lg">15+</div>
                  <div className="text-xs">Years of Excellence</div>
                </div>
              </div>
            </Animate>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Marquee strip */}
      <div className="bg-orange-500 text-white py-3 overflow-hidden">
        <div className="flex gap-8 md:gap-12 animate-[marquee_20s_linear_infinite] whitespace-nowrap" style={{animation:"marquee 20s linear infinite"}}>
          {["Tax Consultancy","GST Compliance","Audit & Assurance","Financial Advisory","Business Registration","Accounting Services","Tax Consultancy","GST Compliance","Audit & Assurance","Financial Advisory","Business Registration","Accounting Services"].map((t,i) => (
            <span key={i} className="flex items-center gap-2 font-semibold text-xs md:text-sm">
              <Star className="w-4 h-4 fill-white" /> {t}
            </span>
          ))}
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Animate direction="left" className="mb-12 md:mb-0">
              <div className="relative max-w-lg mx-auto md:max-w-none">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop"
                  alt="CA Office"
                  width={600} height={400}
                  className="rounded-2xl shadow-xl object-cover w-full"
                />
                <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 bg-blue-900 text-white rounded-xl p-4 md:p-6 shadow-2xl">
                  <div className="text-2xl md:text-4xl font-bold text-orange-400">15+</div>
                  <div className="text-xs md:text-sm">Years of Trust</div>
                </div>
                {/* Small floating image */}
                <div className="absolute -top-4 -left-4 md:-top-6 md:-left-6 w-20 h-20 md:w-28 md:h-28 rounded-xl overflow-hidden shadow-xl border-4 border-white animate-float">
                  <Image
                    src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=112&h=112&fit=crop"
                    alt="Professional"
                    width={112} height={112}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </Animate>
            <Animate direction="right">
              <div>
                <span className="inline-block bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-1 rounded-full mb-4">About Us</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-6">Welcome to CA Chandan Varshney & Associates</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  We are a leading Chartered Accountancy firm based in Noida, Uttar Pradesh, committed to delivering expert audit, tax, and advisory services. With years of experience and a team of dedicated professionals, we help businesses achieve financial stability and ensure compliance with evolving regulations.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our firm combines technical expertise with personalized service, enabling us to understand your unique needs and provide tailored solutions that drive growth and success.
                </p>
                <ul className="space-y-3">
                  {["Expert team of qualified CAs and consultants","Personalized client-focused approach","Timely and accurate service delivery","Competitive pricing with transparent fees"].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <Animate direction="up" className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1 rounded-full mb-3">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We offer a comprehensive range of professional services to meet all your financial and compliance needs</p>
          </Animate>
          <AnimateStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" stagger={0.1} direction="up">
            {services.map((service, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
                <div className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link href="#contact" className="text-orange-500 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <Animate direction="up" className="text-center mb-16">
            <span className="inline-block bg-blue-700 text-orange-400 text-sm font-semibold px-4 py-1 rounded-full mb-3">Our Strengths</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">We combine expertise, dedication, and innovation to deliver exceptional results</p>
          </Animate>
          <AnimateStagger className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8" stagger={0.12} direction="up">
            {whyUs.map((item, i) => (
              <div key={i} className="text-center p-6 rounded-xl bg-blue-800 hover:bg-blue-700 transition-all duration-300 hover:-translate-y-2 group">
                <div className="text-orange-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* Vision Mission Values */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="container mx-auto px-4">
          <Animate direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Vision, Mission & Values</h2>
          </Animate>
          <AnimateStagger className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8" stagger={0.15} direction="up">
            {[
              { icon: <TrendingUp className="w-8 h-8" />, color: "bg-blue-600", title: "Our Vision", text: "To be the most trusted and preferred CA firm in North India, known for excellence in service delivery and client satisfaction." },
              { icon: <Award className="w-8 h-8" />, color: "bg-orange-500", title: "Our Mission", text: "To provide comprehensive financial solutions with integrity, professionalism, and innovation, helping our clients achieve their business goals." },
              { icon: <Star className="w-8 h-8" />, color: "bg-green-500", title: "Our Values", text: "Integrity, Transparency, Professional Excellence, Client Focus, and Continuous Improvement guide everything we do." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center text-white mb-6`}>{item.icon}</div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">{item.title}</h3>
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Animate direction="up" className="text-center mb-16">
            <span className="inline-block bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-1 rounded-full mb-3">Our Team</span>
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Meet the Professionals</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Experienced and dedicated professionals committed to your financial success</p>
          </Animate>
          <AnimateStagger className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto" stagger={0.15} direction="up">
            {[
              { name: "CA Chandan Varshney", role: "Founder & Principal CA", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop" },
              { name: "CA Priya Sharma", role: "Tax & Compliance Head", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop" },
              { name: "CA Rahul Gupta", role: "Audit & Assurance Lead", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop" },
            ].map((member, i) => (
              <div key={i} className="text-center group">
                <div className="relative w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full border-4 border-orange-100 group-hover:border-orange-500 transition-all duration-300">
                  <Image src={member.img} alt={member.name} width={192} height={192} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-bold text-blue-900">{member.name}</h3>
                <p className="text-orange-500 font-medium">{member.role}</p>
              </div>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full opacity-20 translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Animate direction="left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Looking for Accounting & Consulting?</h2>
              <p className="text-base md:text-xl text-gray-300 mb-8">Worried about your business compliance? Let us handle your financial matters while you focus on growth.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+919582549263" className="bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition font-semibold text-lg flex items-center justify-center gap-2 animate-pulse-glow">
                  <Phone className="w-5 h-5" /> Call Now
                </a>
                <Link href="#contact" className="bg-white text-blue-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition font-semibold text-lg flex items-center justify-center">
                  Contact Us
                </Link>
              </div>
            </Animate>
            <Animate direction="right" className="hidden md:block">
              <Image
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&h=350&fit=crop"
                alt="Business Partnership"
                width={500} height={350}
                className="rounded-2xl shadow-2xl mx-auto object-cover"
              />
            </Animate>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <Animate direction="up" className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1 rounded-full mb-3">Client Reviews</span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">What Our Clients Say</h2>
          </Animate>
          <AnimateStagger className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8" stagger={0.15} direction="up">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative">
                <div className="absolute top-6 right-6 text-6xl text-orange-100 font-serif leading-none">"</div>
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic relative z-10">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-blue-900">{t.name}</div>
                    <div className="text-sm text-gray-500">{t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Animate direction="up" className="text-center mb-16">
            <span className="inline-block bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-1 rounded-full mb-3">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
          </Animate>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <Animate key={i} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.1}>
                <div className="border border-gray-200 rounded-xl overflow-hidden hover:border-orange-300 transition-colors">
                  <details className="group">
                    <summary className="flex justify-between items-center cursor-pointer p-6 bg-gray-50 hover:bg-orange-50 transition-colors">
                      <h3 className="text-lg font-semibold text-blue-900">{faq.question}</h3>
                      <ChevronRight className="w-5 h-5 text-gray-500 group-open:rotate-90 transition-transform duration-300" />
                    </summary>
                    <div className="p-6 text-gray-700 border-t border-gray-100">{faq.answer}</div>
                  </details>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Animate direction="left">
              <span className="inline-block bg-blue-700 text-orange-400 text-sm font-semibold px-4 py-1 rounded-full mb-4">Get In Touch</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">We Are Your Financial Solution</h2>
              <p className="text-lg md:text-xl mb-8 text-gray-300">Feel free to talk with us. We're here to help your business grow.</p>
              <div className="space-y-6">
                <div className="space-y-4">
                  <a href="tel:+919582549263" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="text-lg md:text-xl font-semibold hover:text-orange-400 transition">+91-9582549263</span>
                  </a>
                  <a href="tel:+917290000757" className="flex items-center gap-4 group">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <span className="text-lg md:text-xl font-semibold hover:text-orange-400 transition">+91-7290000757</span>
                  </a>
                </div>
                <a href="mailto:cachandanvarshney@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="hover:text-orange-400 transition break-all text-sm md:text-base">cachandanvarshney@gmail.com</span>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-gray-300 text-sm leading-relaxed">D-118, First Floor, Sector-26, Noida, Gautam Buddha Nagar-201301, Uttar Pradesh, India</span>
                </div>
              </div>
            </Animate>
            <Animate direction="right">
              <div className="bg-white rounded-2xl p-6 md:p-8 text-gray-800 shadow-2xl mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Send a Message</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="Your Name" className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-400 transition text-base" />
                  <input type="email" placeholder="Your Email" className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-400 transition text-base" />
                  <input type="tel" placeholder="Phone Number" className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-400 transition text-base" />
                  <textarea rows={4} placeholder="Your Message" className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-400 transition resize-none text-base" />
                  <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition animate-pulse-glow">
                    Send Message
                  </button>
                </form>
              </div>
            </Animate>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <Animate direction="up" delay={0}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 flex-shrink-0">
                  <Image src="/CA-India-Logo.png" alt="CA India Logo" width={48} height={48} className="object-contain" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">CA Chandan Varshney</h3>
                  <p className="text-sm text-gray-400">Chartered Accountant</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Professional Chartered Accountancy services in Noida. Committed to excellence in audit, tax, and advisory services.
              </p>
            </Animate>
            <Animate direction="up" delay={0.1}>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {[["Home","/"],["About Us","#about"],["Services","#services"],["Testimonials","#testimonials"],["Contact","#contact"]].map(([label, href]) => (
                  <li key={label}><Link href={href} className="text-gray-400 hover:text-orange-400 transition">{label}</Link></li>
                ))}
              </ul>
            </Animate>
            <Animate direction="up" delay={0.2}>
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {["Tax Consultancy","Accounting Services","Audit & Assurance","GST Compliance","Financial Advisory"].map((s) => (
                  <li key={s}><span className="text-gray-400 hover:text-orange-400 transition cursor-default">{s}</span></li>
                ))}
              </ul>
            </Animate>
            <Animate direction="up" delay={0.3}>
              <h4 className="text-lg font-semibold mb-6">Contact Details</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-400 text-sm">D-118, First Floor, Sector-26, Noida, UP-201301</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-orange-400 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">+91-9582549263</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-orange-400 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">+91-7290000757</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
                  <span className="text-gray-400 text-sm break-all">cachandanvarshney@gmail.com</span>
                </li>
              </ul>
            </Animate>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
              <p className="text-gray-400 text-sm order-2 md:order-1">© {new Date().getFullYear()} CA Chandan Varshney. All rights reserved.</p>
              <div className="flex gap-4 order-1 md:order-2">
                {[
                  <svg key="fb" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
                  <svg key="tw" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
                  <svg key="li" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>,
                  <svg key="ig" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
                ].map((icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300">
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
