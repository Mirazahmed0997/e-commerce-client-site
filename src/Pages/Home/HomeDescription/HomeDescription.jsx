import React from 'react';

const HomeDescription = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">Our Services</h2>
        
        <div className="flex flex-wrap justify-between gap-8">
          
          {/* Service 1 */}
          <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg w-full sm:w-1/2 lg:w-1/3">
            <div className="mb-6">
              <img
                src="https://png.pngtree.com/png-vector/20221221/ourmid/pngtree-fast-delivery-truck-icon-png-image_6529764.png"
                alt="Fast Delivery"
                className="w-16 h-16 object-contain mb-4"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Fast Delivery</h3>
            <p className="text-gray-600 mt-4">
              We ensure timely delivery to your doorstep with our fast and reliable shipping services.
            </p>
          </div>
          
          {/* Service 2 */}
          <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg w-full sm:w-1/2 lg:w-1/3">
            <div className="mb-6">
              <img
                src="https://www.revechat.com/wp-content/uploads/2022/02/Great-Customer-Support-jpg.webp"
                alt="Customer Support"
                className="w-16 h-16 object-contain mb-4"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">24/7 Customer Support</h3>
            <p className="text-gray-600 mt-4">
              Our customer support team is available 24/7 to assist you with any inquiries or issues.
            </p>
          </div>
          
          {/* Service 3 */}
          <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg w-full sm:w-1/2 lg:w-1/3">
            <div className="mb-6">
              <img
                src="https://i.pinimg.com/736x/73/c1/3b/73c13be33940ef97548863c982bcac99.jpg"
                alt="Secure Payments"
                className="w-16 h-16 object-contain mb-4"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Secure Payments</h3>
            <p className="text-gray-600 mt-4">
              We use the latest encryption technology to ensure your payment details are always secure.
            </p>
          </div>
          
          {/* Service 4 */}
          <div className="flex flex-col items-center text-center p-6 bg-white shadow-lg rounded-lg w-full sm:w-1/2 lg:w-1/3">
            <div className="mb-6">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/029/903/775/small_2x/easy-returns-sign-label-delivery-service-stock-illustration-vector.jpg"
                alt="Easy Returns"
                className="w-16 h-16 object-contain mb-4"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">Easy Returns</h3>
            <p className="text-gray-600 mt-4">
              If you're not satisfied with your order, we offer hassle-free returns within 30 days.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default HomeDescription;
