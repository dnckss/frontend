import React, { useState } from 'react';


const LoginPage: React.FC = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert('로그인 시도!');
  };

  const theme = {
    bg: 'white',
    text: '#333333',
    textSecondary: '#666666',
    primary: '#007bff',
    success: '#28a745',
    border: '#ddd',
    inputBg: 'white',
    shadow: '0 4px 6px rgba(0,0,0,0.1)'
  };

  return (
    <div style={{ maxWidth: '450px', margin: '0 auto' }}>
      <div style={{
        backgroundColor: theme.bg,
        padding: '40px',
        borderRadius: '12px',
        boxShadow: theme.shadow,
        border: `1px solid ${theme.border}`
      }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          
          <h1 style={{ 
            color: theme.text, 
            fontSize: '28px',
            fontWeight: 'bold',
            margin: '0'
          }}>
            로그인
          </h1>
          <p style={{ color: theme.textSecondary, marginTop: '8px' }}>
            계정에 로그인하여 서비스를 이용하세요
          </p>
        </div>
        
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px', 
              color: theme.text,
              fontWeight: '500'
            }}>
              이메일
            </label>
            <div style={{ position: 'relative' }}>
             
              
              <input
                type="email"
                placeholder="이메일을 입력하세요"
                value={loginData.email}
                onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                style={{
                  width: '100%',
                  padding: '12px 12px 12px 45px',
                  border: `2px solid ${theme.border}`,
                  borderRadius: '8px',
                  fontSize: '16px',
                  backgroundColor: theme.inputBg,
                  color: theme.text,
                  outline: 'none',
                  transition: 'border-color 0.2s'
                }}
                onFocus={(e) => e.target.style.borderColor = theme.primary}
                onBlur={(e) => e.target.style.borderColor = theme.border}
                required
              />
            </div>
          </div>

          <div>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px', 
              color: theme.text,
              fontWeight: '500'
            }}>
              비밀번호
            </label>
            <div style={{ position: 'relative' }}>
             
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="비밀번호를 입력하세요"
                value={loginData.password}
                onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                style={{
                  width: '100%',
                  padding: '12px 45px 12px 45px',
                  border: `2px solid ${theme.border}`,
                  borderRadius: '8px',
                  fontSize: '16px',
                  backgroundColor: theme.inputBg,
                  color: theme.text,
                  outline: 'none',
                  transition: 'border-color 0.2s'
                }}
                onFocus={(e) => e.target.style.borderColor = theme.primary}
                onBlur={(e) => e.target.style.borderColor = theme.border}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: theme.textSecondary
                }}
              >
                
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                style={{ marginRight: '8px' }}
              />
              <span style={{ color: theme.textSecondary, fontSize: '14px' }}>
                로그인 상태 유지
              </span>
            </label>
            <a 
              href="#" 
              style={{ 
                color: theme.primary, 
                textDecoration: 'none', 
                fontSize: '14px' 
              }}
            >
              비밀번호 찾기
            </a>
          </div>

          <button 
            type="submit"
            style={{
              width: '100%',
              padding: '15px',
              backgroundColor: theme.success,
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: 'pointer',
              marginTop: '10px',
              transition: 'background-color 0.2s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#218838'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = theme.success}
          >
           
            로그인
          </button>
        </form>

        <div style={{ 
          textAlign: 'center', 
          marginTop: '25px',
          paddingTop: '20px',
          borderTop: `1px solid ${theme.border}`
        }}>
          <p style={{ color: theme.textSecondary, fontSize: '14px' }}>
            계정이 없으신가요?{' '}
            <a 
              href="/member" 
              style={{ 
                color: theme.primary, 
                textDecoration: 'none',
                fontWeight: '500'
              }}
            >
              회원가입
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;