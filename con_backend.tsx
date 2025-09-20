import React, { useState, useEffect, createContext, useContext } from 'react';
import { 
  Menu, X, Shield, ArrowRight, BookOpen, Users, Award, Heart, Globe,
  Star, Clock, User, LogIn, UserPlus, Search, Filter, Play, TrendingUp,
  Instagram, Mail, Phone, MapPin, Leaf, Sprout, TreePine
} from 'lucide-react';

// Context para manejo de admin y autenticación
const AdminContext = createContext();
const AuthContext = createContext();

const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    return { isAdmin: false, setIsAdmin: () => {} };
  }
  return context;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    return { user: null, isLoggedIn: false, login: () => {}, logout: () => {} };
  }
  return context;
};

// Datos de cursos enfocados en educación transformadora
const courses = [
  {
    id: 1,
    title: "Inteligencia Emocional para Líderes Educativos",
    instructor: "María González",
    instructorAvatar: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=64&h=64&fit=crop&crop=face",
    category: "Desarrollo Socioemocional",
    price: 45000, // Precios más accesibles para educación
    rating: 4.9,
    students: 234,
    duration: "6 semanas",
    level: "Intermedio",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    description: "Desarrolla habilidades socioemocionales para liderar procesos educativos transformadores en tu comunidad.",
    lessons: 18,
    categoryColor: "bg-rose-100 text-rose-700"
  },
  {
    id: 2,
    title: "Mindfulness y Bienestar en el Aula",
    instructor: "Carlos Ruiz",
    instructorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
    category: "Bienestar Personal",
    price: 35000,
    rating: 4.8,
    students: 189,
    duration: "4 semanas",
    level: "Principiante",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    description: "Herramientas de mindfulness para crear espacios de bienestar y aprendizaje consciente.",
    lessons: 12,
    categoryColor: "bg-green-100 text-green-700"
  },
  {
    id: 3,
    title: "Educación Inclusiva y Diversidad Cultural",
    instructor: "Ana Martínez",
    instructorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
    category: "Inclusión y Diversidad",
    price: 42000,
    rating: 4.9,
    students: 167,
    duration: "8 semanas",
    level: "Intermedio",
    image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=300&fit=crop",
    description: "Estrategias para crear ambientes educativos verdaderamente inclusivos que celebren la diversidad.",
    lessons: 24,
    categoryColor: "bg-purple-100 text-purple-700"
  },
  {
    id: 4,
    title: "Metodologías Innovadoras para el Siglo XXI",
    instructor: "Roberto Silva",
    instructorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
    category: "Metodologías Innovadoras",
    price: 48000,
    rating: 4.7,
    students: 143,
    duration: "10 semanas",
    level: "Avanzado",
    image: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=400&h=300&fit=crop",
    description: "Implementa metodologías educativas innovadoras que preparen a los estudiantes para los desafíos futuros.",
    lessons: 30,
    categoryColor: "bg-blue-100 text-blue-700"
  },
  {
    id: 5,
    title: "Construcción de Comunidades Resilientes",
    instructor: "Laura Pérez",
    instructorAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=64&h=64&fit=crop&crop=face",
    category: "Comunidad Unida",
    price: 52000,
    rating: 4.8,
    students: 98,
    duration: "12 semanas",
    level: "Avanzado",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop",
    description: "Aprende a construir y fortalecer comunidades educativas resilientes y colaborativas.",
    lessons: 36,
    categoryColor: "bg-amber-100 text-amber-700"
  },
  {
    id: 6,
    title: "Certificación ATE: Educación Transformadora",
    instructor: "Dr. Miguel Torres",
    instructorAvatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=64&h=64&fit=crop&crop=face",
    category: "Certificación ATE",
    price: 75000,
    rating: 4.9,
    students: 87,
    duration: "16 semanas",
    level: "Certificación",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop",
    description: "Certificación oficial ATE en educación transformadora para agentes de cambio educativo.",
    lessons: 48,
    categoryColor: "bg-emerald-100 text-emerald-700"
  }
];

