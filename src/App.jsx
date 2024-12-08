
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
    background: 'https://s3-alpha-sig.figma.com/img/d2be/e090/11d0ef5c5aab59b69714774a45812d7d?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cz9wq3Egeter~ldaKBaep75se9eLaC86UuGvjzpX0Hgr2Zp7a6UNXHJUcGknGYMmL4B~FL5oYzc3tPDLUEcHi9J~oa1kIoLPByoJeD~50R9o~WwccU3CDGnca8C4qB~NdCa7-zZacDBQGJHQzACXkXjgFWzR6eMJnfG66YcB1GdGbBPdHu5ORsV4s6bAl98bzfn7CQ4bQQMjMIaweaxxpox81u~3GKdVanYqhOMh06D2alf8efjTag5s1z7hyl6jrWFcV3GjQMkjEO9rBIn8Hv1n-axN1D1L9OMYW3ZMAe5ELRAQNPcTe8ijnMxpPw3AwdtDmT1lvFPFcJnb-5OmRQ__'
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
      image: "https://s3-alpha-sig.figma.com/img/72b4/5d5c/11068dab5ec5316fcbdb57fa2468c3bd?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gAxzhvgAtJW2KKy2sVd7IVkU0Lj4mLkxmQtz2gP-SIlYp~he~vurqqZMQmZdFObkk3QwKInUBZ8Z3XQYPIdcORA~fRQ6z~~LRfBBYj~QDtSSbo-9YUaV~gT6tjsqinNTMc~fKvHVezXVtjLjZcrcU8YylEPIHqnIqEvdZq2LLUughgi1UdLpl4KkFNl8yDku8daJSvP4ADEiylzKwfJy8FzVSVitl0yWa0ZIdQFDfcbEA-yFP8S1sqe1tgc6waTuhB8dWzgDQvYOO5vQuNbutjNDxfDWJvd~VnTIVpsDBUVPR3jqOUXOYX23FS9BANomQDO1WWpMT1S-Oake6rgBPQ__",
      price: 389,
      icon: <HiStar />,
      rate: 4.8,
      colors: ["bg-gray-800", "bg-sky-600", "bg-blue-400"],
    },
    {
      id: 2,
      name: "Baltsar Chair",
      type: "Chair",
      image: "https://s3-alpha-sig.figma.com/img/d5a3/f321/bac85cc737d261d2e07c33af6757be12?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DQj3XjvxjMNd1BcEeHdfVknJ4AVV5oefViCDfN28aAVHVVP-d8iBHBiLqZRrMl8hZMEHY-CMLaNsLnqVLwPkjR3MJXh9GN5MIuxgjzN63xMwDPWJ1W3guhQ6~83L6bqJmVrCLkZmSARW3JV8jsQEVgn-YgE6BU1fjaByyPx6YOC6vzmVCZYe25MxTkvA1msW1PCenrc1adu-kBmxZJNhGnzLEC4Tn0riMlY93RUQRbiB7kPBisZP04CHRh90twzMcXvIGdRvnt4Rk6cgfbGJbVkUvyCjG-HvE6mUBcp2g6Wbm8~-4ElvsdfPrPuN5lsL-URANJp8KJof9j-tBogywQ__",
      price: 299,
      icon: <HiStar />,
      rate: 4.8,
      colors: ["bg-gray-700", "bg-sky-500", "bg-green-800"],
    },
    {
      id: 3,
      name: "Santuy Chair ",
      type: "Sofa",
      image: "https://s3-alpha-sig.figma.com/img/6012/e707/4ba9207a7e0e984fcbf663c8bb31a920?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cqm5-KN5pACcIL9nU7kVF0ZKrB71hWk5XgR9cTeLdFDnX~5NR2NUzC4TG8qw19~GDteT7eoZAgiVp92QKRuMGsZJc6a4qtt7J4nkzxa6aJJCYv1Ysp9-2-31hfoWUP-mWuS8X8OZstO5LXj2qprhn1vFwT27JWlmfEgrCYoVV5qJlEKGwhDDFS6arqVpwvLu4Y6uTxNWUoh5wZzK5Zyht8HBk9HZHDn234747vT0nMFb4INOUQYKwf1PqlotLZWDQ~LYvVZ85vdjLasHsoeCAyHaV0SpnyqtgyVELbV1qE0ssXHydR6L6FSiU2sEimVawFFmS9eK6lZdXA76m00tRg__",
      price: 519,
      icon: <HiStar />,
      rate: 4.8,
      colors: ["bg-red-500", "bg-sky-500", "bg-green-500"],
    },
    {
      id: 4,
      name: "Relax Chair ",
      type: "Sofa",
      image: "https://s3-alpha-sig.figma.com/img/b0bc/080d/9a879bf40d497ccc69dbc0f0310f6bc2?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YL0dAvkv8Ic5OukvZtF2qYeGLATfWOn3v8TO-wsxzQdMhNlpW5IpmkEKwwDV55M2o-blnBD~YHmP6Hq0XlacKnG8Lbu~E-ZJA4O61nEF8hZ40QVkz3~fMh9dZlmuzSCb2GBdwXTFijSUYCBx236XGjdyX8RO0Rq5jZPUbot~KVScqbqNvq82fltBu61x74sf4ab-KgTXNQwkhuQbwfhMycJef0Ifp~rn~9somJ53QMeRItMVLGfpBdu0BUMce88JKM0Kx9AMirF8d3fNb8qJxydbMHtSLKuwpP5poRXuFMwWRJyLSSZLWi8ztcTcjMMrCs8dKa8IL8UTacbokl4tAg__",
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
    image: "https://s3-alpha-sig.figma.com/img/4a4b/57d9/1dde88ae6788c27acd5fc55158eb2f11?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C~9UJi~VkQjTmzZSbNc~WwwkyaYrZ2Ph5TyS5fd0szHm6ZxIcGg1t2nH16NXVtNorFvqo-x7yj0EAIZd7RqtvnezWpb~iC7v3Qy4QMUCaHkaJAcBAgiHB9GK1tr8NbryqIi-nEjrKEmfOjgE9p2bIyLA~-tR0ipNugDC-KP0heM4UgI5rYpIP89plmSWNZsVtEJPtQvjrg~CAinVFMKjBWXPOByi4B3ZNm81Nt~yzcwBn5rzTszi4ZdxSJULDsPf1z30RJZCuwsrvpGrPDSWlHhbCiK5LepQ6adPBGLBdSQVdP~YNZCXTYKT5co8FFfbPPIRn2J2gDqzdGFZf1Ua-g__",
    icon: <HiArrowRight />
  };

  const materials =
  {
    id: 1,
    title: "Materials",
    subtitle: "Very Serious Materials for Making Furniture",
    description: "Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price",
    image1: "https://s3-alpha-sig.figma.com/img/443c/ef5f/2c32d6f28e6923d590e9c7a89b1297f7?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YRAPfGMAraFZ-OHjmGqoRq2VHob5-gVOc~5XqszGyD7ojvrCcd1rfEezOyJHF~zH31sIWLX8K2hl4vVX6v8790Njp8IzCFTFRuXBgk7D4JfMK7qmunIDtXbvCqDDI3fqJ9IKUJII7QhewYp0deHcVtA5ojpglkvtKrEJNxpBG7XS-yHDQnU4VwRsvlZ22ukEGnTIZQGQfW8EYeBt4pJ-ndoOE7SF1whowQ7puDNAoaR7juV5ieswu~VNPVy~2ENAUzS3~9Gb~wMrLOGHeOtSVKSCOaJ~McH-xPEQLZJeJmPU6LJDNz6SlkBFhWd-FePKlxQxbnYYsqul7aIcF-InFw__",
    image2: "https://s3-alpha-sig.figma.com/img/3c8e/a705/dfc44b8035ebd10cd5adaafc9278179e?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pyLebWXPZh-e0qL2d9NJQvoqoGd8OqN5mBbFdf8Q2ogjvoNWFSbBMdc-8yeYEUh42hWbTqbjtCPzbF-SxLEnn7zsuY699eaYoMDlbt2Q9RyxorR5B-8gSD4yapj6lMlMHntHmd~326d2ffF3a433N7gRljq~D5QjO~0ak9OcZ82rvZwG09EjlmUDBtxjhbRq5ISLauVccoP-5d8u3Y393FszsphpirCJ8tfjSUZj4o-MLH-pFHA-oPq~LAmj5HkE6TdP9RJ0DcPswvZcfPuwCy9KZTTFmpFGzMmBslCrwPBWGIOERx0MQ~rjOlrwyan7WX0VXZYjY2gOn1eWSip~vg__",
    image3: "https://s3-alpha-sig.figma.com/img/6155/4c82/d6a52e0a511f5d3e3a3ff6bbfcfafb76?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JCwoHE631eJvc-LBvf55U6fAgsqvpzqmbkC9eNY2c7KxX6BQlrayNyVNLMQCQr03VvsVpMVRawMr8wI2BPxpIu6P~OmbYSR08BZ7OUEMQiyC7nl6v2kls~F~8wFeipNt-p9pMi0QDu5lt~t-ZfKum7nB6DKkUoXbJN8ff4yG5wjLp0jjoPM53b~LYZ4QALbiDVR1Sxj6Km~ez17kNKw1XFF1M74UinxEYiYNGhRJpN~oWpGOWO8OGapOPyizoSJ0CExtSR6M5IikA0DPsWgRvtUpv~XEqhBaCjOwy2BqELZpYyM5PiyIdgBACH2q4ugtVcAjb5DG-X8I3uPvOJKr-g__",
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