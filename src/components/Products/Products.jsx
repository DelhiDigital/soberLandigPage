import "./Products.css"

const Products = () => {
  const products = [
    {
      name: "Sober Gin",
      description: "Crisp, botanical blend with juniper and citrus notes",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images1-MUIIpQfsh2F7YQ9qPePDJ4rwAlDTVm.webp",
      features: ["0.0% ABV", "Premium Botanicals", "Crisp Finish"],
    },
    {
      name: "Sober Whiskey",
      description: "Rich, complex flavors with oak and vanilla undertones",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image2.jpg-DW1z7WzL7Ne2sh4NlQkWdlMB6SuHza.jpeg",
      features: ["0.0% ABV", "Oak Aged", "Smooth Profile"],
    },
    {
      name: "Sober Collection",
      description: "Complete range of premium beverages for every occasion",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image3-OgYasKu40DDR20YyFz73js5GYZIyXZ.webp",
      features: ["Multiple Varieties", "Premium Quality", "Mindful Choice"],
    },
  ]

  return (
    <section id="products" className="products">
      <div className="products-container">
        <div className="products-header">
          <h2 style={{fontSize: "40px"}}>Our Collection</h2>
          <p className="products-subtitle">
            Discover our range of premium beverages, each crafted with care and attention to detail.
          </p>
        </div>

        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-image">
                <img src={product.image || "/placeholder.svg"} alt={product.name} />
                <div className="product-overlay">
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
              <div className="product-content">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-features">
                  {product.features.map((feature, idx) => (
                    <span key={idx} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
