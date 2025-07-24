import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Sparkles, Zap, Globe, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3 });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.3 });
  const [portfolioRef, portfolioInView] = useInView({ threshold: 0.3 });

  const services = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: '品牌策划',
      description: '从品牌定位到视觉识别，为新消费品牌打造独特的品牌个性',
      border: 'border-gray-600 hover:border-accent/50',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: '包装设计',
      description: '创新包装设计，让产品在货架上脱颖而出，吸引消费者目光',
      border: 'border-gray-600 hover:border-accent/50',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: '展台设计',
      description: '打造令人印象深刻的展台空间，完美展示品牌形象和产品魅力',
      border: 'border-gray-600 hover:border-accent/50',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: '数字平台设计',
      description: '现代化的数字平台设计，提升品牌在线影响力和用户体验',
      border: 'border-gray-600 hover:border-accent/50',
    },
  ];

  const portfolioItems = [
    {
      title: '宠物零食包装设计',
      category: '包装设计',
      image: '/images/portfolio/pet-food-1.jpg',
    },
    {
      title: '椰子水品牌设计',
      category: '品牌策划',
      image: '/images/portfolio/coconut-water-1.jpg',
    },
    {
      title: '数字平台界面设计',
      category: '数字平台设计',
      image: '/images/portfolio/digital-platform-1.png',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-16"
    >
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-black/50" />
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-10" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">
                新锐设计
              </span>
              <br />
              <span className="text-accent animate-accent">
                独树一帜
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              专注于新消费品品牌设计，我们用前卫的设计语言和大胆的创意
              为您的品牌注入独特的生命力
            </p>
            <Link to="/portfolio">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(216, 236, 43, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-black bg-accent rounded-full hover:bg-accent-dark transition-all duration-300 shadow-lg"
              >
                查看作品
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full opacity-60 blur-xl"
          />
          <motion.div
            animate={{
              y: [0, 30, 0],
              rotate: [0, -5, 5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2,
            }}
            className="absolute bottom-40 right-20 w-32 h-32 bg-white/10 rounded-full opacity-40 blur-xl"
          />
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={servicesInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              我们的
              <span className="text-accent ml-2">服务</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              四大核心业务板块，为新消费品牌提供全方位的设计解决方案
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ y: 60, opacity: 0 }}
                animate={servicesInView ? { y: 0, opacity: 1 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
                style={{ willChange: 'transform' }}
                className={`group relative elegant-card rounded-2xl p-8 border transition-all duration-300 ${service.border}`}
              >
                <div className="inline-flex p-3 rounded-xl bg-accent/10 mb-6 border border-accent/20">
                  <div className="text-accent">{service.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Portfolio */}
      <section ref={portfolioRef} className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={portfolioInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              精选
              <span className="text-accent ml-2">作品</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              探索我们为新消费品牌打造的独特设计作品
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 60, opacity: 0 }}
                animate={portfolioInView ? { y: 0, opacity: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                whileHover={{ 
                  y: -8,
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
                style={{ willChange: 'transform' }}
                className="group relative elegant-card rounded-2xl overflow-hidden border border-gray-700 hover:border-accent/30 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    style={{ transform: 'translateZ(0)' }}
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-accent font-medium">{item.category}</span>
                  <h3 className="text-xl font-bold text-white mt-2">{item.title}</h3>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/portfolio">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-3 text-lg font-medium text-white border border-gray-600 rounded-full hover:border-accent hover:bg-accent/10 transition-all duration-300"
              >
                查看更多作品
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-accent/5" />
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              准备开始您的
              <span className="text-accent ml-2">
                品牌之旅
              </span>
              ？
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              让我们一起创造令人难忘的品牌体验
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(216, 236, 43, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-10 py-4 text-lg font-semibold text-black bg-accent rounded-full hover:bg-accent-dark transition-all duration-300 shadow-lg"
              >
                联系我们
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;