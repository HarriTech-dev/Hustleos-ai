"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crown, Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for getting started",
    features: ["Up to 50 invoices", "Basic inventory tracking", "Email support", "1 user"],
    cta: "Current Plan",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "₦9,900/mo",
    description: "For growing businesses",
    features: [
      "Unlimited invoices",
      "Advanced inventory",
      "Priority support",
      "5 team members",
      "AI Advisor",
      "Reports & analytics",
    ],
    cta: "Upgrade",
    highlighted: true,
  },
  {
    name: "Pro",
    price: "₦24,900/mo",
    description: "For established businesses",
    features: [
      "Everything in Growth",
      "Unlimited team members",
      "Custom integrations",
      "Dedicated account manager",
      "API access",
      "White-label options",
    ],
    cta: "Upgrade",
    highlighted: false,
  },
];

export function SubscriptionCard() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {plans.map((plan) => (
        <Card
          key={plan.name}
          className={`${
            plan.highlighted
              ? "border-primary shadow-lg relative"
              : "border-border"
          }`}
        >
          {plan.highlighted && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
              Most Popular
            </div>
          )}
          <CardHeader className="text-center">
            <CardTitle className="text-xl">{plan.name}</CardTitle>
            <CardDescription>{plan.description}</CardDescription>
            <div className="mt-4">
              <span className="text-3xl font-bold">{plan.price}</span>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              className={`w-full mt-6 ${
                plan.highlighted ? "bg-primary text-primary-foreground" : ""
              }`}
              variant={plan.highlighted ? "default" : "outline"}
              disabled={plan.cta === "Current Plan"}
            >
              {plan.cta === "Current Plan" ? (
                <>
                  <Crown className="mr-2 h-4 w-4" />
                  {plan.cta}
                </>
              ) : (
                plan.cta
              )}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
