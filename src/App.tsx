import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Industries from "./pages/Industries";
import Companies from "./pages/Companies";
import Contact from "./pages/Contact";
import Construction from "./pages/Construction";
import Manufacturing from "./pages/Manufacturing";
import Trading from "./pages/Trading";
import Careers from "./pages/Careers";
import NotFound from "./pages/NotFound";
import CompanyPage from "./pages/CompanyPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/construction" element={<Construction />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/trading" element={<Trading />} />
          <Route path="/careers" element={<Careers />} />
          
          {/* Company detail pages */}
          <Route path="/companies/:slug" element={<CompanyPage />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
