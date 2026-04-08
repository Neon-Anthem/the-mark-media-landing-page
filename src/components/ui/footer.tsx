import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import LogoLettermark from "../../../public/assets/tmm-logo-lettermark";

interface IFooterLinks {
  title: string;
  href: string;
}

const ProductLinks: IFooterLinks[] = [{ title: "Service Pricing", href: "#" }];
const CompanyLinks: IFooterLinks[] = [
  { title: "About us", href: "#" },
  { title: "Blog", href: "#" },
  { title: "Careers", href: "#" },
];

const ResourcesLinks: IFooterLinks[] = [
  { title: "Community", href: "#" },
  { title: "Help & Support", href: "#" },
  { title: "eBook", href: "#" },
  { title: "What&apos;s New", href: "#" },
  { title: "Status", href: "#" },
];

const IndustriesLinks: IFooterLinks[] = [
  { title: "Financial Services", href: "#" },
  { title: "Education", href: "#" },
];

export function Logo() {
  return (
    <div className="relative">
      {/* <div className="absolute left-0 right-0 top-1/4 mix-blend-difference text-3xl! sm:text-5xl! md:text-9xl!">
        <CurvedLoop
          className=""
          curveAmount={0}
          direction="right"
          interactive={false}
          // marqueeText="Strategy • Performance • Measureable •"
          marqueeText="  #  "
          speed={0.8}
        />
      </div> */}
      <h1 className="w-max mx-auto text-[clamp(1.5rem,10vw,9rem)] uppercase font-black text-primary">
        The Mark Media
      </h1>
    </div>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="mt-16">
      <Logo />
      {/* <TextMaskSection /> */}
      <footer className="mt-auto w-full py-10 px-4 sm:px-6 lg:px-8 bg-background border-t border-primary/30">
        <div className="container mx-auto">
          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
            <div className="col-span-full hidden lg:col-span-1 lg:block">
              <Link
                className="flex-none font-semibold text-xl text-gray-800 focus:outline-hidden focus:opacity-80"
                href="/"
                aria-label="Brand"
              >
                {/* <Image
                  src={"/logox.png"}
                  width={100}
                  height={100}
                  alt="The mark Media Logo"
                /> */}
                <span className="*:h-auto *:max-w-32 fill-foreground">
                  <LogoLettermark />
                </span>
              </Link>
              <p className="mt-3 text-xs sm:text-sm text-white/40">
                © {currentYear} The Mark Media.
              </p>
            </div>
            {/* End Col */}

            <div>
              <h4 className="text-xs font-semibold uppercase">Product</h4>

              <ListNavTitle links={ProductLinks} />
            </div>
            {/* End Col */}

            <div>
              <h4 className="text-xs font-semibold uppercase">Company</h4>

              <ListNavTitle links={CompanyLinks} />
            </div>
            {/* End Col */}

            <div>
              <h4 className="text-xs font-semibold uppercase">Resources</h4>

              <ListNavTitle links={ResourcesLinks} />
            </div>
            {/* End Col */}

            <div className="flex flex-col">
              <h4 className="mt-7 text-xs font-semibold uppercase">
                Industries
              </h4>

              <ListNavTitle links={IndustriesLinks} />
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}

          <div className="pt-5 mt-5 border-t border-primary">
            <div className="sm:flex sm:justify-between sm:items-center">
              <div className="flex flex-wrap items-center gap-3">
                <div className="space-x-4 text-sm">
                  <Link
                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-hidden focus:text-gray-800"
                    href="#"
                  >
                    Terms
                  </Link>
                  <Link
                    className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 focus:outline-hidden focus:text-gray-800"
                    href="#"
                  >
                    Privacy
                  </Link>
                </div>
              </div>

              <div className="flex flex-wrap justify-between items-center gap-3">
                <div className="mt-3 sm:hidden">
                  <Link
                    className="flex-none font-semibold text-xl text-white/20 focus:outline-hidden focus:opacity-80"
                    href="#"
                    aria-label="Brand"
                  >
                    <Image
                      src="/logox.png"
                      width={100}
                      height={100}
                      alt="The mark Media Logo"
                    />
                  </Link>
                  <p className="mt-1 text-xs sm:text-sm text-gray-600">
                    © {currentYear} The Mark Media.
                  </p>
                </div>

                {/* Social Brands */}
                <div className="space-x-4 *:[&>svg]:size-4">
                  <Link
                    className="inline-block text-gray-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800"
                    href="#"
                  >
                    <IconBrandX />
                  </Link>
                  <Link
                    className="inline-block text-gray-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800"
                    href="#"
                  >
                    <IconBrandLinkedin />
                  </Link>
                  <Link
                    href="#"
                    className="inline-block text-gray-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800"
                  >
                    <IconBrandInstagram />
                  </Link>

                  <Link
                    href="#"
                    className="inline-block text-gray-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800"
                  >
                    <IconBrandFacebook />
                  </Link>
                </div>
                {/* End Social Brands */}
              </div>
              {/* End Col */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ListNavTitle({ links }: { links: IFooterLinks[] }) {
  return (
    <div className="mt-3 grid space-y-3 text-sm">
      {links?.map((link, index) => (
        <p key={link.href + index}>
          <Link
            className="inline-flex gap-x-2 text-white/40 hover:text-white focus:outline-hidden focus:text-white"
            href={link.href}
          >
            {link.title}
          </Link>
        </p>
      ))}
    </div>
  );
}
