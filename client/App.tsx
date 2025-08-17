import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Placeholder from "./pages/Placeholder";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/features" element={<Placeholder title="Features" description="Discover all the powerful features that make CareConnect the best choice for childcare management" />} />
          <Route path="/how-it-works" element={<Placeholder title="How It Works" description="Learn how CareConnect simplifies your childcare search and management process" />} />
          <Route path="/testimonials" element={<Placeholder title="Testimonials" description="Read success stories from families who found their perfect childcare with CareConnect" />} />
          <Route path="/contact" element={<Placeholder title="Contact Us" description="Get in touch with our team for support or questions about CareConnect" />} />
          <Route path="/help" element={<Placeholder title="Help Center" description="Find answers to your questions and learn how to get the most out of CareConnect" />} />
          <Route path="/about" element={<Placeholder title="About Us" description="Learn about our mission to simplify childcare for modern families" />} />
          <Route path="/careers" element={<Placeholder title="Careers" description="Join our team and help us build the future of childcare management" />} />
          <Route path="/api" element={<Placeholder title="API Documentation" description="Integrate CareConnect into your applications with our developer API" />} />
          <Route path="/integrations" element={<Placeholder title="Integrations" description="Connect CareConnect with your favorite tools and services" />} />
          <Route path="/status" element={<Placeholder title="Service Status" description="Check the current status of CareConnect services and infrastructure" />} />
          <Route path="/community" element={<Placeholder title="Community" description="Join the CareConnect community and connect with other families" />} />
          <Route path="/press" element={<Placeholder title="Press & Media" description="Latest news, press releases, and media resources about CareConnect" />} />
          <Route path="/privacy" element={<Placeholder title="Privacy Policy" description="Learn how we protect your family's privacy and data on CareConnect" />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
