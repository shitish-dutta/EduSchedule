import { motion } from 'motion/react';
import { 
  Calendar, 
  Users, 
  BookOpen, 
  Clock, 
  Target, 
  Brain,
  Settings,
  Zap
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function ServicesSection() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Optimization',
      description: 'Advanced algorithms automatically generate optimal timetables considering all constraints and preferences.',
      gradient: 'from-blue-500 to-cyan-500',
      delay: 0.1
    },
    {
      icon: Users,
      title: 'Multi-Department Support',
      description: 'Handle complex scheduling across multiple departments, faculties, and student batches simultaneously.',
      gradient: 'from-purple-500 to-pink-500',
      delay: 0.2
    },
    {
      icon: Calendar,
      title: 'Conflict Resolution',
      description: 'Automatically detect and resolve scheduling conflicts while maintaining resource optimization.',
      gradient: 'from-green-500 to-emerald-500',
      delay: 0.3
    },
    {
      icon: Clock,
      title: 'Real-Time Updates',
      description: 'Dynamic scheduling adjustments for last-minute changes, faculty leaves, and special events.',
      gradient: 'from-orange-500 to-red-500',
      delay: 0.4
    },
    {
      icon: Target,
      title: 'Resource Optimization',
      description: 'Maximize classroom utilization and minimize faculty workload while ensuring quality education.',
      gradient: 'from-indigo-500 to-purple-500',
      delay: 0.5
    },
    {
      icon: Settings,
      title: 'Flexible Configuration',
      description: 'Customize parameters for subjects, batches, rooms, and constraints to fit your institution\'s needs.',
      gradient: 'from-pink-500 to-rose-500',
      delay: 0.6
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"
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
            <Zap className="w-6 h-6 text-blue-600" />
            <span className="text-blue-600 font-medium">Platform Features</span>
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Intelligent Scheduling for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Modern Education
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Our comprehensive platform addresses all the challenges of academic scheduling 
            with intelligent automation and optimization designed specifically for higher education.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: feature.delay }}
              viewport={{ once: true }}
            >
              <Card className="h-full group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <div className="relative mb-4">
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center relative`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                      
                      {/* Glow effect */}
                      <motion.div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 blur-xl`}
                        whileHover={{ opacity: 0.4 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover Arrow */}
                  <motion.div
                    className="mt-6 flex items-center text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity"
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
                <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none`} />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Key Parameters Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white relative overflow-hidden">
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

            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <BookOpen className="w-16 h-16 mb-6 opacity-80" />
                <h3 className="text-3xl font-bold mb-4">
                  Comprehensive Parameter Management
                </h3>
                <p className="text-xl opacity-90 mb-8">
                  Configure every aspect of your scheduling process with our flexible parameter system.
                </p>
              </div>
              
              <div className="grid gap-4">
                {[
                  'Number of classrooms and laboratories',
                  'Student batches and enrollment data',
                  'Subject requirements and combinations',
                  'Faculty availability and constraints',
                  'Fixed slots and special classes',
                  'Multi-shift and department support'
                ].map((param, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-blue-100">{param}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}