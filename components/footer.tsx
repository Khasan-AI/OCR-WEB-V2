"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-heading font-bold mb-4">{t("footer.brand")}</h3>
            <p className="text-gray-300 mb-6 max-w-md">{t("footer.description")}</p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-300 hover:text-white">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.product.title")}</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="#features" className="transition-colors hover:text-white">
                  {t("footer.product.features")}
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="transition-colors hover:text-white">
                  {t("footer.product.pricing")}
                </Link>
              </li>
              <li>
                <Link href="/accuracy" className="transition-colors hover:text-white">
                  {t("footer.product.accuracy")}
                </Link>
              </li>
              <li>
                <Link href="/docs" className="transition-colors hover:text-white">
                  {t("footer.product.docs")}
                </Link>
              </li>
              <li>
                <Link href="/status" className="transition-colors hover:text-white">
                  {t("footer.product.status")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t("footer.company.title")}</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t("footer.company.about")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t("footer.company.blog")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t("footer.company.careers")}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  {t("footer.company.contact")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">{t("footer.copyright")}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              {t("footer.legal.privacy")}
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              {t("footer.legal.terms")}
            </a>
            <Link href="/security" className="text-sm text-gray-400 transition-colors hover:text-white">
              {t("footer.legal.security")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}


export default Footer;
