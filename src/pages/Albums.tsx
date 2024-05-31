import { useEffect, useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';

const Albums = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://blooming-sands-12721-c98e11415d2d.herokuapp.com/albums');
        const parsedData = await response.json();
        setData(parsedData);
      } catch(error) {
        console.error('Trouble fetching from albums endpoint: ', error);
      }
    }

    fetchData();
  }, [])

  return (
    <section className="max-container">
        <h1 className="text-4xl font-semibold yellow-gradient_text uppercase">
            discography
        </h1>

        <p className="text-lg font-normal text-[#ffecb4] uppercase my-8">
            taeyeon's entire discography to date.
        </p>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {data.map((album, index) => {
              <VerticalTimelineElement>
                
              </VerticalTimelineElement>
            })}
          </VerticalTimeline>
        </div>
    </section>
  )
}

export default Albums