import Link from "next/link"
import { Search, Text, Youtube, BarChart, Globe, Server, Code, ImageIcon, Calculator, Ruler, Menu, X } from "lucide-react"
import React, { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"

// Define ToolCard props interface
interface ToolCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tools: string[];
  onViewAll?: (category: string) => void;
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();
  
  // Function to show toast notifications instead of alerts
  const showNotification = (message: string) => {
    toast({
      title: "Information",
      description: message,
    });
  };
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);
  
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md">
              <Search className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Aseotool</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#tools" className="text-sm font-medium hover:text-primary transition-colors">
              Tools
            </Link>
            <Link href="#why-choose" className="text-sm font-medium hover:text-primary transition-colors">
              Why Choose Us
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button className="hidden md:flex">Get Started</Button>
            <button 
              className="flex md:hidden p-2 rounded-md hover:bg-muted transition-colors" 
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu with transition */}
        <div 
          className={`md:hidden bg-background border-b overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0 border-b-0'
          }`}
        >
          <nav className="container py-4 flex flex-col gap-4">
            <Link 
              href="#tools" 
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tools
            </Link>
            <Link 
              href="#why-choose" 
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Why Choose Us
            </Link>
            <Link 
              href="#contact" 
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="w-full mt-2" onClick={() => setMobileMenuOpen(false)}>
              Get Started
            </Button>
          </nav>
        </div>
      </header>
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-6 text-center">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                Free Online Tools
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Your Ultimate Online Tool Suite
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                A comprehensive range of free online tools, designed to save you time and improve your productivity.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" className="px-8">
                  <Link href="#tools" className="flex items-center gap-2">
                    Explore Tools
                  </Link>
                </Button>
                <Button size="lg" variant="outline">
                  <Link href="#why-choose" className="flex items-center gap-2">
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="why-choose" className="w-full py-12 md:py-24 lg:py-32 bg-background scroll-mt-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Benefits
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose Aseotool?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform offers a wide range of tools to help you with your daily tasks, all in one place.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    <Search className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle>100% Free</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>All of our tools are completely free to use. No hidden fees.</CardDescription>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    <Server className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle>No Signup Required</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Start using our tools instantly without needing to create an account.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    <Globe className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle>Fast & Reliable</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Our tools provide quick and accurate results every time.</CardDescription>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    <Code className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle>Mobile-Friendly</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Access our tools from any device—desktop, tablet, or mobile.</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section id="tools" className="w-full py-12 md:py-24 lg:py-32 bg-muted scroll-mt-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Our Tools
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Explore Our Tool Categories
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We offer a variety of tools for SEO optimization, YouTube video enhancement, web development, image
                  editing, and more.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <ToolCard
                icon={<Text className="h-10 w-10 text-primary" />}
                title="Text Tools"
                description="Format, transform, and manage text quickly and easily."
                tools={["Text Repeater", "Text Sorter", "Case Converter", "Text to Binary"]}
                onViewAll={(category) => showNotification(`View all ${category} tools`)}
              />
              <ToolCard
                icon={<Youtube className="h-10 w-10 text-primary" />}
                title="YouTube Tools"
                description="Boost your YouTube channel and videos with these must-have tools."
                tools={["Tag Extractor", "Title Generator", "Thumbnail Downloader", "Channel Statistics"]}
                onViewAll={(category) => showNotification(`View all ${category} tools`)}
              />
              <ToolCard
                icon={<BarChart className="h-10 w-10 text-primary" />}
                title="SEO Tools"
                description="Improve your website's search engine rankings with our SEO tools."
                tools={["Keyword Suggestion", "Backlink Checker", "SEO Audit Tool", "Meta Tag Generator"]}
                onViewAll={(category) => showNotification(`View all ${category} tools`)}
              />
              <ToolCard
                icon={<Globe className="h-10 w-10 text-primary" />}
                title="Domain & IP Tools"
                description="Analyze domains and IPs with these essential networking tools."
                tools={["Domain to IP Converter", "IP Geolocation", "DNS Lookup", "WHOIS Lookup"]}
                onViewAll={(category) => showNotification(`View all ${category} tools`)}
              />
              <ToolCard
                icon={<Server className="h-10 w-10 text-primary" />}
                title="Website Management"
                description="Ensure your website runs smoothly and efficiently with these tools."
                tools={["Speed Test", "Broken Link Checker", "SSL Checker", "Mobile-Friendly Test"]}
                onViewAll={(category) => showNotification(`View all ${category} tools`)}
              />
              <ToolCard
                icon={<Code className="h-10 w-10 text-primary" />}
                title="Web Development"
                description="Support your web development projects with these essential tools."
                tools={["JSON Validator", "HTML Minifier", "CSS Formatter", "Regex Tester"]}
                onViewAll={(category) => showNotification(`View all ${category} tools`)}
              />
              <ToolCard
                icon={<ImageIcon className="h-10 w-10 text-primary" />}
                title="Image Editing"
                description="Edit, resize, and optimize images with these simple yet powerful tools."
                tools={["Image Resizer", "Image Converter", "Image Compressor", "PNG to JPG Converter"]}
                onViewAll={(category) => showNotification(`View all ${category} tools`)}
              />
              <ToolCard
                icon={<Calculator className="h-10 w-10 text-primary" />}
                title="Online Calculators"
                description="Perform quick and easy calculations with our range of calculators."
                tools={["Loan Calculator", "BMI Calculator", "Mortgage Calculator", "Tax Calculator"]}
                onViewAll={(category) => showNotification(`View all ${category} tools`)}
              />
              <ToolCard
                icon={<Ruler className="h-10 w-10 text-primary" />}
                title="Unit Converters"
                description="Easily convert between various units of measurement."
                tools={["Length Converter", "Weight Converter", "Temperature Converter", "Speed Converter"]}
                onViewAll={(category) => showNotification(`View all ${category} tools`)}
              />
            </div>
            <div className="flex justify-center mt-8">
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => showNotification('View all tool categories')}
              >
                View All Tools
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get Started Now!</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Aseotool makes it easy to enhance your productivity with powerful online tools.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="px-8">
                  <Link href="#tools">
                    Explore Tools
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer id="contact" className="w-full py-6 md:py-12 bg-background border-t scroll-mt-16">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Search className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">Aseotool</span>
              </div>
              <p className="max-w-[300px] text-muted-foreground">
                Your go-to platform for a comprehensive range of free online tools.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#tools" className="text-muted-foreground hover:text-primary">
                    Tools
                  </Link>
                </li>
                <li>
                  <Link href="#why-choose" className="text-muted-foreground hover:text-primary">
                    Why Choose Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <p className="text-muted-foreground">
                If you have any questions, feedback, or suggestions, feel free to contact us.
              </p>
              <Button variant="outline">Contact Us</Button>
            </div>
          </div>
          <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Aseotool. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

function ToolCard({ icon, title, description, tools, onViewAll }: ToolCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          {icon}
          <CardTitle>{title}</CardTitle>
        </div>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {tools.map((tool, index) => (
            <li key={index} className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
              <span>{tool}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex justify-end">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-primary"
            onClick={() => onViewAll ? onViewAll(title) : null}
          >
            View All
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
