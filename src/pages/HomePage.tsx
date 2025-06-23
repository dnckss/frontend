import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

const HomePage: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const products: Product[] = [
    {
      id: 1,
      name: '노트북',
      price: 1200000,
      description: '게이밍 노트북'
    },
    {
      id: 2,
      name: '마우스',
      price: 50000,
      description: '게이밍 마우스'
    }
  ];

  const addToCart = (product: Product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (!existingItem) {
      setCartItems([...cartItems, product]);
    }
  };

  const theme = {
    bg: 'white',
    cardBg: '#f9f9f9',
    text: '#333333',
    textSecondary: '#666666',
    primary: '#007bff',
    success: '#28a745',
    border: '#ddd',
    shadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', color: theme.text, marginBottom: '30px' }}>메인 페이지</h1>
      
      <h2 style={{ textAlign: 'center', marginBottom: '30px', color: theme.text }}>추천 상품</h2>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '20px',
        marginBottom: '30px'
      }}>
        {products.map(product => (
          <div 
            key={product.id}
            style={{
              border: `1px solid ${theme.border}`,
              borderRadius: '8px',
              padding: '20px',
              backgroundColor: theme.cardBg,
              boxShadow: theme.shadow
            }}
          >
            <h3 style={{ color: theme.text, marginBottom: '10px' }}>{product.name}</h3>
            <p style={{ color: theme.textSecondary, marginBottom: '15px' }}>{product.description}</p>
            <p style={{ 
              fontSize: '20px', 
              fontWeight: 'bold', 
              color: theme.primary,
              marginBottom: '15px'
            }}>
              {product.price.toLocaleString()}원
            </p>
            <button
              onClick={() => addToCart(product)}
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: theme.success,
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold'
              }}
            >
              장바구니 추가
            </button>
          </div>
        ))}
      </div>

      {cartItems.length > 0 && (
        <div style={{
          backgroundColor: '#e7f3ff',
          padding: '20px',
          borderRadius: '8px',
          border: '1px solid #b3d9ff'
        }}>
          <h3 style={{ color: theme.text, marginBottom: '15px' }}>장바구니 미리보기</h3>
          {cartItems.map(item => (
            <div key={item.id} style={{ 
              padding: '10px',
              backgroundColor: theme.bg,
              marginBottom: '10px',
              borderRadius: '5px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{ color: theme.text }}>{item.name}</span>
              <span style={{ fontWeight: 'bold', color: theme.primary }}>
                {item.price.toLocaleString()}원
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;