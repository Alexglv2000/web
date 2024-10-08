'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { MessageCircle, Facebook, Instagram, Music, Bot, MessageSquare } from 'lucide-react'
import LoadingPage from './loading-page'

const teamMembers = [
  { name: 'Alex', role: 'Programador y Product Owner', image: '/imagenes_miembros/Alex.jpg?height=200&width=200' },
  { name: 'Andrea', role: 'Diseñadora y programadora', image: '/imagenes_miembros/andrea.jpg?height=200&width=200' },
  { name: 'Sandra', role: 'Diseñadora y Programadora Móvil/Web', image: '/imagenes_miembros/sandra.jpg?height=200&width=200' },
]

const products = [
  {
    type: 'Tipos de Páginas',
    items: [
      {
        name: 'Short Page',
        description: 'Perfecta para presentar tu idea de forma concisa y atractiva. Ideal para pequeñas empresas. presentaciones breves de un blog o negocio.',
        price: '$5,000 a $9,000',
        image: '/shortpage.webp?height=300&width=400'
      },
      {
        name: 'Normal Page',
        description: 'Una página web completa con múltiples secciones. Perfecta para pequeñas empresas o medianas cuenta con multiples secciones de informacion.',
        price: '$10,000 a $15,000',
        image: '/normal page.webp?height=300&width=400'
      },
      {
        name: 'E-commerce',
        description: 'Tienda online completa con catálogo de productos, carrito de compras y pasarela de pago. Impulsa tu negocio en el mundo digital, perfecto para productos digitales o fisicos , menus de restaurant,negocios etc.',
        price: 'desde $20,000',
        image: '/e-comerce.webp?height=300&width=400'
      },
      {
        name: 'Custom Page',
        description: 'Diseño y funcionalidades a medida para proyectos únicos. Tu imaginación es el límite.',
        price: 'precio a consultar',
        image: '/custom.jpeg?height=300&width=400'
      }
    ]
  },
  {
    type: 'Software',
    items: [
      {
        name: 'App Móvil',
        description: 'Lleva tu negocio al bolsillo de tus clientes con una app móvil personalizada para iOS y Android.',
        price: 'precio a consultar',
        image: '/movil.jpeg?height=300&width=400'
      },
      {
        name: 'Software de Gestión',
        description: 'Optimiza los procesos de tu empresa con un software de gestión a medida. Aumenta la eficiencia y productividad.',
        price: 'precio a consultar',
        image: '/gestion.jpeg?height=300&width=400'
      },
      {
        name: 'Inteligencia Artificial',
        description: 'Implementa soluciones de IA para automatizar tareas, analizar datos y tomar decisiones inteligentes.',
        price: 'precio a consultar',
        image: '/ia.jpeg?height=300&width=400'
      }
    ]
  }
]

