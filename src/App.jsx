
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
    background: '/src/assets/Hero.jpg'
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
      image: "/src/assets/sakarias-armchair.png",
      price: 389,
      icon: <HiStar />,
      rate: 4.8,
      colors: ["bg-gray-800", "bg-sky-600", "bg-blue-400"],
    },
    {
      id: 2,
      name: "Baltsar Chair",
      type: "Chair",
      image: "/src/assets/baltsar-chair.png",
      price: 299,
      icon: <HiStar />,
      rate: 4.8,
      colors: ["bg-gray-700", "bg-sky-500", "bg-green-800"],
    },
    {
      id: 3,
      name: "Santuy Chair ",
      type: "Sofa",
      image: "/src/assets/nyantuy-chair.png",
      price: 519,
      icon: <HiStar />,
      rate: 4.8,
      colors: ["bg-red-500", "bg-sky-500", "bg-green-500"],
    },
    {
      id: 4,
      name: "Relax Chair ",
      type: "Sofa",
      image: "/src/assets/anjay-chair.png",
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
    image: "/src/assets/experience.png",
    icon: <HiArrowRight />
  };

  const materials =
  {
    id: 1,
    title: "Materials",
    subtitle: "Very Serious Materials for Making Furniture",
    description: "Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price",
    image1: "/src/assets/materials-1.png",
    image2: "/src/assets/materials-2.png",
    image3: "/src/assets/materials-3.png",
    icon: <HiArrowRight />
  };

  const testimonials = [
    {
      id: 1,
      bgImage: "https://images.unsplash.com/photo-1742729118744-216a86a65560?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      image: 'https://images.unsplash.com/photo-1641288883869-c463bc6c2a58?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGF2YXRhcnxlbnwwfHwwfHx8Mg%3D%3D',
      name: "John Doe",
      job: "Designer",
      review: "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal",
      stars: <HiMiniStar />
    },
    {
      id: 2,
      bgImage: "https://plus.unsplash.com/premium_photo-1745482648087-94febea21bb5?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      image: 'https://images.unsplash.com/photo-1558898479-33c0057a5d12?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGF2YXRhcnxlbnwwfHwwfHx8Mg%3D%3D',
      name: "Jane Doe",
      job: "Ibu Rumah Tangga",
      review: "Makasih, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah",
      stars: <HiMiniStar />
    },
    {
      id: 3,
      bgImage: "https://images.unsplash.com/photo-1744819181935-edb1c6924d0b?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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