import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, ExternalLink, Calendar, Tag } from 'lucide-react';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  year: string;
  client: string;
  image: string;
  details: string;
  tags: string[];
}

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [filter, setFilter] = useState('all');
  const [ref, inView] = useInView({ threshold: 0.1 });

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: '宠物零食包装设计',
      category: '包装设计',
      description: '为高端宠物零食品牌设计的现代包装系统',
      year: '2024',
      client: 'PetLux',
      image: '/images/portfolio/pet-food-1.jpg',
      details: '这个项目为高端宠物零食品牌打造了一套完整的包装设计系统。我们采用了现代简约的设计语言，结合温暖的色彩和可爱的宠物元素，创造出既高端又充满亲和力的品牌形象。',
      tags: ['包装设计', '品牌识别', '宠物用品']
    },
    {
      id: 2,
      title: '椰子水品牌设计',
      category: '品牌策划',
      description: '清新自然的椰子水品牌全案设计',
      year: '2024',
      client: 'CocoFresh',
      image: '/images/portfolio/coconut-water-1.jpg',
      details: '为天然椰子水品牌制定了完整的品牌策略和视觉设计。从品牌名称、logo设计到包装系统，都体现了热带风情和健康生活理念。使用清新的蓝绿色系和简洁的图形元素，打造出了具有强烈识别度的品牌形象。',
      tags: ['品牌策划', '视觉识别', '包装设计']
    },
    {
      id: 3,
      title: '数字平台界面设计',
      category: '数字平台设计',
      description: '现代化的电商平台界面设计',
      year: '2024',
      client: 'TechStart',
      image: '/images/portfolio/digital-platform-1.png',
      details: '为创新科技公司设计的现代化数字平台界面。采用了前卫的设计语言和灵活的交互方式，提升用户体验和品牌在线影响力。设计中融入了大胆的色彩搭配和动态效果，体现了科技又不失人性化的品牌特色。',
      tags: ['界面设计', '用户体验', '交互设计']
    },
    {
      id: 4,
      title: '展台设计方案',
      category: '展台设计',
      description: '创意展台空间设计方案',
      year: '2024',
      client: 'ExpoMax',
      image: '/images/portfolio/exhibition-1.jpg',
      details: '为大型展览会设计的创意展台空间。设计理念融合了现代美学和功能性，通过合理的空间布局和光线设计，打造出令人印象深刻的展示空间。每个细节都经过精心设计，旨在完美展示品牌形象和产品魅力。',
      tags: ['空间设计', '展览设计', '视觉传达']
    },
    {
      id: 5,
      title: '高端零食包装',
      category: '包装设计',
      description: '豪华零食品牌包装设计',
      year: '2024',
      client: 'LuxSnack',
      image: '/images/portfolio/snack-packaging-1.webp',
      details: '为高端零食品牌打造的豪华包装设计。采用了精美的金属质感和优雅的字体设计，体现了产品的高品质和专业性。包装设计不仅美观，还充分考虑了产品的保鲜和便捷性，为消费者提供完美的使用体验。',
      tags: ['包装设计', '奢侈品', '产品设计']
    },
    {
      id: 6,
      title: '品牌识别系统',
      category: '品牌策划',
      description: '全套品牌视觉识别系统设计',
      year: '2024',
      client: 'BrandNew',
      image: '/images/portfolio/brand-identity-1.jpg',
      details: '为新兴品牌打造的完整视觉识别系统。从 logo 设计到应用规范，涵盖了品牌视觉传达的所有层面。设计风格现代而具有记忆点，色彩搭配大胆而和谐，为品牌在竞争激烈的市场中建立独特的形象和强烈的识别度。',
      tags: ['品牌识别', 'Logo设计', '视觉系统']
    }
  ];

  const categories = ['all', '品牌策划', '包装设计', '展台设计', '数字平台设计'];
  const categoryNames = {
    'all': '全部',
    '品牌策划': '品牌策划',
    '包装设计': '包装设计',
    '展台设计': '展台设计',
    '数字平台设计': '数字平台设计'
  };

  const filteredItems = filter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="pt-24 pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            作品
            <span className="text-accent ml-2">
              展示
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            探索我们为各个新消费品品牌打造的独特设计作品，
            从包装设计到数字平台，每一个项目都体现了我们的创意和专业水准
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-accent text-black shadow-lg'
                  : 'bg-white/5 text-gray-300 border border-gray-600 hover:border-accent hover:text-white'
              }`}
            >
              {categoryNames[category as keyof typeof categoryNames]}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                exit={{ opacity: 0, y: -20 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                whileHover={{ 
                  y: -8,
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
                onClick={() => setSelectedItem(item)}
                style={{ willChange: 'transform' }}
                className="portfolio-item group cursor-pointer relative elegant-card rounded-2xl overflow-hidden border border-gray-700 hover:border-accent/50 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-accent font-medium">{item.category}</span>
                    <span className="text-sm text-gray-400">{item.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    className="bg-accent/20 backdrop-blur-sm rounded-full p-3 border border-accent/50"
                  >
                    <ExternalLink className="w-6 h-6 text-accent" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-xl text-gray-400">暂无相关作品</p>
          </motion.div>
        )}
      </div>

      {/* Portfolio Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-elegant-gradient rounded-2xl border border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 backdrop-blur-sm rounded-full p-2 text-white hover:bg-black/70 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image */}
              <div className="aspect-video overflow-hidden rounded-t-2xl">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent/20 text-accent border border-accent/30">
                    {selectedItem.category}
                  </span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {selectedItem.year}
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-white mb-4">{selectedItem.title}</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <h3 className="text-sm font-semibold text-accent mb-2">客户</h3>
                    <p className="text-white">{selectedItem.client}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-accent mb-2">类别</h3>
                    <p className="text-white">{selectedItem.category}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-accent mb-2">年份</h3>
                    <p className="text-white">{selectedItem.year}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3">项目描述</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedItem.details}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">标签</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-white/5 text-gray-300 border border-gray-600"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Portfolio;