export default function MainPage() {
  const [isLoading, setIsLoading] = useState(true)
  const [showChat, setShowChat] = useState(false)
  const [chatMessage, setChatMessage] = useState("")
  const [showRobotMessage, setShowRobotMessage] = useState(false)
  const [isBlinking, setIsBlinking] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  
  useEffect(() => {
    // Intervalo para el parpadeo con duración aleatoria
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200); // Duración del parpadeo (200ms)
    }, Math.random() * 2000 + 2000); // Intervalo aleatorio entre 2 y 4 segundos

    return () => clearInterval(blinkInterval); // Limpiar intervalo al desmontar
  }, []);


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 5000)

    const robotTimer = setTimeout(() => {
      setShowRobotMessage(true)
    }, 10000)

    return () => {
      clearTimeout(timer)
      clearTimeout(robotTimer)
    }
  }, [])

  const toggleChat = () => {
    setShowChat(prev => !prev)
    if (!showChat) {
      setChatMessage("¡Hola! soy la INTELIGENCIA ARTIFICIAL de Programing Designed ¿En qué puedo ayudarte hoy?")
    }
  }



  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/527713322206?text=${encodedMessage}`, '_blank')
  }

  const toggleMenu = () => setIsMenuOpen(prev => !prev); // Función para alternar el menú en móvil

  
  if (isLoading) {
    return <LoadingPage />
  }


  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-gray-100 relative">
      <div className="stars"></div>
      <div className="twinkling"></div>
      <header className="py-6 px-4 bg-black bg-opacity-50 backdrop-blur-md sticky top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt=""
              width={60}
              height={60}
              className="mr-2"
            />
            <motion.h1 
              className="text-4xl font-bold text-[#ff00ff] animate-glow"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Programing Designed
            </motion.h1>
          </div>

          {/* Menú en Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <ul className="flex flex-row space-x-4">
              {['Servicios', 'Productos', 'Equipo', 'Sobre Nosotros'].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.5 }}
                >
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`} 
                    className="hover:text-[#ff00ff] transition-colors text-lg font-semibold"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Icono de Menú en Móvil */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-white">
              <div className="w-6 h-6 space-y-2">
                <div className={`bg-white w-full h-1 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <div className={`bg-white w-full h-1 transition-all ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                <div className={`bg-white w-full h-1 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </nav>
        {/* Menú en Móvil */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -10 }} 
              transition={{ duration: 0.3 }}
              className="absolute left-0 top-0 w-full h-screen bg-black bg-opacity-90 text-white p-4 flex flex-col justify-center items-center"
            >
              <ul className="space-y-4 text-center">
                {['Servicios', 'Productos', 'Equipo', 'Sobre Nosotros'].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.5 }}
                  >
                    <a 
                      href={`#${item.toLowerCase().replace(' ', '-')}`} 
                      className="hover:text-[#ff00ff] transition-colors text-lg font-semibold"
                      onClick={() => setIsMenuOpen(false)} // Cerrar el menú al hacer clic
                    >
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
      <section id="hero" className="h-screen flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff00ff] via-[#00ffff] to-[#ff00ff] opacity-20 animate-gradient-x"></div>
            <div className="absolute inset-0 bg-[url('/cyber-grid.svg')] opacity-10"></div>
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              className="mb-8 relative w-200 h-200"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
      <div className="flex flex-col items-center justify-center relative w-full h-full">
  <div className="relative w-200 h-200">
    <Image
      src="/cat.png"
      alt="cat"
      width={200}
      height={200}
      className={`transition-opacity duration-0 ${
        isBlinking ? 'opacity-0' : 'opacity-100'
      }`}
    />
    <Image
      src="/cat2.png"
      alt="cat blinking"
      width={200}
      height={200}
      className={`absolute top-0 left-0 transition-opacity duration-0 ${
        isBlinking ? 'opacity-100' : 'opacity-0'
      }`}
    />
  </div>

  <h2 className="text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] via-[#00ffff] to-[#ff00ff] animate-text-gradient relative inline-block mt-4">
    Diseño Web del Futuro
    <span className="absolute -inset-1 bg-gradient-to-r from-[#ff00ff] via-[#00ffff] to-[#ff00ff] opacity-50 blur"></span>
  </h2>
</div>
            </motion.div>
            <motion.p 
              className="text-3xl mb-8 text-[#00ffff] font-bold animate-pulse"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Creamos experiencias web únicas y futuristas
            </motion.p>
            <motion.button 
              className="bg-[#ff00ff] text-black px-8 py-4 rounded-full hover:bg-[#00ffff] transition-colors text-xl font-bold shadow-neon relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openWhatsApp("Hola, estoy interesado en iniciar mi viaje digital con Programing Designed.")}
            >
              <span className="relative z-10">Inicia tu viaje digital</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#ff00ff] to-[#00ffff] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </motion.button>
          </div>
        </section>

        <section id="servicios" className="py-20 bg-black bg-opacity-50 backdrop-blur-md">
          <div className="container mx-auto px-4">
            <h3 className="text-4xl font-bold mb-12 text-center text-[#00ffff] animate-glow">Nuestros Servicios</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Diseño Web Futurista', color: '#ff00ff', icon: '🌐' },
                { title: 'Desarrollo Frontend Avanzado', color: '#00ffff', icon: '💻' },
                { title: 'Optimización SEO Cuántica', color: '#ff00ff', icon: '🚀' },
                { title: 'Automatización de WhatsApp', color: '#00ffff', icon: <MessageCircle className="w-8 h-8" /> },
                { title: 'Marketing en Redes Sociales', color: '#ff00ff', icon: (
                  <div className="flex">
                    <Facebook className="w-8 h-8 mr-2" />
                    <Instagram className="w-8 h-8" />
                  </div>
                ) },
                { title: 'Videos Promocionales TikTok', color: '#00ffff', icon: <Music className="w-8 h-8" /> }
              ].map((service, index) => (
                <motion.div 
                  key={index}
                  className={`bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-[${service.color}] shadow-neon`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05, boxShadow: `0 0 20px ${service.color}` }}
                >
                  <div className={`text-4xl mb-4 text-[${service.color}]`}>{service.icon}</div>
                  <h4 className={`text-xl font-bold mb-2 text-[${service.color}]`}>{service.title}</h4>
                  <p className="text-gray-300">
                    {service.title === 'Automatización de WhatsApp' && 'Optimiza tu comunicación con clientes mediante mensajes automáticos inteligentes en WhatsApp.'}
                    {service.title === 'Marketing en Redes Sociales' && 'Potencia tus ventas con estrategias avanzadas de contenido en Facebook e Instagram.'}
                    {service.title === 'Videos Promocionales TikTok' && 'Crea contenido viral y atractivo para TikTok que impulse tu marca al siguiente nivel.'}
                    {!['Automatización de WhatsApp', 'Marketing en Redes Sociales', 'Videos Promocionales TikTok'].includes(service.title) && 'Implementamos tecnologías de vanguardia para crear experiencias que desafían los límites de lo posible.'}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="productos" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff00ff] via-[#00ffff] to-[#ff00ff] opacity-20 animate-gradient-y"></div>
            <div className="absolute inset-0 bg-[url('/cyber-grid.svg')] opacity-10"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h3 className="text-4xl font-bold mb-12 text-center text-[#ff00ff] animate-glow">Nuestros Productos</h3>
            {products.map((category, categoryIndex) => (
              <div key={category.type} className="mb-16">
                <h4 className="text-3xl font-bold mb-8 text-[#00ffff]">{category.type}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.name}
                      className="bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden shadow-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: (categoryIndex * 0.2) + (itemIndex * 0.1) }}
                      whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 0, 255, 0.5)' }}
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h5 className="text-xl font-bold mb-2 text-[#00ffff]">{item.name}</h5>
                        <p className="text-gray-300 mb-4">{item.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-[#ff00ff] font-bold">{item.price}</span>
                          <motion.button 
                            className="bg-[#00ffff] text-black px-4 py-2 rounded-full hover:bg-[#ff00ff] transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => openWhatsApp(`Hola, estoy interesado en el producto ${item.name}. ¿Podrían darme más información?`)}
                          >
                            Ver más
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="equipo" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff00ff] via-[#00ffff] to-[#ff00ff] opacity-20 animate-gradient-y"></div>
            <div className="absolute inset-0 bg-[url('/cyber-grid.svg')] opacity-10"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h3 className="text-4xl font-bold mb-12 text-center text-[#ff00ff] animate-glow">Nuestro Equipo</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-[#00ffff] shadow-neon">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h4 className="text-2xl font-bold text-[#ff00ff]">{member.name}</h4>
                  <p className="text-[#00ffff]">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre-nosotros" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff00ff] via-[#00ffff] to-[#ff00ff] opacity-20 animate-gradient-y"></div>
            <div className="absolute inset-0 bg-[url('/cyber-grid.svg')] opacity-10"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h3 className="text-4xl font-bold mb-8 text-center text-[#ff00ff] animate-glow">Sobre Nosotros</h3>
            <motion.p 
              className="text-center max-w-2xl mx-auto text-lg text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Somos un equipo de visionarios digitales, fusionando creatividad y tecnología para forjar el futuro de la web. 
              Nuestra misión es trascender los límites convencionales del diseño, ofreciendo experiencias inmersivas que catapultan tu presencia en línea hacia nuevas dimensiones.
            </motion.p>
          </div>
        </section>
      </main>

      <footer className="py-6 text-center bg-black bg-opacity-70 backdrop-blur-md">
        <p className="text-[#00ffff] animate-pulse">&copy; 2024 Programing Designed. Todos los derechos reservados en este y otros universos.</p>
      </footer>

      {/* Bot Assistant */}
      <motion.div
        className="fixed bottom-4 right-4 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.button
          onClick={toggleChat}
          className="bg-[#ff00ff] text-black p-3 rounded-full shadow-neon hover:bg-[#00ffff] transition-colors relative"
          animate={{
            y: [0, -10, 0],
            boxShadow: [
              '0 0 10px #ff00ff',
              '0 0 20px #ff00ff',
              '0 0 10px #ff00ff'
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <Bot className="h-8 w-8" />
          {showRobotMessage && (
            <motion.div
              initial={{ opacity: 0, scale: 0, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="absolute bottom-full right-0 mb-2 bg-white text-black p-2 rounded-lg shadow-lg text-sm whitespace-nowrap"
            >
              ¿Necesitas ayuda?
            </motion.div>
          )}
        </motion.button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            className="fixed bottom-20 right-4 w-80 bg-gray-900 border border-[#ff00ff] rounded-lg shadow-neon p-4 z-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-[#ff00ff] rounded-full flex items-center justify-center mr-3">
                <Bot className="h-6 w-6 text-black" />
              </div>
              <h4 className="text-[#00ffff] font-bold">CyberAssist</h4>
            </div>
            <p className="text-gray-300 mb-4">{chatMessage}</p>
            <div className="flex justify-between">
              <motion.button
                onClick={() => openWhatsApp("Hola, me gustaría hablar con un asesor de Programing Designed.")}
                className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-green-600 transition-colors flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </motion.button>
              <motion.button
                onClick={() => setChatMessage("¡Hola! Soy la IA de Programing Designed. ¿En qué puedo ayudarte?")}
                className="bg-[#ff00ff] text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-[#00ffff] transition-colors flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                IA Chat
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}