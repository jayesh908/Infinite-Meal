import Itemlist from './Itemlist'

const Rescategory = ({ rescat,showItem ,setexpand}) => {
        const hanclick = ()=>{
                setexpand()
    }
    return (


        <div>
            {/*Accordion Header */}
            <div>
                <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
                    <div className='flex justify-between cursor-pointer' onClick={hanclick}>
                        <span className='font-bold text-xl'>
                            {rescat.title}({rescat.itemCards.length})
                        </span>
                        <span>🔽</span>
                    </div>
                    {showItem&&<Itemlist item={rescat.itemCards} />}
                </div>
                {/* Accordion Body */}

            </div>
        </div>

    )
}

export default Rescategory