// Componente Header con enfoque educativo
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAdmin, setIsAdmin } = useAdmin();
  const { user, isLoggedIn, logout } = useAuth();
  const [activeSection, setActiveSection] = useState('inicio');

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-sm border-stone-200">
      <div className="container max-w-6xl mx-auto flex h-16 items-center justify-between px-4">
        <button onClick={() => scrollToSection('inicio')} className="flex items-center space-x-2 group">
          <div className="text-2xl group-hover:scale-110 transition-transform duration-200">🐜</div>
          <span className="font-bold text-xl text-stone-800">Con Tribu Ir</span>
        </button>
        
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('nosotros')}
            className={`text-sm font-medium transition-colors hover:text-stone-800 ${
              activeSection === 'nosotros' ? 'text-stone-800 border-b-2 border-amber-600 pb-1' : 'text-stone-600'
            }`}
          >
            Nosotros
          </button>
          <button 
            onClick={() => scrollToSection('cursos')}
            className={`text-sm font-medium transition-colors hover:text-stone-800 ${
              activeSection === 'cursos' ? 'text-stone-800 border-b-2 border-amber-600 pb-1' : 'text-stone-600'
            }`}
          >
            Cursos
          </button>
          <button 
            onClick={() => scrollToSection('contacto')}
            className={`text-sm font-medium transition-colors hover:text-stone-800 ${
              activeSection === 'contacto' ? 'text-stone-800 border-b-2 border-amber-600 pb-1' : 'text-stone-600'
            }`}
          >
            Contacto
          </button>
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <button
            className={`flex items-center gap-2 px-3 py-1.5 text-xs rounded-md border transition-colors ${
              isAdmin 
                ? 'bg-amber-100 text-amber-700 border-amber-300' 
                : 'border-stone-300 bg-white hover:bg-stone-50 text-stone-600'
            }`}
            onClick={() => setIsAdmin(!isAdmin)}
          >
            <Shield className="h-4 w-4" />
            {isAdmin ? "Admin ON" : "Admin OFF"}
          </button>
          
          {isLoggedIn ? (
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <img src={user?.avatar} alt={user?.name} className="w-8 h-8 rounded-full" />
                <span className="text-sm font-medium text-stone-700">{user?.name}</span>
              </div>
              <button 
                onClick={logout}
                className="px-3 py-1.5 text-sm text-red-600 hover:text-red-700 transition-colors"
              >
                Salir
              </button>
            </div>
          ) : (
            <>
              <button className="px-4 py-2 text-sm font-medium text-stone-600 hover:text-stone-800 transition-colors">
                Iniciar Sesión
              </button>
              <button className="px-4 py-2 text-sm font-medium bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
                Unirse
              </button>
            </>
          )}
        </div>
        
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white border-stone-200">
          <nav className="flex flex-col space-y-1 p-4">
            <button 
              onClick={() => scrollToSection('nosotros')}
              className="text-left py-2 text-sm font-medium text-stone-600 hover:text-stone-800"
            >
              Nosotros
            </button>
            <button 
              onClick={() => scrollToSection('cursos')}
              className="text-left py-2 text-sm font-medium text-stone-600 hover:text-stone-800"
            >
              Cursos
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="text-left py-2 text-sm font-medium text-stone-600 hover:text-stone-800"
            >
              Contacto
            </button>
            <div className="flex flex-col space-y-2 pt-4 border-t border-stone-200">
              <button
                className={`flex items-center gap-2 justify-center px-3 py-2 text-xs rounded-md border transition-colors ${
                  isAdmin 
                    ? 'bg-amber-100 text-amber-700 border-amber-300' 
                    : 'border-stone-300 bg-white hover:bg-stone-50'
                }`}
                onClick={() => setIsAdmin(!isAdmin)}
              >
                <Shield className="h-4 w-4" />
                {isAdmin ? "Admin ON" : "Admin OFF"}
              </button>
              {!isLoggedIn && (
                <>
                  <button className="px-4 py-2 text-sm font-medium text-stone-600 hover:text-stone-800 transition-colors">
                    Iniciar Sesión
                  </button>
                  <button className="px-4 py-2 text-sm font-medium bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
                    Unirse
                  </button>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

// Componente Hero Section enfocado en la misión educativa
function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-stone-50 to-green-50 py-20 lg:py-32">
      {/* Decoración natural */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-amber-200 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-stone-200 rounded-full blur-xl"></div>
      </div>
      
      <div className="relative container max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700">
                <Award className="mr-2 h-4 w-4" />
                Certificado ATE - Educación Transformadora
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight lg:text-6xl text-stone-800 leading-tight">
                Transforma el futuro con 
                <span className="block text-transparent bg-gradient-to-r from-amber-600 to-green-600 bg-clip-text">
                  educación consciente
                </span>
              </h1>
              
              <p className="text-xl text-stone-600 max-w-2xl leading-relaxed">
                Impulsa procesos educativos, socioemocionales y culturales que promuevan el bienestar, 
                la inclusión y el crecimiento personal a través de experiencias virtuales transformadoras.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('cursos').scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center bg-amber-600 text-white px-8 py-4 rounded-xl text-base font-medium hover:bg-amber-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Explorar Cursos
                <BookOpen className="ml-2 h-5 w-5" />
              </button>
              <button 
                onClick={() => document.getElementById('nosotros').scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center justify-center border-2 border-stone-300 text-stone-700 px-8 py-4 rounded-xl text-base font-medium hover:bg-stone-50 transition-all duration-200"
              >
                Conocer Nuestra Misión
                <Heart className="ml-2 h-5 w-5" />
              </button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-600">500+</div>
                <div className="text-sm text-stone-600">Educadores</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">50+</div>
                <div className="text-sm text-stone-600">Cursos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-stone-600">95%</div>
                <div className="text-sm text-stone-600">Transformación</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white border border-stone-200 rounded-2xl p-8 shadow-xl">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-amber-100 to-green-100 flex items-center justify-center">
                    <Globe className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-800">Educación Transformadora</h3>
                    <p className="text-sm text-stone-600">Certificación ATE</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-stone-600">Progreso de transformación</span>
                    <span className="text-sm font-medium text-amber-600">85%</span>
                  </div>
                  <div className="w-full bg-stone-100 rounded-full h-3">
                    <div className="bg-gradient-to-r from-amber-500 to-green-500 h-3 rounded-full w-[85%]"></div>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-4">
                  <Users className="h-4 w-4 text-stone-500" />
                  <span className="text-sm text-stone-600">Únete a nuestra comunidad educativa</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Sección Nosotros - Primera posición
function AboutSection() {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm font-medium text-stone-600 mb-6">
            <Heart className="mr-2 h-4 w-4" />
            Nuestra Historia
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-stone-800 mb-6">
            Quiénes Somos
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Somos una organización comprometida con la transformación educativa y social, 
            trabajando como hormigas para construir comunidades más conscientes y resilientes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&h=400&fit=crop" 
              alt="Comunidad educativa"
              className="rounded-2xl shadow-xl"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-stone-800">@ong.contribuir</h3>
            <p className="text-stone-600 leading-relaxed">
              Con Tribu Ir nace desde la necesidad de crear espacios educativos que verdaderamente 
              transformen vidas. Como las hormigas, trabajamos en comunidad, cada uno aportando 
              sus fortalezas para construir algo más grande que nosotros mismos.
            </p>
            <p className="text-stone-600 leading-relaxed">
              Nuestro enfoque se centra en el desarrollo integral de las personas, 
              promoviendo el bienestar socioemocional, la inclusión y el crecimiento personal 
              a través de metodologías innovadoras y experiencias transformadoras.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Sección Misión - Separada y destacada
function MissionSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center rounded-full border border-amber-200 bg-amber-100 px-4 py-2 text-sm font-medium text-amber-700 mb-6">
            <Sprout className="mr-2 h-4 w-4" />
            Nuestra Razón de Ser
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-stone-800 mb-8">
            Misión
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white border border-amber-200 rounded-3xl p-12 shadow-xl">
            <div className="text-center">
              <div className="text-6xl mb-8">🌱</div>
              <p className="text-xl md:text-2xl text-stone-700 leading-relaxed font-medium">
                Impulsar procesos educativos, socioemocionales y culturales que promuevan el 
                <span className="text-amber-600 font-semibold"> bienestar, la inclusión y el crecimiento personal y colectivo</span>, 
                a través de experiencias en establecimientos, programas, cursos, diplomados y formaciones 
                <span className="text-green-600 font-semibold"> accesibles y de calidad</span>, 
                que dejen huella en las personas y en sus comunidades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Sección Visión - Separada y destacada  
function VisionSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center rounded-full border border-green-200 bg-green-100 px-4 py-2 text-sm font-medium text-green-700 mb-6">
            <TreePine className="mr-2 h-4 w-4" />
            Hacia Dónde Vamos
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-stone-800 mb-8">
            Visión
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white border border-green-200 rounded-3xl p-12 shadow-xl">
            <div className="text-center">
              <div className="text-6xl mb-8">🌍</div>
              <p className="text-xl md:text-2xl text-stone-700 leading-relaxed font-medium">
                Ser un <span className="text-green-600 font-semibold">referente nacional e internacional</span> en 
                educación y transformación social, reconocidos por nuestro 
                <span className="text-amber-600 font-semibold"> compromiso humano, nuestro enfoque innovador</span> y 
                nuestra capacidad de construir <span className="text-green-600 font-semibold">comunidades más conscientes, 
                inclusivas y resilientes</span>, donde cada persona encuentre herramientas para desarrollar su 
                potencial y contribuir al bien común.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Componente CourseCard con enfoque educativo
function CourseCard({ course }) {
  const { isLoggedIn, login } = useAuth();
  const { isAdmin } = useAdmin();

  const handleEnrollCourse = () => {
    if (!isLoggedIn) {
      const shouldLogin = confirm('¿Deseas crear una cuenta para acceder a este curso transformador?');
      if (shouldLogin) {
        login();
      }
      return;
    }
    
    // Proceso educativo vs comercial
    const mentorShare = Math.round(course.price * 0.8); // 80% para el educador
    const platformShare = course.price - mentorShare; // 20% para mantener la plataforma
    
    alert(`🎓 ¡Excelente elección para tu crecimiento!\n\n` +
          `📚 Curso: ${course.title}\n` +
          `👨‍🏫 Educador: ${course.instructor}\n` +
          `💰 Inversión en tu educación: $${course.price.toLocaleString('es-CL')}\n\n` +
          `🌱 Al inscribirte apoyas:\n` +
          `• Al educador (80%): $${mentorShare.toLocaleString('es-CL')}\n` +
          `• A la plataforma educativa (20%): $${platformShare.toLocaleString('es-CL')}\n\n` +
          `✨ Tu transformación comienza aquí`);
  };

  return (
    <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="relative">
        <img 
          src={course.image} 
          alt={course.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className={`${course.categoryColor} px-3 py-1 rounded-full text-xs font-medium`}>
            {course.category}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur-sm text-stone-700 px-2 py-1 rounded-lg text-xs font-medium">
            {course.level}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-bold text-stone-800 mb-3 group-hover:text-amber-600 transition-colors leading-tight">
          {course.title}
        </h3>
        
        <div className="flex items-center mb-4">
          <img 
            src={course.instructorAvatar} 
            alt={course.instructor}
            className="w-8 h-8 rounded-full mr-3 border-2 border-stone-100"
          />
          <div className="flex-1">
            <span className="text-sm font-medium text-stone-700">{course.instructor}</span>
            <div className="flex items-center text-stone-500 text-xs">
              <BookOpen className="w-3 h-3 mr-1" />
              {course.lessons} lecciones • {course.duration}
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-amber-400 fill-current mr-1" />
            <span className="text-sm font-medium text-stone-700">{course.rating}</span>
          </div>
          <div className="flex items-center text-stone-500">
            <Users className="w-4 h-4 mr-1" />
            <span className="text-sm">{course.students} estudiantes</span>
          </div>
        </div>
        
        <p className="text-sm text-stone-600 mb-6 leading-relaxed">
          {course.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-stone-800">
              ${course.price.toLocaleString('es-CL')}
            </span>
            <span className="text-xs text-stone-500 bg-stone-100 px-2 py-1 rounded">
              Acceso de por vida
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            {isAdmin && (
              <button className="px-3 py-1 text-xs bg-amber-100 text-amber-700 rounded-lg hover:bg-amber-200 transition-colors">
                Editar
              </button>
            )}
            <button 
              onClick={handleEnrollCourse}
              className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-all duration-200 flex items-center text-sm font-medium shadow-md hover:shadow-lg"
            >
              Comenzar
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Componente CoursesGrid con enfoque educativo
function CoursesGrid() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  
  const categories = ["Todas", ...new Set(courses.map(course => course.category))];
  
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todas" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="cursos" className="py-20 bg-stone-50">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-600 mb-6">
            <BookOpen className="mr-2 h-4 w-4" />
            Formación Continua
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-stone-800 mb-6">
            Nuestros Cursos
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Programas diseñados para transformar tu práctica educativa y potenciar tu crecimiento personal. 
            Cada curso es una oportunidad de crear impacto positivo en tu comunidad.
          </p>
        </div>

        {/* Filtros de búsqueda */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-3 w-5 h-5 text-stone-400" />
            <input
              type="text"
              placeholder="Buscar cursos transformadores..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-stone-300 rounded-xl bg-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 text-stone-700"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-12">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-stone-700 mb-2">No encontramos cursos</h3>
            <p className="text-stone-500">Intenta con otros términos o explora todas las categorías</p>
          </div>
        )}

        {/* CTA para educadores */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-50 to-green-50 border border-stone-200 rounded-2xl p-8">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-stone-800 mb-4">
                ¿Eres educador y quieres compartir tu conocimiento?
              </h3>
              <p className="text-stone-600 mb-6 leading-relaxed">
                Únete a nuestra comunidad de educadores transformadores. Comparte tu experiencia 
                y ayuda a construir un mundo más consciente y resiliente.
              </p>
              <button className="bg-amber-600 text-white px-8 py-3 rounded-xl hover:bg-amber-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl">
                Convertirme en Educador
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Sección de Contacto
function ContactSection() {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-stone-200 bg-stone-50 px-4 py-2 text-sm font-medium text-stone-600 mb-6">
            <Mail className="mr-2 h-4 w-4" />
            Conectemos
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-stone-800 mb-6">
            Contacto
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
            ¿Tienes una pregunta, idea o quieres ser parte de nuestra comunidad educativa? 
            Nos encantaría escucharte.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Instagram className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-stone-800 mb-2">Síguenos</h3>
                <p className="text-stone-600">@ong.contribuir</p>
                <p className="text-sm text-stone-500 mt-1">Contenido educativo y transformador</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-stone-800 mb-2">Email</h3>
                <p className="text-stone-600">contacto@contribuir.org</p>
                <p className="text-sm text-stone-500 mt-1">Respuesta en 24 horas</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-stone-800 mb-2">Misión Global</h3>
                <p className="text-stone-600">Transformación educativa</p>
                <p className="text-sm text-stone-500 mt-1">Impacto local y global</p>
              </div>
            </div>
          </div>

          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-stone-800 mb-6">Envíanos un mensaje</h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg bg-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Tu email"
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg bg-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              <div>
                <textarea
                  placeholder="¿Cómo podemos ayudarte en tu proceso educativo?"
                  rows={4}
                  className="w-full px-4 py-3 border border-stone-300 rounded-lg bg-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Componente principal de la aplicación
function ConTribuIrApp() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Simulación de autenticación
  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      setIsLoggedIn(true);
    }
  }, []);

  const login = (userData = null) => {
    const mockUser = userData || {
      id: 1,
      name: "Educador Demo",
      email: "demo@contribuir.org",
      role: "student",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
    };
    setUser(mockUser);
    setIsLoggedIn(true);
    localStorage.setItem('user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('user');
  };

  return (
    <AdminContext.Provider value={{ isAdmin, setIsAdmin }}>
      <AuthContext.Provider value={{ user, isLoggedIn, login, logout }}>
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <HeroSection />
            <AboutSection />
            <MissionSection />
            <VisionSection />
            <CoursesGrid />
            <ContactSection />
            
            {/* Footer centrado y minimalista */}
            <footer className="py-12 bg-stone-100 border-t border-stone-200">
              <div className="container max-w-6xl mx-auto px-4 text-center">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <span className="text-3xl">🐜</span>
                  <span className="font-bold text-2xl text-stone-800">Con Tribu Ir</span>
                </div>
                
                <div className="flex items-center justify-center space-x-2 mb-6">
                  <Instagram className="w-5 h-5 text-pink-500" />
                  <span className="text-stone-600 font-medium">@ong.contribuir</span>
                </div>
                
                <p className="text-stone-500 text-sm leading-relaxed max-w-md mx-auto">
                  Transformando el mundo a través de la educación consciente, 
                  una persona y una comunidad a la vez.
                </p>
                
                <div className="border-t border-stone-300 mt-8 pt-6">
                  <p className="text-stone-400 text-xs">
                    © 2024 Con Tribu Ir • Organización para la Transformación Educativa
                  </p>
                </div>
              </div>
            </footer>
          </main>
        </div>
      </AuthContext.Provider>
    </AdminContext.Provider>
  );
}

export default ConTribuIrApp;
