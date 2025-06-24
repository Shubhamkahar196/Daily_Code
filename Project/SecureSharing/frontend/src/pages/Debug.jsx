import { useAuth } from '../context/AuthContext';

const Debug = () => {
  const { isAuthenticated, user, loading, error } = useAuth();

  return (
    <div style={{ padding: '2rem', fontFamily: 'monospace' }}>
      <h2>Debug Information</h2>
      <div style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '4px' }}>
        <p><strong>isAuthenticated:</strong> {String(isAuthenticated)}</p>
        <p><strong>loading:</strong> {String(loading)}</p>
        <p><strong>error:</strong> {error || 'null'}</p>
        <p><strong>user:</strong> {user ? JSON.stringify(user, null, 2) : 'null'}</p>
        <p><strong>token in localStorage:</strong> {localStorage.getItem('token') ? 'exists' : 'null'}</p>
      </div>
    </div>
  );
};

export default Debug;
