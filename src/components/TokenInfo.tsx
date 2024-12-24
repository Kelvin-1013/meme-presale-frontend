export const TokenInfo = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">SGODS Tokenomics</h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2">
            <img 
              src="/lovable-uploads/a764e87d-9faf-4a85-9acf-56d9e00b87ac.png" 
              alt="Tokenomics Chart" 
              className="w-full max-w-lg mx-auto"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-yellow-500">Token Details</h3>
              <div className="space-y-2">
                <p><span className="text-yellow-500">Token Address:</span> BadPCDZyPLsyRVmSTkTWyyC9e3Q7YSMFk1XerJfLCS1X</p>
                <p><span className="text-yellow-500">Token Name:</span> Solana Gods</p>
                <p><span className="text-yellow-500">Token Symbol:</span> SGODS</p>
                <p><span className="text-yellow-500">Blockchain:</span> Solana</p>
                <p><span className="text-yellow-500">Total Supply:</span> 900 Million</p>
                <p><span className="text-yellow-500">Price:</span> $0.0008 per SGODS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};