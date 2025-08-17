import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Users, Shield, Clock, Bell, Heart, Smile } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-childcare-50 via-white to-childcare-100">
      {/* Header */}
      <header className="border-b border-childcare-200/30 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-childcare-600 to-childcare-700 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-childcare-600 to-childcare-700 bg-clip-text text-transparent">
                CareConnect
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/features" className="text-gray-600 hover:text-childcare-600 font-medium transition-colors">
                Features
              </Link>
              <Link to="/how-it-works" className="text-gray-600 hover:text-childcare-600 font-medium transition-colors">
                How it Works
              </Link>
              <Link to="/testimonials" className="text-gray-600 hover:text-childcare-600 font-medium transition-colors">
                Testimonials
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-childcare-600 font-medium transition-colors">
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-childcare-600 hover:text-childcare-700">
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-childcare-600 to-childcare-700 hover:from-childcare-700 hover:to-childcare-800 text-white shadow-lg">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-childcare-600/5 to-childcare-700/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-6 bg-childcare-100 text-childcare-700 border-childcare-200">
                <Star className="w-4 h-4 mr-2" />
                Trusted by 10,000+ Families
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                The Smarter Way to{" "}
                <span className="bg-gradient-to-r from-childcare-600 to-childcare-700 bg-clip-text text-transparent">
                  Manage Childcare
                </span>{" "}
                Search and Waitlists
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                Streamline your childcare journey with intelligent matching, real-time notifications, 
                and comprehensive management tools designed for modern families.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-childcare-600 to-childcare-700 hover:from-childcare-700 hover:to-childcare-800 text-white shadow-xl text-lg px-8 py-6"
                >
                  Start Your Search
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-childcare-300 text-childcare-700 hover:bg-childcare-50 text-lg px-8 py-6"
                >
                  Learn How It Works
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-childcare-400/20 to-childcare-600/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-childcare-200/50">
                <img 
                  src="/placeholder.svg" 
                  alt="Happy children at daycare" 
                  className="w-full h-80 object-cover rounded-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-success text-success-foreground rounded-full p-3 shadow-lg">
                  <CheckCircle className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Modern Childcare
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to streamline your childcare search and management process
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-childcare-200/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-childcare-500 to-childcare-600 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-childcare-800">Smart Waitlist Management</CardTitle>
                <CardDescription>
                  Automatically manage multiple waitlists with intelligent position tracking and real-time updates.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-childcare-200/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-childcare-500 to-childcare-600 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-childcare-800">Parent-Friendly Applications</CardTitle>
                <CardDescription>
                  Streamlined application process with secure document storage and progress tracking.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-childcare-200/50 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-childcare-500 to-childcare-600 rounded-xl flex items-center justify-center mb-4">
                  <Bell className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-childcare-800">Expertise in Emotional Analytics</CardTitle>
                <CardDescription>
                  Advanced insights into child development and emotional well-being through data analytics.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-childcare-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-childcare-200/50">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-childcare-100 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-childcare-700 mb-2">10K+</div>
                    <div className="text-sm text-childcare-600">Happy Families</div>
                  </div>
                  <div className="bg-childcare-100 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-childcare-700 mb-2">500+</div>
                    <div className="text-sm text-childcare-600">Partner Centers</div>
                  </div>
                  <div className="bg-childcare-100 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-childcare-700 mb-2">99%</div>
                    <div className="text-sm text-childcare-600">Satisfaction Rate</div>
                  </div>
                  <div className="bg-childcare-100 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-childcare-700 mb-2">24/7</div>
                    <div className="text-sm text-childcare-600">Support Available</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Badge className="mb-6 bg-childcare-100 text-childcare-700 border-childcare-200">
                About CareConnect
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Simplifying Childcare for Modern Families
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                CareConnect was built to simplify childcare management by bringing clarity and insight to the process. 
                Our platform connects families with quality childcare providers through intelligent matching and 
                comprehensive management tools.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-success mr-3" />
                  <span className="text-gray-700">Intelligent matching algorithms</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-success mr-3" />
                  <span className="text-gray-700">Real-time availability updates</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-success mr-3" />
                  <span className="text-gray-700">Comprehensive progress tracking</span>
                </div>
              </div>
              <Button className="mt-8 bg-gradient-to-r from-childcare-600 to-childcare-700 hover:from-childcare-700 hover:to-childcare-800 text-white">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-childcare-600 to-childcare-700">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <Smile className="w-16 h-16 text-white mx-auto" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Managing Your Waitlists in Minutes
            </h2>
            <p className="text-xl text-childcare-100 mb-8">
              Join thousands of families who have simplified their childcare journey with CareConnect
            </p>
            <Button 
              size="lg" 
              className="bg-white text-childcare-700 hover:bg-childcare-50 text-lg px-8 py-6"
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Loved by Daycares & Parents
            </h2>
            <p className="text-xl text-gray-600">
              See what families are saying about their CareConnect experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-childcare-200/50">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4">
                  "CareConnect made finding the perfect daycare so much easier. The waitlist management 
                  is fantastic and we always knew exactly where we stood."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-childcare-400 to-childcare-500 rounded-full mr-3"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Sarah Johnson</div>
                    <div className="text-sm text-gray-600">Parent of 2</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-childcare-200/50">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4">
                  "The application process was streamlined and stress-free. We found our ideal 
                  childcare center within weeks of starting our search."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-childcare-400 to-childcare-500 rounded-full mr-3"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Michael Chen</div>
                    <div className="text-sm text-gray-600">First-time Parent</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-childcare-200/50">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4">
                  "Finally, a platform that understands what parents need. The real-time updates 
                  and notifications kept us informed every step of the way."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-childcare-400 to-childcare-500 rounded-full mr-3"></div>
                  <div>
                    <div className="font-semibold text-gray-900">Emily Rodriguez</div>
                    <div className="text-sm text-gray-600">Working Mom</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-childcare-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about CareConnect
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="border-childcare-200/50">
              <CardHeader>
                <CardTitle className="text-childcare-800">How does CareConnect work?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  CareConnect connects families with childcare providers through our intelligent matching system. 
                  Simply create a profile, set your preferences, and we'll help you find and manage applications 
                  to the best childcare centers in your area.
                </p>
              </CardContent>
            </Card>

            <Card className="border-childcare-200/50">
              <CardHeader>
                <CardTitle className="text-childcare-800">Is the service free?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We offer both free and premium plans. Our basic service includes essential features like 
                  center discovery and basic waitlist management. Premium features include advanced matching, 
                  priority support, and detailed analytics.
                </p>
              </CardContent>
            </Card>

            <Card className="border-childcare-200/50">
              <CardHeader>
                <CardTitle className="text-childcare-800">Can I use CareConnect on mobile?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes! CareConnect is fully responsive and works beautifully on all devices. We also offer 
                  native mobile apps for iOS and Android with push notifications to keep you updated on 
                  your applications and waitlist positions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-childcare-600 to-childcare-700 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">CareConnect</span>
              </div>
              <p className="text-gray-400 mb-6">
                Simplifying childcare management for modern families everywhere.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-childcare-600 transition-colors">
                  <span className="text-sm">f</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-childcare-600 transition-colors">
                  <span className="text-sm">t</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-childcare-600 transition-colors">
                  <span className="text-sm">in</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Product</h3>
              <ul className="space-y-3">
                <li><Link to="/features" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
                <li><Link to="/how-it-works" className="text-gray-400 hover:text-white transition-colors">How it Works</Link></li>
                <li><Link to="/api" className="text-gray-400 hover:text-white transition-colors">API</Link></li>
                <li><Link to="/integrations" className="text-gray-400 hover:text-white transition-colors">Integrations</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Support</h3>
              <ul className="space-y-3">
                <li><Link to="/help" className="text-gray-400 hover:text-white transition-colors">Help Center</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link to="/status" className="text-gray-400 hover:text-white transition-colors">Service Status</Link></li>
                <li><Link to="/community" className="text-gray-400 hover:text-white transition-colors">Community</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
                <li><Link to="/press" className="text-gray-400 hover:text-white transition-colors">Press</Link></li>
                <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 CareConnect. All rights reserved.</p>
            <p className="text-gray-400 mt-4 md:mt-0">Made with ❤️ for families everywhere</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
