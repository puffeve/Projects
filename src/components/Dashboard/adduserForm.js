// src/components/AdminForm.js
import React, { useState } from 'react';
import { supabase } from 'supabaseClient.js';

const AdminForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    role: 'student',  // Default role
    permissions: {},  // Permissions can be a JSON object
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePermissionChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      permissions: {
        ...formData.permissions,
        [name]: checked,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, phone, role, permissions } = formData;

    // Sign up user in Supabase Auth
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (data) {
      // Store additional user data in `users` table
      const { error: insertError } = await supabase
        .from('users')
        .insert([{
          id: data.user.id,
          name,
          email,
          phone,
          role,
          permissions,
        }]);

      if (insertError) {
        console.error('Error adding user data:', insertError);
      } else {
        alert('User successfully added!');
      }
    } else {
      console.error('Error signing up:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleInputChange}
      />
      <select
        name="role"
        value={formData.role}
        onChange={handleInputChange}
      >
        <option value="admin">Admin</option>
        <option value="teacher">Teacher</option>
        <option value="student">Student</option>
      </select>
      {/* Example Permissions */}
      <div>
        <label>
          <input
            type="checkbox"
            name="canViewReports"
            checked={formData.permissions.canViewReports || false}
            onChange={handlePermissionChange}
          />
          Can View Reports
        </label>
        {/* Add more permissions as needed */}
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AdminForm;
