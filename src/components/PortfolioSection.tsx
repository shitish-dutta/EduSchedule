import { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, BarChart3, Eye, Users } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Case Studies' },
    { id: 'university', label: 'Universities' },
    { id: 'college', label: 'Colleges' },
    { id: 'institute', label: 'Technical Institutes' },
    { id: 'multi', label: 'Multi-Campus' }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'Delhi University - 85% Efficiency Boost',
      description: 'Streamlined scheduling across 77 colleges with 95% conflict reduction and optimal resource utilization.',
      image: 'https://images.unsplash.com/photo-1569653402334-2e98fbaa80ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjB0ZWNobm9sb2d5JTIwcGxhdGZvcm18ZW58MXx8fHwxNzU3MjM3MDQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'university',
      metrics: ['2000+ Faculty', '50,000+ Students', '500+ Classrooms'],
      results: { efficiency: '85%', conflicts: '95%', satisfaction: '92%' },
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      id: 2,
      title: 'IIT Mumbai - Multi-Department Success',
      description: 'Integrated scheduling system for engineering departments with seamless lab and lecture coordination.',
      image: 'https://images.unsplash.com/photo-1538446760948-fa0d91427de7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2FtcHVzJTIwYWNhZGVtaWN8ZW58MXx8fHwxNTU3MjM3MDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'institute',
      metrics: ['15 Departments', '8,000+ Students', '200+ Labs'],
      results: { efficiency: '78%', conflicts: '88%', satisfaction: '89%' },
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'St. Xavier\'s College - Quick Implementation',
      description: 'Rapid deployment with immediate improvements in timetable quality and faculty satisfaction.',
      image: 'https://images.unsplash.com/photo-1724315069543-52ffaa592bcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2xhc3Nyb29tJTIwc2NoZWR1bGluZ3xlbnwxfHx8fDE3NTcyMzcwNDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'college',
      metrics: ['500+ Faculty', '12,000+ Students', '150+ Rooms'],
      results: { efficiency: '72%', conflicts: '82%', satisfaction: '86%' },
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      title: 'Anna University - State-wide Network',
      description: 'Coordinated scheduling across multiple affiliated colleges with centralized management.',
      image: 'https://images.unsplash.com/photo-1569653402334-2e98fbaa80ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjB0ZWNobm9sb2d5JTIwcGxhdGZvcm18ZW58MXx8fHwxNzU3MjM3MDQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'multi',
      metrics: ['150+ Colleges', '100,000+ Students', '5,000+ Faculty'],
      results: { efficiency: '68%', conflicts: '75%', satisfaction: '84%' },
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      title: 'BITS Pilani - Multi-Campus Integration',
      description: 'Unified scheduling system across Pilani, Goa, and Hyderabad campuses with resource sharing.',
      image: 'https://images.unsplash.com/photo-1538446760948-fa0d91427de7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2FtcHVzJTIwYWNhZGVtaWN8ZW58MXx8fHwxNTU3MjM3MDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'multi',
      metrics: ['3 Campuses', '15,000+ Students', '800+ Faculty'],
      results: { efficiency: '81%', conflicts: '91%', satisfaction: '90%' },
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      id: 6,
      title: 'Jadavpur University - Complex Optimization',
      description: 'Advanced scheduling for interdisciplinary programs with elective course management.',
      image: 'https://images.unsplash.com/photo-1724315069543-52ffaa592bcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2xhc3Nyb29tJTIwc2NoZWR1bGluZ3xlbnwxfHx8fDE3NTcyMzcwNDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'university',
      metrics: ['12 Faculties', '20,000+ Students', '300+ Electives'],
      results: { efficiency: '76%', conflicts: '87%', satisfaction: '88%' },
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  const filteredCaseStudies = activeFilter === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-2 mb-4"
          >
            <Eye className="w-6 h-6 text-blue-600" />
            <span className="text-blue-600 font-medium">Success Stories</span>
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Transforming Education{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Across Institutions
            </span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Discover how leading educational institutions have revolutionized their scheduling 
            processes and achieved remarkable improvements in efficiency and satisfaction.
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              onClick={() => setActiveFilter(category.id)}
              className={`transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                  : 'hover:bg-blue-50 hover:border-blue-300'
              }`}
            >
              {category.label}
            </Button>
          ))}
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCaseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      <motion.button
                        className="bg-white/90 backdrop-blur-sm text-gray-900 p-2 rounded-full hover:bg-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        className="bg-white/90 backdrop-blur-sm text-gray-900 p-2 rounded-full hover:bg-white transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <BarChart3 className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Results Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-700">
                        {study.results.efficiency} Efficiency
                      </span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {study.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {study.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">{study.results.efficiency}</div>
                      <div className="text-xs text-gray-500">Efficiency</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{study.results.conflicts}</div>
                      <div className="text-xs text-gray-500">Less Conflicts</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600">{study.results.satisfaction}</div>
                      <div className="text-xs text-gray-500">Satisfaction</div>
                    </div>
                  </div>

                  {/* Institution Metrics */}
                  <div className="flex flex-wrap gap-2">
                    {study.metrics.map((metric, metricIndex) => (
                      <Badge
                        key={metricIndex}
                        variant="secondary"
                        className="bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors text-xs"
                      >
                        {metric}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { number: '100+', label: 'Institutions Served', icon: Users },
            { number: '500K+', label: 'Students Benefited', icon: Users },
            { number: '25K+', label: 'Faculty Members', icon: Users },
            { number: '85%', label: 'Average Efficiency Gain', icon: BarChart3 }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <motion.div
                className="text-3xl font-bold text-gray-900 mb-2"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-l from-blue-100/50 to-transparent rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}