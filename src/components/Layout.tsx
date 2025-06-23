import React from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const theme = {
    bg: '#f8f9fa',
    navBg: 'white',
    text: '#333333',
    linkColor: '#007bff',
    border: '#dee2e6',
    shadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: theme.bg, color: theme.text }}>
      <nav style={{ 
        padding: '20px', 
        borderBottom: `2px solid ${theme.border}`,
        backgroundColor: theme.navBg,
        boxShadow: theme.shadow
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '30px' }}>
            <Link 
              to="/" 
              style={{ 
                textDecoration: 'none', 
                color: theme.linkColor, 
                fontWeight: 'bold',
                fontSize: '16px',
                padding: '8px 16px',
                borderRadius: '5px',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e7f3ff'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              메인
            </Link>
            <Link 
              to="/member" 
              style={{ 
                textDecoration: 'none', 
                color: theme.linkColor, 
                fontWeight: 'bold',
                fontSize: '16px',
                padding: '8px 16px',
                borderRadius: '5px',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e7f3ff'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              회원가입
            </Link>
            <Link 
              to="/login" 
              style={{ 
                textDecoration: 'none', 
                color: theme.linkColor, 
                fontWeight: 'bold',
                fontSize: '16px',
                padding: '8px 16px',
                borderRadius: '5px',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e7f3ff'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              로그인
            </Link>
            <Link 
              to="/cart"
              style={{ 
                textDecoration: 'none', 
                color: theme.linkColor, 
                fontWeight: 'bold',
                fontSize: '16px',
                padding: '8px 16px',
                borderRadius: '5px',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e7f3ff'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              장바구니
            </Link>
          </div>
        </div>
      </nav>
      <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;