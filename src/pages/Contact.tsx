import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [ref, inView] = useInView({ threshold: 0.1 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 模拟表单提交
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('感谢您的咨询！我们会在24小时内回复您。');
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: '',
      });
      
      // 3秒后清除提示信息
      setTimeout(() => setSubmitMessage(''), 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: '邮箱联系',
      content: 'hello@offoffoffice.com',
      description: '我们会在24小时内回复您的邮件',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: '电话咨询',
      content: '+86 138 0013 8888',
      description: '工作日 9:00-18:00',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: '工作室地址',
      content: '上海市黄浦区创意园区',
      description: '欢迎预约参观我们的工作室',
    },
  ];

  const services = [
    '品牌策划',
    '包装设计',
    '展台设计',
    '数字平台设计',
    '其他咨询',
  ];

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
            联系
            <span className="text-accent ml-2">
              我们
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            准备开始您的品牌设计之旅？我们很乐意听到您的想法，
            并为您提供专业的设计解决方案。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-24">
              <h2 className="text-3xl font-bold text-white mb-8">
                <span className="text-accent">
                  GET IN
                </span>
                <br />
                TOUCH
              </h2>
              
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    className="group relative elegant-card rounded-2xl p-6 border border-gray-700 hover:border-accent/30 transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 p-3 bg-accent/10 rounded-xl border border-accent/20">
                        <div className="text-accent">{info.icon}</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                        <p className="text-accent font-medium mb-2">{info.content}</p>
                        <p className="text-gray-400 text-sm">{info.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Business Hours */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mt-8 bg-accent/5 rounded-2xl p-6 border border-accent/20"
              >
                <div className="flex items-center mb-4">
                  <Clock className="w-5 h-5 text-accent mr-2" />
                  <h3 className="text-lg font-semibold text-white">工作时间</h3>
                </div>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>周一至周五</span>
                    <span>9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>周六</span>
                    <span>10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>周日</span>
                    <span>休息</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            ref={ref}
            initial={{ x: 100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="elegant-card rounded-2xl p-8 border border-gray-700">
              <div className="flex items-center mb-8">
                <MessageSquare className="w-6 h-6 text-accent mr-3" />
                <h2 className="text-2xl font-bold text-white">发送消息</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      姓名 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300"
                      placeholder="请输入您的姓名"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      邮箱 *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300"
                      placeholder="请输入您的邮箱"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      公司名称
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300"
                      placeholder="请输入公司名称（可选）"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      需要的服务 *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300"
                    >
                      <option value="">请选择服务类型</option>
                      {services.map((service) => (
                        <option key={service} value={service} className="bg-black">
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    项目描述 *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all duration-300 resize-none"
                    placeholder="请详细描述您的项目需求、预算范围、时间要求等信息..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                      : 'bg-accent text-black hover:bg-accent-dark shadow-lg hover:shadow-accent-glow'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                      发送中...
                    </div>
                  ) : (
                    <>
                      发送消息
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </motion.button>

                {submitMessage && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-accent/10 border border-accent/30 rounded-lg text-accent text-center"
                  >
                    {submitMessage}
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-accent/5 rounded-2xl p-12 border border-accent/20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              让我们一起创造
              <span className="text-accent ml-2">
                非凡作品
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              无论是全新品牌的创建，还是现有品牌的升级，
              我们都有丰富的经验和创意为您提供专业服务。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@offoffoffice.com"
                className="inline-flex items-center px-8 py-3 text-lg font-medium text-black bg-accent rounded-full hover:bg-accent-dark transition-all duration-300 shadow-lg"
              >
                <Mail className="mr-2 w-5 h-5" />
                直接发邮件
              </a>
              <a
                href="tel:+8613800138888"
                className="inline-flex items-center px-8 py-3 text-lg font-medium text-gray-300 border border-gray-600 rounded-full hover:border-accent hover:text-white transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                电话咨询
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;