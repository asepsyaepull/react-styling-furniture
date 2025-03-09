
import { HiArrowRight, HiOutlineSearch, HiStar } from 'react-icons/hi'
import iconLogo from './assets/logo-icon-color.svg'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import { HiMiniShoppingBag, HiMiniStar } from 'react-icons/hi2'
import WhyUs from './components/WhyUs'
import Product from './components/Product'
import Experience from './components/Experience'
import Material from './components/Material'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import { FaFacebookF, FaInstagram, FaPinterestP, FaTwitter } from 'react-icons/fa6'
import CTA from './components/CTA'

function App() {

  const logo = iconLogo
  const textLogo = "Furnime"

  const navList = [
    {
      title: "Home",
      link: "#hero"
    },
    {
      title: "Shop",
      link: "#product"
    },
    {
      title: "About",
      link: "#about"
    },
    {
      title: "Contact",
      link: "#"
    }
  ];

  const icons = [
    {
      id: 1,
      icon: <HiMiniShoppingBag />,
      link: "#"
    },
    {
      id: 2,
      icon: <HiOutlineSearch />,
      link: "#"
    }
  ];

  const hero = {
    id: 1,
    title: "Make your interior more minimalistic & modern",
    subtitle: "Turn your room with furnime into a lot more minimalist and modern with ease and speed",
    background: 'https://s3-alpha-sig.figma.com/img/d2be/e090/11d0ef5c5aab59b69714774a45812d7d?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=r45Tz1v~k6~C94CSKmNfTD5N09c324zID~uOnkRsK2ngqPzI9BBsOSGdAnNKgiEZsxg3VlqU6mYq19~hEkReuJdtfYtGauTuIQ0Kn82iVun3DlSTtm6fUQiER6aZ74ibNOQQ8p6LddfCjpd5-lDnbPUExQdYXl7WXwDcwyf4YXBSJ71q5yapAILnJvp0uAeY0-Sm0ijC~jKqM-xQeV1CrxgK7yS~qpWuljnoS8d9qLGIzHJKt9zox9f8GE5wGiKej7uCfx27tfPcipXK8iVJptWd5fz-X2iOTqnBY8ZjWFju18Q9ZBw6XxjEhGXeHixQMdACUUlP1Z~CsToZ5UmH3Q__'
  }

  const whyus = [
    {
      id: 1,
      title: "Luxury facilities",
      description: "The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities."
    },
    {
      id: 2,
      title: "Affordable Price",
      description: "You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here."
    },
    {
      id: 3,
      title: "Modern interior",
      description: "We provide many unique work space choices so that you can choose the workspace to your liking."
    }
  ];

  const productDescription = {
    id: 1,
    title: "Our Trending Product",
    subtitle: "High Quality Furniture",
    description: "Discover furniture that combines quality and design. We provide a variety of furniture products that are very luxurious and elegant. You can choose the furniture that suits your room.",
  }

  const productList = [
    {
      id: 1,
      name: "Sakarias Armchair",
      type: "Chair",
      image: "https://s3-alpha-sig.figma.com/img/72b4/5d5c/11068dab5ec5316fcbdb57fa2468c3bd?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ITNAKq18fgLP08gS7h8UlNCx66-Fw3kQ1QsLnetadrtcsWSpNILp0XxfBg284uyWP~qUZxqnbRZuHSVzpbIgYlzQQ7XPC6EJKmi9QHKc0WMb-0vD96NrsrS7LDEmt46EGXCG9B7z3ZqwveJKUjHegUXtW7G6fmSTaHosmaMgwypYLZT-nmK3-WJ~IS~RNt7iJgeYUA8SXeBTNpKvjlETItSU09VZU2Lvo7psiY65-0Hg5Bz7FDIAbL2fy5VBarxvXScWHDiDgwvEkq2JWk1VB1s5yfCDWHP01JfsjAdfgA1n09KAU3xWofMQoDNIadFFJ3csRYPtYimF3sSyvsTuVw__",
      price: 389,
      icon: <HiStar />,
      rate: 4.8,
      colors: ["bg-gray-800", "bg-sky-600", "bg-blue-400"],
    },
    {
      id: 2,
      name: "Baltsar Chair",
      type: "Chair",
      image: "https://s3-alpha-sig.figma.com/img/d5a3/f321/bac85cc737d261d2e07c33af6757be12?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=U5SAXs9OkTpLlJXB2IcPFjENt82spKPLOIUYuzO2C9p7NNWJRVog4I5u8kWsiZeTs6soEvvTpRtLZXYUNm~8oTG3o16Rp0yhkSxOXvBqjhwjGRELrYXjBT8l2l0XQ0YxTdmuLvAH-0x5DBpR3z4Rw5sI4qu2BbTf9bix~SIdg-3ohlHYrhFNOXT4gb8iFNGRh-7F0kBwHDZiSpZACNtaV3CWVbetW6jBrfdCATVNKnpcwmzhf1k5PQD1ZG4wwbgvay6XVr930P2AnlQkSwodJW2wk6plkuoMZnn4lkKTG13x58fpK5Pp298VG1KffZj6sTMKYotjHG5v--r2DtEtrQ__",
      price: 299,
      icon: <HiStar />,
      rate: 4.8,
      colors: ["bg-gray-700", "bg-sky-500", "bg-green-800"],
    },
    {
      id: 3,
      name: "Santuy Chair ",
      type: "Sofa",
      image: "https://s3-alpha-sig.figma.com/img/b0bc/080d/9a879bf40d497ccc69dbc0f0310f6bc2?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CIvtooTH5BTOeGYRwNUwtohf5IexCXRYCJvaepGq5SF1OPH-8ntmg1Lta4aO6I-PZIhGR3tyo-Iwcu~MXbQM~eCPZe3RclrYIaSNYvBEu9fNFcZBtrzuwpUrUWypiQw6X9v2MUJCzOz6LKhiMrg3XZoCfx6KUGcwTyYDEtmoBwWoARzVSACCt4-qlSQjCqyhGEqW4D2TIeRK8c8u7lj0lF7eK~IAMDvrXYgH~J0XE7ERqypcMv46RhfFz7TT9-rHXxTcUSSoxoz0BGArIqGVJkvL8A2FC0zz7mwDQo9ue859NKFOdhDcw1cUrCBxPVRHRu-1gfO7ONuj~5WE9PO-IA__",
      price: 519,
      icon: <HiStar />,
      rate: 4.8,
      colors: ["bg-red-500", "bg-sky-500", "bg-green-500"],
    },
    {
      id: 4,
      name: "Relax Chair ",
      type: "Sofa",
      image: "https://s3-alpha-sig.figma.com/img/6012/e707/4ba9207a7e0e984fcbf663c8bb31a920?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jALh~YhJCueweS62rDfNSAwbDG2iOBfeVtF58E0AUIM0f0UGxEjeodgPxFuKBlIqGacQuam5f4VK~1Q~l3pQi2piBe4HKuYQBI6VzamYxuPKmRISbRykSJpZqTQ8tufEh8qFbnxCwhclmGxK0x5ZcQ8cBgu4RKdBsHHWsD0k0HTUm52GAJqF~a2e-6E~fpIM5h19e9b6MRE0L2TrFqT10iYWBx7qTWZfvBzWNFnOfp5qIrBGgUoh4zbDtFk8iQM5rYAV7HPDfBL6MfScyfpfdqn~V5axbhw1~T2ZTOVjLEwcRUWelodkifF6f2LtgtwdPxQTVOUPjIWNYH1Taw2Z4Q__",
      price: 921,
      icon: <HiStar />,
      rate: 4.8,
      colors: ["bg-black", "bg-blue-300"],
    },
  ];

  const experience =
  {
    id: 1,
    title: "experiences",
    subtitle: "We Provide You The Best Experience",
    description: "You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials",
    image: "https://s3-alpha-sig.figma.com/img/4a4b/57d9/1dde88ae6788c27acd5fc55158eb2f11?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SR5pnFNBjFXhvPSVMRfwB~RY3D6BahiofIjwb6oIdFj77~xUmI7mKlcZMCnzaeFwKMcJBZCCjWu4LzIcofIXNKY-e3lah7jWULmRLHCjBbhO7WwNq1xJN9mLLOf6mru2OXVWTjlLNHquOMlWfZU008qHsVMF72X0NmeyjTG3rmEeKpKKhlSGUw-kFtELRbOHarBHQtZfwa4ZR4yfSCiGTbvGUoTy8cQU~zojkqWpmw6w1g40cUmDtEt-cpghWnaICA-otkIJN3fBRhH5M6w4CejynufTq4wXEcDH9NEMIP4p9tyq2aEeGiQszlA67AbuIcHwp9P5t-9aP9ZmmQ8xgQ__",
    icon: <HiArrowRight />
  };

  const materials =
  {
    id: 1,
    title: "Materials",
    subtitle: "Very Serious Materials for Making Furniture",
    description: "Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price",
    image1: "https://s3-alpha-sig.figma.com/img/3c8e/a705/dfc44b8035ebd10cd5adaafc9278179e?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LyGl4PA~BNrFiUY66IHqVXjX3AysRojVU5S0G7cKwtX8knrusiXL-rtVKHIXTfekLGF9SMc2cPrm6hV4k-fza9pHr5ag5bmqjkyp49K61n2iMp-K9WcF-0LTdnPP-F62Ns3QsNXk1p1VTmh0owHLMdUzJBef2UY20bvVWHE~OnlaBuToRurWHKSOzFHaiSeMMh-9jFYmmqwLU-wRomA6KuiSCsPy18kocXVMZlK-RT46L45NJ3-LmybvnM9YW5Bt38K4AbBRUh9w66oC~PtdKIgjSR4~c4hqE0yTyK-SNE2ehS3vpY0s3yGmAeJ7KalW0bUo-g8zpQHA1H7N1NQliA__",
    image2: "https://s3-alpha-sig.figma.com/img/6155/4c82/d6a52e0a511f5d3e3a3ff6bbfcfafb76?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=IRe3LYRHTpMy1RaRoR6lBLub0p9zcEatxZDYN29nV2uVMa9eKeP0FGJ-uLGRg864B67NtcqGnyH2fKvTVNHFxXoVTEbsKJxaaui~z3mxsQl0Y2qh-R4OuBzm-~05ZWCX5LuWR0AHz67KqXbGNADlE1DKgUpQqbOz0~qQvjbTkPrPvxD4GiRx1H9Tv3Lc84I6wRTjp7FkAbLgo1Fpj14vTbDLUa-2J3LQEx6i-P-jSDa9XX01K9UO8HcaXYgSCE4bsKcdj8kLvleErVl1JxGxq1MNYwfZOf4yzvzX~n6wyCVEsh1etNmyrIxN8x7nvzUpEVwmJ2AqoVcQiuA7vLCihw__",
    image3: "https://s3-alpha-sig.figma.com/img/443c/ef5f/2c32d6f28e6923d590e9c7a89b1297f7?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jn0v5XnB3civ0gOOMynwIOEug6Vfccnb~8OTWCJe5-TixfS3N5nSeVpL-WGxrk-ZEVKl7RYtTWqHzqTj36fhD4-OgAeOfl2fE7NtNspSeYUZki94IvOEDKYvUSyKQeZDnA5l1G6XP9m60ymaLRPyG8GgUn~Wo4qTQ6ZTo8va-Wyv9a2ZCeteZsaUOHKRd7DyTpPWw4CG0mkdRi6YrVrEv2h3LxAccXe9XgbmbIXJNwg88fa4mr4cZYYyNNs39UINXck6oQ3gbbtbUmwALAlKJG0cJIaIxwWQCvLSjHtMHxNp4wfUANdKrVemAJQ8WSzhKbAvViGMH7EgWbGTmy0qWw__",
    icon: <HiArrowRight />
  };

  const testimonials = [
    {
      id: 1,
      bgImage: "https://s3-alpha-sig.figma.com/img/9b2e/d3d9/b2a3882779d03355c1e1da861bab3d1d?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F4ZVTNkJx4OFEzDCskBARiLwL5Xhrw~M1ARcITutOkcH1oRHXX6nJgCemftxTofmCoOpe5pwwfna4U1gyKeF19VLFp4e2aXEnQyojNcqqxJCitlP~tzLlfGQpmhoL9suvWuNp3Xd2tdtxQROd7tqymVSplGZBMAtl-UX8xmo6PS50zz8M6JicB38~lkYEfgEboaZWns0~KrXpvEpzCco0AJCYAyR~nFgtvJ~q4G51V7mVW~Q2DUr2I7lQszz28eZP5PWMzHE2pmBEIpIU46pldbYFn9G2g7rsB4KdWDKRl8NtEdbuWXgrFbr0vp13YnjzelGkzMwKFTyJMFKFGTxeA__",
      image: 'https://images.unsplash.com/photo-1641288883869-c463bc6c2a58?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGF2YXRhcnxlbnwwfHwwfHx8Mg%3D%3D',
      name: "John Doe",
      job: "Designer",
      review: "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal",
      stars: <HiMiniStar />
    },
    {
      id: 2,
      bgImage: "https://s3-alpha-sig.figma.com/img/7376/56c2/eeb8f98032e5e2b9bd9d84137bbf9d6e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=me~t9bRrryzsLSR7CARqY10pj6It5jSkyMJ51rEoLjRkFNpwY399AgvNKdokD1nKYtqIPvWPKpPtN0wqTVABK8814SU-wi4tX~NpYT9N2WpGVJzDAh6K0q-bWJ7S9ZWIeQM8Fh5vKvilDdfmHUpVX7zTywuFFVzbNOWhBcnPUD~h7wXZWO~rp3ly7IrP6w76g8Q-HN4DewMcQjX7TB1o70LPEUj5kwJxGUxRYM2cVljJcP9e5dHvhqe4ocShq7YoHF3cSbopnjTW-x491YiwnFyOiyx3YHSEaV3dlr4ApY9b53tl~fEX2H0Oztm9rYAipJ1cdEG2yUhryBegkZUHMQ__",
      image: 'https://images.unsplash.com/photo-1558898479-33c0057a5d12?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGF2YXRhcnxlbnwwfHwwfHx8Mg%3D%3D',
      name: "Jane Doe",
      job: "Ibu Rumah Tangga",
      review: "Makasih, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah",
      stars: <HiMiniStar />
    },
    {
      id: 3,
      bgImage: "https://s3-alpha-sig.figma.com/img/86ca/2d40/e5cc03367af5eb6766025000d1108f3d?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HNv1PPX9WjxO~UFCTejc4B-XFjFB1wPtlDyLKnHRTALKqKmjrYPLY0HcgeH~rs74G~-DNuEx-GaefcWC7mA2igmZp7MJK~awthJ~l2AQ-3-2ZtBbMhd4MmTSorjT34Ex8jTuGU6Qgt1fiPcmT0xhlnkO3ZhsT2Pe8sNnOnhz6oCGW~QAxxUvdSfR3C8sDynAVDV6ykLTD6tFaQ9Gm0goG6YPMYdctHbzzOVkIz5CexDNl8PJz5DpixE-Qf0OvS6bttseOynhEw1oaFW0TySDsycjd8t0KYBss1uL1ox4SeZa1-osKjYnZmESAhFpyQKrThiDUIyaLypQzEeEbNGHGQ__",
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ5fHxhdmF0YXJ8ZW58MHx8MHx8fDI%3D',
      name: "Linh Lee",
      job: "Ibu Rumah Tangga",
      review: "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak",
      stars: <HiMiniStar />
    },
    {
      id: 4,
      bgImage: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlfGVufDB8fDB8fHww",
      image: 'https://images.unsplash.com/photo-1640951613773-54706e06851d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGF2YXRhcnxlbnwwfHwwfHx8Mg%3D%3D',
      name: "Joe Richard",
      job: "Pegawai Swasta",
      review: "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak",
      stars: <HiMiniStar />
    },
    {
      id: 5,
      bgImage: "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      image: 'https://images.unsplash.com/photo-1632324343640-86af9827dbeb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGF2YXRhcnxlbnwwfHwwfHx8Mg%3D%3D',
      name: "Sarah Smith",
      job: "Ibu Rumah Tangga",
      review: "Produk ini sangat bagus dan berkualitas tinggi. Saya sangat puas dengan pembelian ini.",
      stars: <HiMiniStar />
    },
    {
      id: 6,
      bgImage: "https://images.unsplash.com/photo-1486946255434-2466348c2166?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D",
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHwy',
      name: "Jane Doe",
      job: "Ibu Rumah Tangga",
      review: "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak",
      stars: <HiMiniStar />
    },

  ];

  const cta = {
    id: 1,
    title: "Luxury Chraft Chair",
    subtitle: "Dont miss our special offer on this month for our specialy subscribers",
    discount: "25% off",
    background: "https://images.unsplash.com/photo-1606744824163-985d376605aa?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }

  const footerDesc = {
    id: 1,
    title: "Furniro",
    description: "Furniro is a company engaged in the field of furniture that has been established since 1990. We provide a variety of furniture products that are very luxurious and elegant.",
    address: "Jl. Raya Jemursari No. 234, Surabaya, Indonesia",
    phone: "+62 812 3456 7890",
    email: "support@funiro.com",
  };

  const footerService = [
    {
      id: 1,
      menu: "Email Marketing",
      link: "#"
    },
    {
      id: 2,
      menu: "Campaigns",
      link: "#"
    },
    {
      id: 3,
      menu: "Branding",
      link: "#",
    }
  ];

  const footerList = [
    {
      id: 1,
      menu: "About Us",
      link: "#"
    },
    {
      id: 2,
      menu: "Contact Us",
      link: "#"
    },
    {
      id: 3,
      menu: "Testimonials",
      link: "#",
    },
    {
      id: 4,
      menu: "Terms of Service",
      link: "#"
    },
    {
      id: 5,
      menu: "Privacy Policy",
      link: "#"
    }
  ];

  const footerSocial = [
    {
      id: 1,
      icon: <FaFacebookF />,
      social: "Facebook",
      link: "#"
    },
    {
      id: 2,
      icon: <FaInstagram />,
      social: "Instagram",
      link: "#"
    },
    {
      id: 3,
      icon: <FaTwitter />,
      social: "Twitter",
      link: "#",
    },
    {
      id: 4,
      icon: <FaPinterestP />,
      social: "Pinterest",
      link: "#",
    }
  ]

  return (
    <div>
      <Navbar logo={logo} textLogo={textLogo} navList={navList} icons={icons} />
      <Hero hero={hero} icons={icons} />
      <WhyUs whyus={whyus} />
      <Product productDescription={productDescription} productList={productList} />
      <Experience experience={experience} />
      <Material materials={materials} />
      <Testimonials testimonials={testimonials} />
      <CTA cta={cta} />
      <Footer
        logo={logo} textLogo={textLogo} footerDesc={footerDesc} footerService={footerService} footerList={footerList} footerSocial={footerSocial}
      />
    </div>
  )
}

export default App