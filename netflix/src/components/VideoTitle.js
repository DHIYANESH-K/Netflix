
const VideoTitle = (props) => {
    const {title,overview}=props;
  return (
    <div className="w-full h-screen pt-[16%] pl-28 absolute text-white bg-gradient-to-r from-black bg-opacity-10">
        <h1 className="mt-2 text-4xl font-bold">{title}</h1>
        <p className="w-1/4 my-10 text-justify">{overview}</p>
        <button className="bg-white text-black w-28 h-10 rounded-md text-lg hover:bg-opacity-80">Play</button>
        <button className="bg-gray-400 text-white w-28 h-10 ml-2 rounded-md text-lg bg-opacity-70">More Info</button>
    </div>
  )
}

export default VideoTitle;