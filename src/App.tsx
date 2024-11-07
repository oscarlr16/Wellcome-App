const App = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-br from-indigo-50 to-white flex flex-col items-center justify-center">
      <main className="max-w-4xl w-full text-center space-y-8">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Bienvenido
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 mx-auto max-w-2xl">
          Nos alegra tenerte aquí. Estamos construyendo algo increíble.
        </p>
        
        <div className="space-x-4">
          <button className="px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200">
            Comenzar
          </button>
          <button className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
            Saber más
          </button>
        </div>
        
        <div className="mt-16 flex justify-center space-x-6">
          <a href="#" className="text-gray-500 hover:text-gray-700">Acerca de</a>
          <a href="#" className="text-gray-500 hover:text-gray-700">Contacto</a>
          <a href="#" className="text-gray-500 hover:text-gray-700">Blog</a>
        </div>
      </main>
    </div>
  );
};

export default App;