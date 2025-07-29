export default function Form() {
    return (
<div class="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
  

  <form>

    <div class="mb-4">
      <label class="block text-gray-700 font-medium mb-1" for="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter name"
      />
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 font-medium mb-1" for="image">Image URL</label>
      <input
        type="text"
        id="image"
        name="image"
        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter image URL"
      />
    </div>

    <div class="mb-6">
      <label class="block text-gray-700 font-medium mb-1" for="bio">Bio</label>
      <textarea
        id="bio"
        name="bio"
        rows="3"
        class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Write a short bio"
      ></textarea>
    </div>

    <button
      type="submit"
      class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
    >
      Add Profile
    </button>
  </form>
</div>

    )
}