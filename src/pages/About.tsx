import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, Target, Lightbulb, Heart, Zap } from 'lucide-react';

const About = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3 });
  const [storyRef, storyInView] = useInView({ threshold: 0.3 });
  const [valuesRef, valuesInView] = useInView({ threshold: 0.3 });
  const [statsRef, statsInView] = useInView({ threshold: 0.3 });

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: '创新精神',
      description: '我们相信每个品牌都有其独特的故事，并通过创新的设计手法将其完美呈现',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: '精准定位',
      description: '深入理解目标受众，为品牌找到最适合的表达方式和传播策略',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: '情感连接',
      description: '设计不仅仅是视觉，更是情感的传递，我们致力于打造有温度的品牌体验',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: '高效执行',
      description: '从策略到落地，我们保证项目的高效执行和优质交付',
    },
  ];

  const stats = [
    { number: '50+', label: '成功项目', delay: 0.1 },
    { number: '30+', label: '合作客户', delay: 0.2 },
    { number: '3年', label: '行业经验', delay: 0.3 },
    { number: '100%', label: '客户满意度', delay: 0.4 },
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
        <div className="absolute inset-0 bg-[url('/images/founder-portrait.jpg')] bg-cover bg-center opacity-10" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={heroInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="text-white">关于</span>
                <br />
                <span className="text-accent">
                  OffOff Office
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                我们是一支专注于新消费品品牌设计的创意团队。
                以新锐大胆的设计理念和独特的视觉语言，
                为各类品牌打造令人难忘的设计作品。
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-gray-300">
                  <Award className="w-5 h-5 mr-2 text-accent" />
                  专业设计团队
                </div>
                <div className="flex items-center text-gray-300">
                  <Users className="w-5 h-5 mr-2 text-accent" />
                  丰富项目经验
                </div>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={heroInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src="/images/founder-portrait.jpg"
                  alt="创始人肖像"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-elegant border border-gray-700"
                />
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
                  className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full opacity-60 blur-xl"
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
                    delay: 1,
                  }}
                  className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/10 rounded-full opacity-40 blur-xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section ref={storyRef} className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={storyInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              我们的
              <span className="text-accent ml-2">故事</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={storyInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg prose-invert max-w-none"
          >
            <div className="elegant-card rounded-2xl p-8 border border-gray-700">
              <p className="text-gray-300 leading-relaxed mb-6">
                OffOff Office 成立于 2021 年，由一群热爱设计和品牌的创意人共同创立。
                我们观察到新消费时代的到来，越来越多的品牌需要突破传统设计框架，
                用更加大胆和创新的方式与消费者沟通。
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                从最初的宠物零食包装设计开始，到如今涵盖品牌策划、包装设计、
                展台设计和数字平台设计的全方位服务，我们始终坚持用设计的力量
                帮助品牌在竞争激烈的市场中脱颖而出。
              </p>
              <p className="text-gray-300 leading-relaxed">
                我们相信，真正的设计不仅仅是美学的堆叠，更是对品牌精神的深度理解
                和精准表达。每一个项目都是我们与客户共同创造的作品，
                融合了我们对美的追求和对商业成功的理解。
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={valuesInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              核心
              <span className="text-accent ml-2">价值观</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              指导我们工作的四大核心理念，也是我们与众不同的根本所在
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 100, opacity: 0 }}
                animate={valuesInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative elegant-card rounded-2xl p-8 border border-gray-700 hover:border-accent/30 transition-all duration-300 text-center"
              >
                <div className="inline-flex p-4 rounded-2xl bg-accent/10 mb-6 border border-accent/20">
                  <div className="text-accent">{value.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 relative">
        <div className="absolute inset-0 bg-accent/5" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={statsInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              数字
              <span className="text-accent ml-2">证明</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                animate={statsInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: stat.delay, type: 'spring' }}
                className="text-center"
              >
                <div className="elegant-card rounded-2xl p-8 border border-gray-700">
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;