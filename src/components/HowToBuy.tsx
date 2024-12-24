export const HowToBuy = () => {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">HOW TO BUY SGODS?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="relative bg-gradient-to-b from-yellow-600 to-yellow-700 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold mb-4">1</div>
            <p>Visit the Official Website:</p>
            <p className="text-sm">https://solanagods.com/</p>
          </div>
          <div className="relative bg-gradient-to-b from-yellow-600 to-yellow-700 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold mb-4">2</div>
            <p>Connect Your Wallet</p>
          </div>
          <div className="relative bg-gradient-to-b from-yellow-600 to-yellow-700 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold mb-4">3</div>
            <p>Select SGODS Token</p>
          </div>
          <div className="relative bg-gradient-to-b from-yellow-600 to-yellow-700 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold mb-4">4</div>
            <p>Enter the Desired Amount</p>
          </div>
          <div className="relative bg-gradient-to-b from-yellow-600 to-yellow-700 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold mb-4">5</div>
            <p>Review and Confirm Transaction Details</p>
          </div>
        </div>
      </div>
    </section>
  );
};