export default function Container() {
    <style> {` 
        img {
            height: auto;
        }
    
    `}
    </style>
  return (
    <>
    <div className="flex w-full h-full ">
        <div className="flex flex-col w-1/5 mx-2 space-y-4"><img src="" alt="" /><img src="jpg" alt="" /><img src="jpg" alt="" /></div>
        <div className="flex flex-col w-1/5 mx-2"><img src="" alt="" /></div>
        <div className="flex flex-col w-1/5 mx-2"><img src="" alt="" /></div>
        <div className="flex flex-col w-1/5 mx-2"><img src="" alt="" /></div>
        <div className="flex flex-col w-1/5 mx-2"><img src="" alt="" /></div>
    </div>
    </>
  )
}
