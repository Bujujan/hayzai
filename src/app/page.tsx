import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Target,
  TrendingUp,
  Zap,
  Users,
  BarChart3,
  Shield,
  Sparkle,
  Bot,
  Clock10,
} from "lucide-react";
import Hero from "@/components/Hero";
import Chatbot from "@/components/Chatbot";
import Roi from "@/components/Roi";
import Advantages from "@/components/Advantages";
import Cta from "@/components/Cta";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Chatbot IA Immobilier Section */}
      <Chatbot />

      {/* ROI Section */}
      <Roi />

      {/* Competitive Advantages */}
      <Advantages />

      {/* CTA Section */}
      <Cta />
    </div>
  );
}
