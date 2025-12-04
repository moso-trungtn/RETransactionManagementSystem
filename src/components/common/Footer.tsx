'use client';

import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Youtube, Instagram, Home, FileText } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-[#1E1E1E] text-white">
            <div className="py-12 px-6 md:px-12 lg:px-20">
                <div className="max-w-7xl mx-auto">
                    <div className="w-[155px] h-[30px] my-12">
                        <img
                            src="/main-logo-footer.svg"
                            alt="LoanFactory Logo"
                            className="h-8 w-auto"
                        />
                        <p className="text-white"></p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Logo and Contact Section */}
                        <div className="space-y-6">
                            <div>
                                <h3 className="mb-4">Contact Us</h3>
                                <div className="space-y-3 text-sm text-gray-300">
                                    <div className="flex items-start gap-2">
                                        <Home className="size-4 mt-0.5 flex-shrink-0" />
                                        <p>Moso - 10008 Bellaire Boulevard, Ste 203, Houston, TX 77072</p>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <FileText className="size-4 mt-0.5 flex-shrink-0" />
                                        <p>Licensed in AZ, CA, FL, MI, NM, OH, OK, PA, TX, WA</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Useful Links Section */}
                        <div>
                            <h3 className="mb-4">Useful Links</h3>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li>
                                    <Link href="/about" className="hover:text-[#F36F25] transition-colors">
                                        About Our Company
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="hover:text-[#F36F25] transition-colors">
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <a href="#" className="hover:text-[#F36F25] transition-colors">
                                        NMLS# 12345678
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Social Section */}
                        <div>
                            <h3 className="mb-4">Social</h3>
                            <div className="flex gap-4">
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#F36F25] transition-colors"
                                    aria-label="Facebook"
                                >
                                    <Facebook className="size-6" />
                                </a>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#F36F25] transition-colors"
                                    aria-label="Twitter"
                                >
                                    <Twitter className="size-6" />
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#F36F25] transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="size-6" />
                                </a>
                                <a
                                    href="https://youtube.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#F36F25] transition-colors"
                                    aria-label="YouTube"
                                >
                                    <Youtube className="size-6" />
                                </a>
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#F36F25] transition-colors"
                                    aria-label="Instagram"
                                >
                                    <Instagram className="size-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section with White Background */}
            <div className="bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-sm text-gray-600 h12">
                        <span>Powered by</span>
                        <div className="w-[82px] h-12">
                            <img
                                src="/Logo-MOSO.svg"
                                alt="Moso Logo"
                                className="h-12 w-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}