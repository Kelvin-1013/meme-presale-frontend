export const Roadmap = () => {
  return (
    <section className="py-16 bg-black relative min-h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ 
          backgroundImage: `url("/lovable-uploads/0a61bc87-3fbf-4dbc-837e-12f9fc29bb39.png")`,
          backgroundBlendMode: 'overlay'
        }}
      />
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-yellow-500">ROADMAP</h2>
        
        <div className="flex flex-col items-center">
          <div className="relative flex items-center mb-20">
            <div className="w-1/2 pr-12 text-right">
              <h3 className="text-3xl font-bold text-yellow-500 mb-4">Cosmic Dominion</h3>
              <ul className="list-none space-y-2 text-white">
                <li>• Launch of Merchandise and Collectibles</li>
                <li>• Community Governance Implementation</li>
              </ul>
            </div>
            <div className="w-12 h-12 rounded-full bg-yellow-600 flex items-center justify-center text-black font-bold text-xl z-10">
              6
            </div>
            <div className="w-1/2 pl-12"></div>
          </div>

          <div className="w-1 h-20 bg-yellow-600"></div>

          <div className="relative flex items-center">
            <div className="w-1/2 pr-12"></div>
            <div className="w-12 h-12 rounded-full bg-yellow-600 flex items-center justify-center text-black font-bold text-xl z-10">
              7
            </div>
            <div className="w-1/2 pl-12">
              <h3 className="text-3xl font-bold text-yellow-500 mb-4">Eternal Evolution</h3>
              <ul className="list-none space-y-2 text-white">
                <li>• Continuous Development and Updates</li>
                <li>• Exploration of Metaverse Opportunities</li>
                <li>• Expansion to Other Blockchains</li>
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <img 
              src="/lovable-uploads/3925887f-1e18-4d52-9638-96efe4b8f087.png" 
              alt="SGODS Logo" 
              className="w-24 h-24"
            />
          </div>
        </div>
      </div>
    </section>
  );
};