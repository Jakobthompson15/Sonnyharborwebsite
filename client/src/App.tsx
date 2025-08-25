import { useState } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import LoadingScreen from "@/components/LoadingScreen";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import EventSolutions from "@/pages/services/EventSolutions";
import PublicAdSpace from "@/pages/services/PublicAdSpace";
import ScreenHosting from "@/pages/services/ScreenHosting";
import Pricing from "@/pages/Pricing";
import Portfolio from "@/pages/Portfolio";
import Contact from "@/pages/Contact";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/services/event-solutions" component={EventSolutions} />
      <Route path="/services/public-ad-space" component={PublicAdSpace} />
      <Route path="/services/screen-hosting" component={ScreenHosting} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        {isLoading ? (
          <LoadingScreen onLoadComplete={handleLoadComplete} />
        ) : (
          <Router />
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
