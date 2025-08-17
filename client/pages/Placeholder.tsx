import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface PlaceholderProps {
  title: string;
  description: string;
}

export default function Placeholder({ title, description }: PlaceholderProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-childcare-50 via-white to-childcare-100">
      {/* Header */}
      <header className="border-b border-childcare-200/30 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-childcare-600 to-childcare-700 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-childcare-600 to-childcare-700 bg-clip-text text-transparent">
                CareConnect
              </span>
            </Link>
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

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="border-childcare-200/50 shadow-xl">
            <CardHeader className="pb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-childcare-500 to-childcare-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {title}
              </CardTitle>
              <p className="text-xl text-gray-600">
                {description}
              </p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-8">
                This page is coming soon! We're working hard to bring you the best childcare management experience. 
                Continue exploring or reach out if you'd like us to prioritize this section.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button 
                    variant="outline" 
                    className="border-childcare-300 text-childcare-700 hover:bg-childcare-50"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                  </Button>
                </Link>
                <Button className="bg-gradient-to-r from-childcare-600 to-childcare-700 hover:from-childcare-700 hover:to-childcare-800 text-white">
                  Get Notified When Ready
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
