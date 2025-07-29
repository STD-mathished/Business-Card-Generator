
export default function Card ({name, avatar, bio, onDelete}) {
    
    return (
        <div className="bg-white rounded-xl shadow-md p-4 text-center w-64 transform transition-transform duration-300 hover:scale-105">
        <img
            src={avatar}
            alt="Profile picture"
            class="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
        />

        <h3 className="text-xl font-semibold mb-1">{name}</h3>

        <p className="text-gray-600 text-sm mb-4">
            {bio}
        </p>

        <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            onClick={onDelete}
        >
            Delete
        </button>
        </div>


    );
}