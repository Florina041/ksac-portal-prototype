import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ role = "student" }) {
  const menus = {
    student: [
      { name: 'Dashboard', path: '/dashboard' },
      { name: 'Certificates', path: '/certificates' }
    ],
    admin: [
      { name: 'Manage Societies', path: '/managesocieties' },
      { name: 'Approve Requests', path: '/approverequests' }
    ]
  };

  return (
    <aside style={{ width: '200px', background: '#eee', padding: '1rem', height: '100vh' }}>
      {menus[role].map((menu, index) => (
        <div key={index} style={{ marginBottom: '12px' }}>
          <Link 
            to={menu.path} 
            style={{ 
              textDecoration: 'none', 
              color: '#333', 
              padding: '8px 12px', 
              display: 'block', 
              borderRadius: '5px',
              backgroundColor: '#fff',
              boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
            }}
          >
            {menu.name}
          </Link>
        </div>
      ))}
    </aside>
  );
}

export default Sidebar;