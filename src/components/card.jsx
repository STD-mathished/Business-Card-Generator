export default function Card ({name, age, profession}) {
    
    return (

        <div className="w-28 h-28 bg-amber-400 rounded-3xl flex justify-center items-center gap-1 flex-col">
            <h1>{name}</h1>
            <p>{age} ans</p>
            <p>{profession}</p>
        </div>

    );
}