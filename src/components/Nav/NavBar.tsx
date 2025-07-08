import { Book, CircleUserRound, Menu, Sunset, Trees, Zap } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface NavbarProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
    logout:{
      title: string;
      url: string;
    }
  };
}

const Navbar = ({
  logo = {
    url: "#",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "Finex Ltd.",
  },
  menu = [
    { title: "Home", url: "#" },{ title: "Track Your Shipment", url: "#" },
    {
      title: "Pricing",
      url: "#",
    }, {
      title: "Blog",
      url: "#",
    },
    {
      title: "About Us",
      url: "#",
      items: [
        {
          title: "Company",
          description: "The latest industry news, updates, and info",
          icon: <Book className="size-5 shrink-0" />,
          url: "#",
        },
        {
          title: "Work",
          description: "Our mission is to innovate and empower the world",
          icon: <Trees className="size-5 shrink-0" />,
          url: "#",
        },
       
        {
          title: "Support",
          description:
            "Get in touch with our support team or visit our community forums",
          icon: <Zap className="size-5 shrink-0" />,
          url: "#",
        },
         {
          title: "Careers",
          description: "Browse job listing and discover our workspace",
          icon: <Sunset className="size-5 shrink-0" />,
          url: "#",
        },
      ],
    },
     {
      title: "Contact Us",
      url: "#",
    },
    
     {
      title: "Pickup Request",
      url: "#",
    },
   
   
  ],
  auth = {
    login: { title: "Login", url: "#" },
    signup: { title: "Sign up", url: "#" },
    logout: { title: "Logout", url: "#" },
  },
}: NavbarProps) => {
  return (
    <section className="w-full h-[58px]">
      <div className="py-3 border-b w-full fixed top-0 backdrop-blur-md bg-white px-4 ">
        <div className="container m-auto">
          {/* Desktop Menu */}
          <nav className=" justify-between flex">
            <div className="flex items-center gap-6">
              {/* Logo */}
              <a href={logo.url} className="flex items-center gap-2">
                <Image
                  width={40}
                  height={40}
                  src={logo.src}
                  className="max-h-8"
                  alt={logo.alt}
                />
                <span className="text-lg font-semibold tracking-tighter">
                  {logo.title}
                </span>
              </a>
            </div>
            <div className="flex gap-2 items-center align-middle">
              <div className="flex items-center gap-2">
                Login <CircleUserRound className="w-9 h-9" strokeWidth={1} /> 
              </div>

              <Sheet>
                <SheetTrigger asChild>
                  {/* <Button variant="outline" size="icon" className="bg-red-600 border-0 text-white"> */}
                    <Menu className="size-8" strokeWidth={2} />
                  {/* </Button> */}
                </SheetTrigger>
                <SheetContent className="overflow-y-auto bg-white ">
                  <SheetHeader className="border-b">
                    <SheetTitle className="">
                      <a href={logo.url} className="flex items-center gap-2">
                        <Image
                          width={40}
                          height={40}
                          src={logo.src}
                          className="max-h-8"
                          alt={logo.alt}
                        />
                      </a>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-6 p-4 ">
                    <Accordion
                      type="single"
                      collapsible
                      className="flex w-full flex-col gap-2"
                    >
                      {menu.map((item) => renderMobileMenuItem(item))}
                    </Accordion>

                    <div className="flex flex-col gap-3">
                      <div className="bg-red-500 flex items-center gap-2 h-12 rounded-md justify-center align-middle text-white hover:bd-dafult transition-all duration-150 ease-linear">
                        <CircleUserRound className="w-9 h-9" strokeWidth={1} /> <a href={auth.login.url}>{auth.login.title}</a>
                      </div>
                      
                    </div>

                    <div>

                    </div>


                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0 p-3 border border-gray-100 hover:bg-gray-50 transition-all duration-150 ease-linear rounded-md">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="text-md font-semibold p-3 border rounded-md border-gray-100 hover:bg-gray-50 transition-all duration-150 ease-linear">
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export default Navbar;
