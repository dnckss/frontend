import React, { useState } from 'react';


const MemberPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('비밀번호가 일치하지 않습니다!');
      return;
    }
    alert('회원가입 완료!');
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
  };

  const theme = {
    bg: 'white',
    text: '#333333',
    textSecondary: '#666666',
    primary: '#007bff',
    border: '#ddd',
    inputBg: 'white',
    shadow: '0 4px 6px rgba(0,0,0,0.1)'
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <div style={{
        backgroundColor: theme.bg,
        padding: '40px',
        borderRadius: '12px',
        boxShadow: theme.shadow,
        border: `1px solid ${theme.border}`
      }}>
        <h1 style={{ 
          textAlign: 'center', 
          color: theme.text, 
          marginBottom: '30px',
          fontSize: '28px',
          fontWeight: 'bold'
        }}>
          회원가입
        </h1>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px', 
              color: theme.text,
              fontWeight: '500'
            }}>
              이름
            </label>
            <div style={{ position: 'relative' }}>
              
              <input
                type="text"
                placeholder="이름을 입력하세요"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
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
              이메일
            </label>
            <div style={{ position: 'relative' }}>
              
              <input
                type="email"
                placeholder="이메일을 입력하세요"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
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
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
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

          <div>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px', 
              color: theme.text,
              fontWeight: '500'
            }}>
              비밀번호 확인
            </label>
            <div style={{ position: 'relative' }}>
             
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder="비밀번호를 다시 입력하세요"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
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
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
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

          <button 
            type="submit"
            style={{
              width: '100%',
              padding: '15px',
              backgroundColor: theme.primary,
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: 'pointer',
              marginTop: '10px',
              transition: 'background-color 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = theme.primary}
          >
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
};

export default MemberPage;