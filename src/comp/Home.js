import React, { useEffect, useState } from 'react'
import './home.css'


const Home = () => {

    const [progress, setprogress] = useState(0)

    useEffect(() => {

        if (progress < 100) {
            setTimeout(() => {
                setprogress((prev) => {
                    return prev + 1;
                })
            }, 1000)
        }

    }, [progress])

    return (
        <main>

            <h3>Progress Bar</h3>
            <div className='bar'>
                <p className='para' style={{ color: progress < 50 ? "black" : "white" }}>
                    {progress}%</p>
                <div className="progress" style={{ width: progress + "%" }}>
                </div>
            </div>
            {
                progress < 99 ? <p>Loading...</p> : <p>Complete</p>
            }

        </main>

    )
}

export default Home
