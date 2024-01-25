
import Landing from "./components/Landing"



export default function Home() {
  return (
    <section className="bg-blue-00 flex min-h-screen overflow-x-hidden flex-col items-center justify-between ">

      <div className="h-screen container w-full pt-20 md:pt-0">
        <Landing />
      </div>

      <div className="h-screen bg-green-400 w-full">
        <h1 className=' text-2xl font-bold'>
          div 2
        </h1>
      </div>

      <div className="h-screen bg-yellow-400 w-full">
        <h1 className='text-2xl font-bold'>
          div 3
        </h1>
      </div>

    </section>
  )
}
