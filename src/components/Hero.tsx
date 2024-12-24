export const Hero = () => {
  return (
    <section className="pt-24 min-h-screen flex flex-col items-center justify-center bg-black text-white text-center relative">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/6ff92ba8-db09-4bd6-9caa-ea901add814c.png')] bg-cover bg-center opacity-50" />
      <div className="relative z-10 container mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-8">
          Tap into Ancient Wisdom for<br />Modern Wealth
        </h1>
        <div className="bg-yellow-600/20 backdrop-blur-sm rounded-lg p-4 max-w-2xl mx-auto mb-8">
          <p className="text-xl select-all">BadPCDZyPLsyRVmSTkTWyyC9e3Q7YSMFk1XerJfLCS1X</p>
        </div>
        <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4 max-w-lg mx-auto">
          <div className="flex justify-between items-center">
            <span>Presale Token Sold: 90228278 SGODS</span>
            <div className="flex items-center space-x-2">
              <div className="h-2 w-48 bg-gray-700 rounded-full">
                <div className="h-full w-3/4 bg-yellow-500 rounded-full" />
              </div>
              <span>75%</span>
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-2">Accepted: BNB/ETH/MATIC/SOLANA/USDT</p>
        </div>
      </div>
    </section>
  );
};