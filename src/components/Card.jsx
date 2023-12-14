/* eslint-disable react/prop-types */
const Card = ({ item, key }) => {
  return (
    <div
      key={key}
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 p-2"
    >
      <div>
       <img className="h-64 md:h-auto object-contain" src={item.image_url} alt="" />
       </div>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl tracking-tight text-gray-900">
          <span className="font-bold">{item.name} - </span> {item.tagline}
        </h5>
        <p className="mb-3 font-normal text-gray-700">
          {item.description.length > 80 ? item.description.slice(0,80)+ '...' : item.description}
        </p>
        <h4 className="mb-1 text-gray-800">Best food pairings</h4>
        <ul className="text-sm list-disc pl-6 text-gray-700">
            {item.food_pairing.map(item => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default Card;
