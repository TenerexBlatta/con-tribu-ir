import React, { useState } from 'react';
import { Play, Users, BookOpen, DollarSign, Star, ArrowRight, Menu, X } from 'lucide-react';

const TribuLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Datos de ejemplo para cursos
  const featuredCourses = [
    {
      id: 1,
      title: "Marketing Digital para Principiantes",
      mentor: "Ana García",
      price: 49990,
      rating: 4.8,
      students: 234,
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      duration: "8 horas"
    },
    {
      id: 2,
      title: "Desarrollo Web con React",
      mentor: "Carlos Mendez",
      price: 79990,
      rating: 4.9,
      students: 156,
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      duration: "12 horas"
    },
    {
      id: 3,
      title: "Diseño UX/UI Profesional",
      mentor: "María Silva",
      price: 64990,
      rating: 4.7,
      students: 189,
      thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
      duration: "10 horas"
    }
  ];

  const stats = [
    { icon: Users, value: "1,200+", label: "Estudiantes" },
    { icon: BookOpen, value: "50+", label: "Cursos" },
    { icon: Star, value: "4.9", label: "Rating Promedio" },
    { icon: DollarSign, value: "$2M+", label: "Pagado a Mentores" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-indigo-600">Tribu</h1>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#cursos" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                  Cursos
                </a>
                <a href="#como-funciona" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                  Cómo funciona
                </a>
                <a href="#mentores" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                  Ser Mentor
                </a>
              </div>
            </nav>

            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <button className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                  Iniciar Sesión
                </button>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">
                  Registrarse
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-indigo-600 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#cursos" className="text-gray-700 hover:text-indigo-600 block px-3 py-2 text-base font-medium">
                Cursos
              </a>
              <a href="#como-funciona" className="text-gray-700 hover:text-indigo-600 block px-3 py-2 text-base font-medium">
                Cómo funciona
              </a>
              <a href="#mentores" className="text-gray-700 hover:text-indigo-600 block px-3 py-2 text-base font-medium">
                Ser Mentor
              </a>
              <div className="flex flex-col space-y-2 px-3 py-2">
                <button className="text-gray-700 hover:text-indigo-600 text-left">
                  Iniciar Sesión
                </button>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">
                  Registrarse
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Aprende de los mejores
              <span className="block text-yellow-300">mentores</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100 max-w-3xl mx-auto">
              Únete a nuestra comunidad de aprendizaje donde mentores expertos 
              comparten su conocimiento y tú puedes generar ingresos enseñando.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
                Explorar Cursos
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">
                Ser Mentor
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="como-funciona" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Cómo funciona Tribu?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un ecosistema simple y efectivo para aprender y enseñar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                1. Explora y Elige
              </h3>
              <p className="text-gray-600">
                Navega por nuestra biblioteca de cursos impartidos por mentores expertos.
                Encuentra el conocimiento que necesitas.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Play className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                2. Aprende y Practica
              </h3>
              <p className="text-gray-600">
                Accede a contenido de calidad, participa en ejercicios prácticos
                y recibe feedback de tu mentor.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                3. Certifícate y Crece
              </h3>
              <p className="text-gray-600">
                Obtén certificaciones que validen tu aprendizaje y abre nuevas
                oportunidades profesionales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section id="cursos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cursos Destacados
            </h2>
            <p className="text-xl text-gray-600">
              Aprende de mentores con experiencia real en la industria
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={course.thumbnail} 
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                    {course.duration}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4">por {course.mentor}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-gray-600 ml-1">{course.rating}</span>
                      <span className="text-gray-400 ml-2">({course.students} estudiantes)</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-indigo-600">
                      ${course.price.toLocaleString('es-CL')}
                    </div>
                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center">
                      Ver Curso
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-white text-indigo-600 border-2 border-indigo-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-600 hover:text-white transition-colors">
              Ver Todos los Cursos
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section for Mentors */}
      <section id="mentores" className="py-20 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Tienes conocimientos que compartir?
          </h2>
          <p className="text-xl mb-8 text-indigo-100 max-w-2xl mx-auto">
            Únete a nuestra comunidad de mentores y genera ingresos enseñando lo que sabes.
            Te quedas con el 70% de cada venta.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">70%</div>
              <div className="text-indigo-200">Para el mentor</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">$2M+</div>
              <div className="text-indigo-200">Pagado a mentores</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-indigo-200">Soporte técnico</div>
            </div>
          </div>

          <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Convertirme en Mentor
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Tribu</h3>
              <p className="text-gray-400">
                La plataforma de aprendizaje que conecta mentores y estudiantes en Chile.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Estudiantes</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Explorar Cursos</a></li>
                <li><a href="#" className="hover:text-white">Certificaciones</a></li>
                <li><a href="#" className="hover:text-white">Precios</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Mentores</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Crear Curso</a></li>
                <li><a href="#" className="hover:text-white">Dashboard</a></li>
                <li><a href="#" className="hover:text-white">Recursos</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Soporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Centro de Ayuda</a></li>
                <li><a href="#" className="hover:text-white">Contacto</a></li>
                <li><a href="#" className="hover:text-white">Términos</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Tribu. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TribuLanding;
