
export default function Card ({name, avatar, bio}) {
    
    return (
        <div class="bg-white rounded-xl shadow-md p-4 text-center w-64">
        <img
            src={avatar}
            alt="Profile picture"
            class="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
        />

        <h3 class="text-xl font-semibold mb-1">{name}</h3>

        <p class="text-gray-600 text-sm mb-4">
            {bio}
        </p>

        <button
            class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        >
            Delete
        </button>
        </div>


    );
}