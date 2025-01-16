import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { motion } from 'motion/react'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} w-full h-screen fixed overflow-hidden text-sm lg:text-lg`}
      style={{ background: `url(/background.svg) no-repeat` }}
    >
      <div className="lg:px-[9rem] fixed z-10 flex items-center font-bold">
        <Image src={'/plan2.png'} alt="logo" width={100} height={100} />
      </div>

      <section className="w-full h-screen overflow-y-scroll overflow-x-hidden">
        <section className="lg:w-[90rem] p-4 mx-auto h-screen flex items-center">
          <div className="space-y-6 md:mt-32">
            <motion.h1 className="text-5xl font-bold" 
            initial={{y: -200}}
            whileInView={{y: 0}}
            transition={{duration: 1.5}}
            viewport={{once: true}}
            >Your Gateway to the Future of Crypto
            </motion.h1>
            <motion.p className="md:w-[50rem] leading-9"
            initial={{y: 200}}
            whileInView={{y: 0}}
            transition={{duration: 1.5}}
            viewport={{once: true}}
            >
              Designed to deliver long-term value and security, Plan is the ideal choice for individuals and businesses seeking to thrive in the evolving world of decentralized finance.
            </motion.p>
            <motion.button className="border-2 border-blue-500 hover:border-yellow-500 p-2 px-4 rounded-md font-bold"
            initial={{scale: 0}}
            whileInView={{scale: 1}}
            transition={{duration: 1.5}}
            viewport={{once: true}}
            >
              Get Started
            </motion.button>
          </div>
        </section>

        <section className="lg:px-44 backdrop-blur-sm bg-blue-500 bg-opacity-10 mx-auto p-4 py-8 flex justify-center">
          <div className="space-y-24 lg:w-[90rem] p-4">
            <div className="  space-y-6 grid md:grid-cols-2 gap-4 items-center">
              <motion.div className="space-y-4"
              initial={{x: -300}}
              whileInView={{x: 0}}
              transition={{duration: 1.5}}
              viewport={{once: true}}
              >
                <h3 className="text-2xl lg:text-5xl font-bold">About Plan</h3>
                <p className="text-justify leading-8">
                  Plan is a next-generation cryptocurrency token designed to redefine how individuals and businesses approach decentralized finance. Built on the foundation of cutting-edge blockchain technology, Plan offers a secure, transparent, and accessible investment solution tailored to the needs of modern investors.
                  Our token represents a perfect balance of innovation, sustainability, and growth potential. Plan ensures long-term value by implementing robust tokenomics and leveraging blockchain&apos;s inherent transparency and efficiency. With a focus on creating an inclusive financial ecosystem.
                </p>
              </motion.div>
              <div className="order-first md:order-last w-full flex justify-end">
                <Image src={'/plan3.png'} alt="about plan" width={300} height={300} className="w-[500px] flex" />
              </div>
            </div>

            <div className=" space-y-6 grid md:grid-cols-2 flex gap-4 items-center">
              <div className="">
                <Image src={'/ai-bg.png'} alt="our mission" width={300} height={300} className="w-[1000px]" />
              </div>
              <motion.div className=" space-y-4"
              initial={{x: 300}}
              whileInView={{x: 0}}
              transition={{duration: 1.5}}
              viewport={{once: true}}
              >
                <h3 className="text-2xl lg:text-5xl font-bold">Our Mission</h3>
                <p className="text-justify leading-8">
                  We aim to empower individuals and businesses worldwide by providing a reliable and accessible investment platform built on transparency, security, and the transformative potential of blockchain technology.
                  To empower individuals globally by providing a reliable and accessible platform for wealth creation through cryptocurrency investments.
                  to bridge the gap between traditional and decentralized finance, offering a token that not only delivers significant value but also inspires confidence and drives economic inclusion.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="lg:px-44 mx-auto h-screen flex items-center justify-center">
          <div className="space-y-6 border-2 border-blue-900 bg-blue-900 text-white md:rounded-lg p-4 py-8 md:p-24 md:text-center">
            <h3 className="text-2xl lg:text-5xl font-bold">Empower Your Financial Future with Plan</h3>
            <p className="lg:text-2xl leading-9">a comprehensive gateway to decentralized finance, meticulously designed to deliver security, transparency, and long-term value. Built on a foundation of cutting-edge blockchain technology, Plan offers an innovative investment opportunity for those ready to embrace the future of finance.</p>
            <p className="lg:text-2xl leading-9">Plan provides the tools and stability you need to succeed. Our commitment to sustainable growth, coupled with a community-focused approach, ensures that every investor becomes a part of a larger movement toward financial empowerment.</p>
            <p className="lg:text-2xl leading-9">Take control of your financial journey with Plan—a token you can trust to lead you into a prosperous and decentralized future.</p>
          </div>
        </section>

        <footer className="lg:px-44 bg-blue-900 mx-auto p-4 py-8 flex flex-col justify-center text-white">
          <div className="space-y-24 lg:w-[90rem]">
            <div className="space-y-4 md:flex">
            <div className="w-2/12">
              <Image src={'/plan2.png'} alt="about plan" width={300} height={300} className="w-[1000px]" />
            </div>

              <div className="flex justify-between space-x-16 w-8/12">
                <div>
                  <h4 className="font-semibold text-lg">Quick Links</h4>
                  <ul className="space-y-2">
                    <li><Link href="/" className="hover:text-blue-300">Home</Link></li>
                    <li><Link href="/about" className="hover:text-blue-300">About Plan</Link></li>
                    <li><Link href="/tokenomics" className="hover:text-blue-300">Tokenomics</Link></li>
                    <li><Link href="/faq" className="hover:text-blue-300">FAQs</Link></li>
                    <li><Link href="/contact" className="hover:text-blue-300">Contact Us</Link></li>
                  </ul>
                </div>

                {/* Resources Section */}
                <div>
                  <h4 className="font-semibold text-lg">Resources</h4>
                  <ul className="space-y-2">
                    <li><a href="/whitepaper" className="hover:text-blue-300">Whitepaper</a></li>
                    <li><a href="/blog" className="hover:text-blue-300">Blog</a></li>
                    <li><a href="/investor-resources" className="hover:text-blue-300">Investor Resources</a></li>
                    <li><a href="/privacy-policy" className="hover:text-blue-300">Privacy Policy</a></li>
                    <li><a href="/terms-of-service" className="hover:text-blue-300">Terms of Service</a></li>
                  </ul>
                </div>

                {/* Social Media & Subscription Section */}
                <div>
                  <h4 className="font-semibold text-lg">Connect With Us</h4>
                  <ul className="space-y-2">
                    <li><a href="https://twitter.com/PlanCrypto" className="hover:text-blue-300">Twitter</a></li>
                    <li><a href="https://linkedin.com/company/PlanCrypto" className="hover:text-blue-300">LinkedIn</a></li>
                    <li><a href="https://t.me/PlanCrypto" className="hover:text-blue-300">Telegram</a></li>
                    <li><a href="https://discord.com/invite/PlanCrypto" className="hover:text-blue-300">Discord</a></li>
                    <li><a href="https://youtube.com/PlanCrypto" className="hover:text-blue-300">YouTube</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-sm border-t border-white py-4">
            <p>© [Year] Plan Crypto. All Rights Reserved.</p>
            <p className="mt-2">Cryptocurrency investments carry risk. Please ensure you understand the risks involved before investing.</p>
          </div>
        </footer>


      </section>
    </div>
  );
}
