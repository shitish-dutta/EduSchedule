import { motion } from 'motion/react';
import { 
  Code, 
  Palette, 
  Smartphone, 
  Search, 
  ShoppingCart, 
  BarChart3,
  Globe,
  Zap
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites and web applications built with the latest technologies for optimal performance and user experience.',
      gradient: 'from-blue-500 to-cyan-500',
      delay: 0.1
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that provide seamless user experiences across all devices.',
      gradient: 'from-purple-500 to-pink-500',
      delay: 0.2
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that engage users and drive conversions through thoughtful user experience.',
      gradient: 'from-green-500 to-emerald-500',
      delay: 0.3
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Comprehensive SEO strategies to improve your search rankings and drive organic traffic to your website.',
      gradient: 'from-orange-500 to-red-500',
      delay: 0.4
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Solutions',
      description: 'Complete e-commerce platforms with secure payment processing and inventory management systems.',
      gradient: 'from-indigo-500 to-purple-500',
      delay: 0.5
    },
    {
      icon: BarChart3,
      title: 'Digital Marketing',
      description: 'Data-driven marketing campaigns that increase brand awareness and generate qualified leads.',
      gradient: 'from-pink-500 to-rose-500',
      delay: 0.6
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-2 mb-4"
          >
            <Zap className="w-6 h-6 text-purple-600" />
            <span className="text-purple-600 font-medium">Our Services</span>
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Digital Solutions for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Modern Businesses
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            We offer a comprehensive range of digital services designed to help your 
            business grow and succeed in today's competitive landscape.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: service.delay }}
              viewport={{ once: true }}
            >
              <Card className="h-full group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="relative mb-4">
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center relative`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                      
                      {/* Glow effect */}
                      <motion.div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 blur-xl`}
                        whileHover={{ opacity: 0.4 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover Arrow */}
                  <motion.div
                    className="mt-6 flex items-center text-purple-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    Learn More
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.div>
                  </motion.div>
                </CardContent>

                {/* Card Border Gradient */}
                <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none`} />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-white rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: Math.random() * 2
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="relative z-10">
              <Globe className="w-16 h-16 mx-auto mb-6 opacity-80" />
              <h3 className="text-3xl font-bold mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Let's discuss your project and create something amazing together. 
                Get a free consultation and see how we can help.
              </p>
              <motion.button
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Free Consultation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}