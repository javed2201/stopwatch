import { useEffect, useRef, useState } from "react";


const StopWatch = () => {

    let [time, setTime] = useState({miliSecond: 0, second: 0, minute: 0, hour: 0})
    let intervalRef = useRef()


    function startTime() {    
            intervalRef.current = setInterval(()=>{
            setTime(prevTime=>{
                const updatedMiliSec = prevTime.miliSecond+1
                if(updatedMiliSec === 100){
                    const updatedSecond = prevTime.second+1
                    if(updatedSecond === 60){
                        const updatedMinute = prevTime.minute+1
                        if(updatedMinute === 60){
                            const updatedHour = prevTime.hour+1
                            return {...prevTime, miliSecond: 0, second: 0, minute: 0, hour: updatedHour}
                        }

                        return {...prevTime, miliSecond: 0, second: 0, minute: updatedMinute}
                    }
                    return {...prevTime, miliSecond: 0, second: updatedSecond}
                }
                return {...prevTime, miliSecond: updatedMiliSec}
            })


        }, 10)
    }

    function pauseTime() {
        clearInterval(intervalRef.current)
    }

    function resetTime() {
        clearInterval(intervalRef.current)
        setTime({miliSecond: 0, second: 0, minute: 0, hour: 0})
    }

    function formatTime(duration){
        return duration<10 ? `0${duration}` : duration
    }

  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
        <div className="text-center bg-gray-800 rounded-lg border-8 border-gray-300">
            <h1 className="text-3xl font-bold mb-2 text-gray-300 bg-gray-800 px-4 py-2 border-b-8 border-gray-400">STOPWATCH</h1>
            <div className="text-center bg-gray-900 p-12 pt-4 ">
            
                <div className="flex justify-center items-center gap-2 mb-6 text-green-500">
                <p id="hours" className="text-4xl text-left font-semibold w-10">{formatTime(time.hour)}</p>
                <p className="text-4xl font-semibold">:</p>
                <p id="minutes" className="text-4xl text-left font-semibold w-10">{formatTime(time.minute)}</p>
                <p className="text-4xl font-semibold">:</p>
                <p id="seconds" className="text-4xl text-left font-semibold w-10">{formatTime(time.second)}</p>
                <p className="text-4xl font-semibold">:</p>
                <p id="miliseconds" className="text-4xl text-left font-semibold w-10">{formatTime(time.miliSecond)}</p>
                </div>
            
                <div className="space-x-4">
                <button onClick={startTime} className="bg-green-500 text-white px-4 py-2 rounded">Start</button>
                <button onClick={pauseTime} className="bg-yellow-500 text-white px-4 py-2 rounded">Pause</button>
                <button onClick={resetTime} className="bg-red-500 text-white px-4 py-2 rounded">Reset</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StopWatch



// this didn't work

    // let [miliSecond, setMiliSecond] = useState(0)  // একাধিক ইউজস্টেট নিয়ে সেটইন্টারভালে কাজ করা সম্ভব হচ্ছেনা। একদিন নষ্ট
    // let [second, setSecond] = useState(0)
    // let [minute, setMinute] = useState(0)
    // let [hour, setHour] = useState(0)


    
            // setMiliSecond(prevMilisec=>{
            //     const updatedMiliSec = prevMilisec+1
            //         if(updatedMiliSec===100){
            //             setMiliSecond(0)
            //             setSecond(prevSecond =>{
            //                 const Updatedecond = prevSecond+.5 // মিলি সেকেন্ড থেকে শুরু করলে সেসেন্ড ডাবল ডাবল আপডেট হচ্ছে।
            //                 if(Updatedecond==60){
            //                     setSecond(0)
            //                     setMinute(prevMinute=>{
            //                         const updatedMinute = prevMinute+1
            //                         if(updatedMinute===3){
            //                             setMinute(0)
            //                             setHour(prevHour=>{
            //                                 const updatedHour = prevHour+1
            //                                 return updatedHour  
            //                             })
                                          
            //                         }
            //                         return updatedMinute 
            //                     })
                                  
            //                 }
            //                 return Updatedecond  
            //             })
                          
            //         }
            //     return updatedMiliSec
            // })