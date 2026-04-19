"use client";

// Third party imports
import { motion } from "framer-motion";
import { Check, Wallet } from "lucide-react";
import Link from "next/link";

// Animations
import { fadeUp } from "@/lib/animations";

export default function AuthClient() {
  return (
    <div className="min-h-screen py-4 max-w-fit mx-auto bg-background text-neutral">
      <motion.div
        {...fadeUp(0.2)}
        className="max-w-260 mx-auto grid grid-cols-2"
      >
        <div className="bg-blue-600 p-12 flex flex-col justify-between rounded-4xl gap-25">
          <div>
            <Link
              href="/"
              className="font-bold text-[1.5rem] font-manrope flex gap-3 items-center text-white dark:text-white/90 hover:text-white/95 transition-transform duration-200"
            >
              <Wallet className="w-7 h-7" />
              Financial Atelier
            </Link>

            <h1 className="font-bold font-manrope text-[2.8rem] leading-tight mt-12 mb-8.5">
              Precision in every transaction.
            </h1>

            <p className="text-lg leading-relaxed text-neutral/90">
              Experience a digital concierge for your wealth, balancing legacy
              authority with fluid intuition.
            </p>

            <ul className="flex flex-col gap-3 max-w-fit mt-8">
              <li className="text-[0.9rem] flex gap-3 items-center font-semibold text-neutral/95">
                <div className="p-1.5 rounded-full bg-blue-500/80">
                  <Check className="w-4 h-4" />
                </div>
                Real-time Expense Tracking
              </li>

              <li className="text-[0.9rem] flex gap-3 items-center font-semibold text-neutral/95">
                <div className="p-1.5 rounded-full bg-blue-500/80">
                  <Check className="w-4 h-4" />
                </div>
                Smart Budget Planning
              </li>

              <li className="text-[0.9rem] flex gap-3 items-center font-semibold text-neutral/95">
                <div className="p-1.5 rounded-full bg-blue-500/80">
                  <Check className="w-4 h-4" />
                </div>
                Comprehensive Financial Reports
              </li>
            </ul>
          </div>
          <div className="p-5 border text-sm font-medium gap-4 italic border-border/30 rounded-xl bg-white/20 flex items-center">
            <img
              className="w-10 h-10"
              src="/review_marcus.avif"
              alt="Tru of Grid PFP"
            />

            <div className="flex flex-col gap-2">
              <p>
                &quot;The clarity I&apos;ve been looking for in private
                banking.&quot;
              </p>

              <span>Tru</span>
            </div>
          </div>
        </div>
        <div className="bg-surface px-3 py-4"></div>
      </motion.div>
    </div>
  );
}
