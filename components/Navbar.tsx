"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FileText, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link 
              href="/"
              className="text-xl font-bold text-gray-800 hover:text-gray-600"
            >
              DocChat
            </Link>
            <div className="flex space-x-4">
              <Link
                href="/documents"
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium ${
                  pathname.startsWith('/documents')
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <FileText size={18} />
                <span>Documents</span>
              </Link>
              <Link
                href="/chat"
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium ${
                  pathname.startsWith('/chat')
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <MessageCircle size={16} />
                <span>Chat</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}