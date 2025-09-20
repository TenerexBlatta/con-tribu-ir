# 🚀 Setup Completo para Plataforma Tribu

# 1. Crear proyecto Next.js
npx create-next-app@latest tribu-platform --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

cd tribu-platform

# 2. Instalar dependencias necesarias
npm install @prisma/client prisma
npm install next-auth @auth/prisma-adapter
npm install bcryptjs
npm install @types/bcryptjs
npm install react-hook-form @hookform/resolvers
npm install zod
npm install lucide-react
npm install @headlessui/react @heroicons/react
npm install clsx class-variance-authority
npm install react-hot-toast

# 3. Dependencias para Flow (pagos chilenos)
npm install axios
npm install crypto-js
npm install @types/crypto-js

# 4. Inicializar Prisma
npx prisma init

# 5. Configurar variables de entorno (.env.local)
echo "# Base de datos
DATABASE_URL=\"postgresql://username:password@localhost:5432/tribu_db\"

# NextAuth
NEXTAUTH_URL=\"http://localhost:3000\"
NEXTAUTH_SECRET=\"tu-secret-key-super-seguro\"

# Flow (Pagos Chile)
FLOW_API_KEY=\"tu-api-key-flow\"
FLOW_SECRET_KEY=\"tu-secret-key-flow\"
FLOW_SANDBOX=\"true\"

# Cloudinary (para imágenes/videos)
CLOUDINARY_URL=\"cloudinary://your-cloudinary-url\"

# URL base
NEXT_PUBLIC_URL=\"http://localhost:3000\"" > .env.local

# 6. Crear estructura de carpetas
mkdir -p src/components/ui
mkdir -p src/components/landing
mkdir -p src/components/courses
mkdir -p src/components/dashboard
mkdir -p src/components/payment
mkdir -p src/lib
mkdir -p src/types
mkdir -p src/app/api/auth
mkdir -p src/app/api/courses
mkdir -p src/app/api/payments
mkdir -p src/app/api/users
mkdir -p src/app/(auth)/login
mkdir -p src/app/(auth)/register
mkdir -p src/app/dashboard/mentor
mkdir -p src/app/dashboard/student
mkdir -p src/app/courses

echo "✅ Proyecto configurado correctamente!"
echo "📝 Próximos pasos:"
echo "1. Configurar tu base de datos en .env.local"
echo "2. Ejecutar: npx prisma db push"
echo "3. Ejecutar: npm run dev"
