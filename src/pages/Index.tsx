import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, BarChart3, TrendingDown, Shield, Lightbulb, FileText, MessageSquare, Zap } from "lucide-react";
import { useEffect, useState } from "react";

const Index = () => {
  const [watsonLoaded, setWatsonLoaded] = useState(false);

  useEffect(() => {
    // Load Watson Orchestrate script
    const loadWatson = () => {
      const config = (window as any).watsonConfig;
      if (!config) {
        console.error("Watson configuration not found");
        return;
      }

      const script = document.createElement('script');
      script.src = `${config.hostURL}/wxochat/wxoLoader.js?embed=true`;
      script.async = true;
      
      script.onload = () => {
        console.log("✅ Watson script loaded");
        if ((window as any).wxoLoader) {
          try {
            (window as any).wxOConfiguration = config;
            (window as any).wxoLoader.init();
            setWatsonLoaded(true);
            console.log("✅ Watson initialized");
          } catch (error) {
            console.error("❌ Watson initialization error:", error);
          }
        }
      };

      script.onerror = (error) => {
        console.error("❌ Failed to load Watson script:", error);
      };

      document.head.appendChild(script);
    };

    loadWatson();
  }, []);

  const openWatsonChat = () => {
    const rootElement = document.getElementById('watson-chat-root');
    if (rootElement) {
      const button = rootElement.querySelector('button');
      if (button) {
        button.click();
      } else if ((window as any).wxoLoader?.open) {
        (window as any).wxoLoader.open();
      }
    }
  };

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background -z-10" />
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent -z-10" />
        
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                <Leaf className="w-4 h-4 mr-2" />
                AI-Powered ESG Intelligence
              </Badge>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Transform Your{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Carbon Footprint
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                AI-powered ESG analysis and carbon emission intelligence for sustainable business decisions. 
                Track, analyze, and reduce your environmental impact with real-time insights.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
                  onClick={scrollToFeatures}
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Explore Features
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 hover:bg-secondary"
                  onClick={openWatsonChat}
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Ask the Assistant
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div>
                  <div className="text-3xl font-bold text-primary">5000+</div>
                  <div className="text-sm text-muted-foreground">Active Users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">1M+</div>
                  <div className="text-sm text-muted-foreground">Data Points</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction</div>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop" 
                  alt="ESG Sustainability Dashboard" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              
              {/* Floating badges */}
              <Card className="absolute -left-4 top-1/4 p-4 shadow-xl border-2 border-primary/20 animate-pulse-subtle">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Real-time Analysis</div>
                    <div className="text-xs text-muted-foreground">Live monitoring</div>
                  </div>
                </div>
              </Card>
              
              <Card className="absolute -right-4 bottom-1/4 p-4 shadow-xl border-2 border-accent/20 animate-pulse-subtle" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold">GHG Compliant</div>
                    <div className="text-xs text-muted-foreground">Standard certified</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Comprehensive Solutions
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Powerful Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need for comprehensive carbon intelligence and ESG compliance
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Leaf className="w-8 h-8" />,
                title: "Scope Classification",
                description: "Automatically classify emissions into Scope 1, 2, and 3 categories following GHG Protocol standards"
              },
              {
                icon: <TrendingDown className="w-8 h-8" />,
                title: "Hotspot Detection",
                description: "Identify high-emission activities and processes that need immediate attention"
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Anomaly Detection",
                description: "Detect unusual patterns and spikes in your carbon emission data"
              },
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: "Smart Recommendations",
                description: "Get practical, data-backed sustainability actions tailored to your business"
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: "ESG Reports",
                description: "Generate comprehensive ESG summaries and compliance reports instantly"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Comparative Analysis",
                description: "Compare emissions across materials, processes, and time periods"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all border-2 hover:border-primary/50 group">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 -z-10" />
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-muted-foreground">
              Start your sustainability journey with our AI-powered assistant. Get instant insights, 
              recommendations, and compliance reports.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 shadow-xl hover:shadow-2xl transition-all"
              onClick={openWatsonChat}
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Talk to the Assistant
            </Button>
            {!watsonLoaded && (
              <p className="text-sm text-muted-foreground">
                Loading assistant...
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Leaf className="w-6 h-6 text-primary" />
                <span className="font-bold text-lg">ESG Intelligence</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Empowering sustainable business decisions through AI-powered carbon intelligence.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 ESG Carbon Intelligence. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      {/* Watson Chat Container - Hidden by default */}
      <style dangerouslySetInnerHTML={{__html: `
        #watson-chat-root {
          position: fixed;
          bottom: 0;
          right: 0;
          z-index: 9999;
        }
      `}} />
    </div>
  );
};

export default Index;
