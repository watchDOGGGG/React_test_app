import connectFarmer from '../assets/connect.svg' 


const ConnectFarmer = () => {
	return (
		<div className='flex flex-col items-center justify-center mt-32'>
			<img
				src={connectFarmer}
				alt={connectFarmer}
				className='h-80 w-80'
			/>
            <h1 className="text-5xl font-bold text-green-800">You're now connected to farmer</h1>
		</div>
	);
};

export default ConnectFarmer;
