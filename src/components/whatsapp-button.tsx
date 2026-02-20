"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function WhatsAppButton() {
  const whatsappNumber = "243000000000";
  const message =
    "Bonjour, je souhaite en savoir plus sur vos services Bridge.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex size-18 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <Image
        src="/icons-whatsapp.gif"
        alt="WhatsApp"
        width={48}
        height={48}
        className="rounded-sm"
      />
      {/* <MessageCircle className="size-7 text-white" /> */}
    </Link>
  );
}
