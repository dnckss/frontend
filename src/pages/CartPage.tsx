import React, { useState, useEffect } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartItemProps {
  item: CartItem;
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
  theme: any;
}

const CartItemComponent: React.FC<CartItemProps> = ({ item, onRemove, onUpdateQuantity, theme }) => {
  return (
    <div style={{ 
      border: `1px solid ${theme.border}`, 
      padding: '20px', 
      margin: '15px 0',
      borderRadius: '8px',
      backgroundColor: theme.bg,
      boxShadow: theme.shadow
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h3 style={{ color: theme.text, marginBottom: '5px' }}>{item.name}</h3>
          <p style={{ color: theme.primary, fontSize: '18px', fontWeight: 'bold', margin: '0' }}>
            {item.price.toLocaleString()}원
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
              style={{
                padding: '5px 10px',
                backgroundColor: theme.secondary,
                color: 'white',
                border: 'none',
                borderRadius: '3px',
                cursor: 'pointer'
              }}
            >
              -
            </button>
            <span style={{ fontSize: '16px', fontWeight: 'bold', minWidth: '20px', textAlign: 'center', color: theme.text }}>
              {item.quantity}
            </span>
            <button
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              style={{
                padding: '5px 10px',
                backgroundColor: theme.secondary,
                color: 'white',
                border: 'none',
                borderRadius: '3px',
                cursor: 'pointer'
              }}
            >
              +
            </button>
          </div>
          <button 
            onClick={() => onRemove(item.id)}
            style={{
              padding: '8px 15px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            삭제
          </button>
        </div>
      </div>
    </div>
  );
};

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [newItem, setNewItem] = useState({ name: '', price: 0 });

  useEffect(() => {
    // 초기 장바구니 아이템
    setCartItems([
      { id: 1, name: '노트북', price: 1200000, quantity: 1 },
      { id: 2, name: '마우스', price: 50000, quantity: 2 }
    ]);
  }, []);

  const addItem = () => {
    if (newItem.name && newItem.price > 0) {
      const item: CartItem = {
        id: Date.now(),
        name: newItem.name,
        price: newItem.price,
        quantity: 1
      };
      setCartItems([...cartItems, item]);
      setNewItem({ name: '', price: 0 });
    }
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity } : item
    ));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const theme = {
    bg: 'white',
    cardBg: '#f9f9f9',
    text: '#333333',
    textSecondary: '#666666',
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    border: '#ddd',
    inputBg: 'white',
    shadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', color: theme.text, marginBottom: '30px' }}>장바구니</h1>
      
      <div style={{ 
        marginBottom: '30px',
        padding: '20px',
        backgroundColor: theme.bg,
        borderRadius: '8px',
        boxShadow: theme.shadow,
        border: `1px solid ${theme.border}`
      }}>
        <h2 style={{ color: theme.text, marginBottom: '15px' }}>상품 추가</h2>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="상품명"
            value={newItem.name}
            onChange={(e) => setNewItem({...newItem, name: e.target.value})}
            style={{
              padding: '10px',
              border: `1px solid ${theme.border}`,
              borderRadius: '5px',
              fontSize: '16px',
              flex: '1',
              backgroundColor: theme.inputBg,
              color: theme.text
            }}
          />
          <input
            type="number"
            placeholder="가격"
            value={newItem.price || ''}
            onChange={(e) => setNewItem({...newItem, price: Number(e.target.value)})}
            style={{
              padding: '10px',
              border: `1px solid ${theme.border}`,
              borderRadius: '5px',
              fontSize: '16px',
              width: '120px',
              backgroundColor: theme.inputBg,
              color: theme.text
            }}
          />
          <button 
            onClick={addItem}
            style={{
              padding: '10px 20px',
              backgroundColor: theme.success,
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold'
            }}
          >
            추가
          </button>
        </div>
      </div>

      <div>
        <h2 style={{ color: theme.text, marginBottom: '20px' }}>장바구니 목록 ({cartItems.length}개)</h2>
        {cartItems.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '40px',
            backgroundColor: theme.bg,
            borderRadius: '8px',
            color: theme.textSecondary,
            border: `1px solid ${theme.border}`
          }}>
            장바구니가 비어있습니다.
          </div>
        ) : (
          <>
            {cartItems.map(item => (
              <CartItemComponent
                key={item.id}
                item={item}
                onRemove={removeItem}
                onUpdateQuantity={updateQuantity}
                theme={theme}
              />
            ))}
            <div style={{
              marginTop: '30px',
              padding: '20px',
              backgroundColor: '#e7f3ff',
              borderRadius: '8px',
              textAlign: 'center',
              border: '1px solid #b3d9ff'
            }}>
              <h3 style={{ color: theme.text, marginBottom: '10px' }}>총 금액</h3>
              <p style={{ 
                fontSize: '24px', 
                fontWeight: 'bold', 
                color: theme.primary,
                margin: '0'
              }}>
                {totalPrice.toLocaleString()}원
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;