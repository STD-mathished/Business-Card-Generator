import { useState } from 'react'

// src/components/Form.jsx
export default function Form({ name, setName, avatar, setAvatar, bio, setBio, onSubmit }) {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
      <form onSubmit={onSubmit}>
        {/* Nom */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Image URL */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1" htmlFor="image">Image URL</label>
          <input
            type="text"
            id="image"
            name="image"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter image URL"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
          />
        </div>

        {/* Bio */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-1" htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            name="bio"
            rows="3"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write a short bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Add Profile
        </button>
      </form>
    </div>
  );
}
