'use client';

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/app/components/ui/dialog"; // Таны зааж өгсөн ακриат зам

export default function CaseStudiesPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      
      {/* 1. Модал нээх товчлуур - asChild-ийн тусламжтайгаар таны үндсэн дизайн эвдрэхгүй */}
      <Dialog>
        <DialogTrigger asChild>
          <button className="bg-[#560591] text-white px-6 py-4 rounded-xl font-bold hover:bg-[#41036e] transition-all duration-200 active:scale-95 shadow-md">
            Бүрэн тайлан захиалах
          </button>
        </DialogTrigger>

        {/* 2. Поп-ап цонх болон түүний доторх Microsoft Form */}
        <DialogContent className="sm:max-w-2xl p-0 overflow-hidden bg-white border-none shadow-2xl rounded-2xl">
          <div className="w-full h-[80vh] max-h-[600px] pt-2">
            <iframe
              src="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=qAjvAQ5TyEqu0vCtaSs7uzGKxoA4v5BMgV3H_U8bi-tUNU1ZVVlBODgyRVdWOUROUFkwVTY5MFFaNi4u&embed=true"
              width="100%"
              height="100%"
              frameBorder="0"
              marginWidth={0}
              marginHeight={0}
              style={{ border: 'none' }}
              allowFullScreen
            >
              Уншиж байна...
            </iframe>
          </div>
        </DialogContent>
      </Dialog>

    </div>
  );
}
