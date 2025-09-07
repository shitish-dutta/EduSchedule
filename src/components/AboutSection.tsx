import { motion } from 'motion/react';
import { 
  Users, 
  Award, 
  Clock, 
  Target, 
  Heart,
  Lightbulb,
  Shield,
  Rocket,
  GraduationCap,
  BookOpen
} from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Pioneering AI-driven solutions for complex scheduling challenges.',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Heart,
      title: 'Education First',
      description: 'Committed to enhancing the educational experience for all stakeholders.',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Providing dependable solutions that institutions can trust.',
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Rocket,
      title: 'Scalability',
      description: 'Growing with institutions from small colleges to large universities.',
      gradient: 'from-purple-500 to-violet-500'
    }
  ];

  const stats = [
    { number: '100+', label: 'Institutions Served', icon: Target },
    { number: '500K+', label: 'Students Impacted', icon: Users },
    { number: '5+', label: 'Years of Excellence', icon: Clock },
    { number: '95%', label: 'Customer Satisfaction', icon: Award }
  ];

  const benefits = [
    {
      title: 'NEP 2020 Compliance',
      description: 'Fully aligned with the New Education Policy for flexible and interdisciplinary education.',
      icon: BookOpen
    },
    {
      title: 'Multi-Campus Support',
      description: 'Seamless coordination across multiple campuses and departments.',
      icon: Users
    },
    {
      title: 'Real-Time Optimization',
      description: 'Dynamic adjustments for last-minute changes and emergencies.',
      icon: Clock
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
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
            <GraduationCap className="w-6 h-6 text-blue-600" />
            <span className="text-blue-600 font-medium">About Our Solution</span>
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Revolutionizing Academic{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Scheduling for the Future
            </span>
          </motion.h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Higher education institutions face unprecedented challenges in scheduling with 
                the introduction of multidisciplinary curricula, flexible learning paths, and 
                the need for optimal resource utilization under NEP 2020.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our intelligent timetable scheduling platform transforms the complex, manual 
                process into an automated, optimized system that maximizes classroom utilization, 
                minimizes conflicts, and ensures balanced workloads for faculty and students.
              </p>

              {/* Mission Statement */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To empower educational institutions with intelligent scheduling solutions that 
                  enhance learning outcomes, optimize resource utilization, and support the 
                  evolving needs of modern education.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-3xl blur-2xl"
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, -2, 0] 
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "easeInOut" 
                }}
              />
              
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1569653402334-2e98fbaa80ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjB0ZWNobm9sb2d5JTIwcGxhdGZvcm18ZW58MXx8fHwxNzU3MjM3MDQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Education technology platform"
                className="relative w-full rounded-3xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <Card key={index} className="text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <motion.div
                  className="text-3xl font-bold text-gray-900 mb-2"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Platform</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built specifically for the challenges of modern higher education scheduling.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <motion.div
                      className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${value.gradient} rounded-2xl flex items-center justify-center`}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <value.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full">
                {[...Array(15)].map((_, i) => (
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
                      duration: 4,
                      repeat: Infinity,
                      delay: Math.random() * 3
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">Future-Ready Education Scheduling</h3>
                <p className="text-xl opacity-90 max-w-2xl mx-auto">
                  Addressing the unique challenges of modern education with intelligent solutions.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">{benefit.title}</h4>
                    <p className="text-blue-100 leading-relaxed">{benefit.description}</p>
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