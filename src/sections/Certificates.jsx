import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { certificates } from '../constants/index.js';

const Certificates = () => {
  return (
    <section className="c-space my-20">
      <p className="head-text">Meus Certificados</p>
      <div className="mt-5 flex flex-col gap-3">
        <VerticalTimeline>
          {certificates.map((experience) => (
            <VerticalTimelineElement
              key={experience.company_name}
              date={experience.date}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain" />
                </div>
              }
              iconStyle={{ background: experience.iconBg }}
              contentStyle={{
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                background: 'rgba(255, 255, 255, 0.05)',
                padding: '20px',
              }}>
              <div className="text-white">
                <h3 className="text-2xl font-semibold">{experience.title}</h3>
                <p className="font-medium text-white-500">{experience.company_name}</p>
                <ul className="list-disc pl-5 space-y-1 text-sm mt-4">
                  {experience.points.map((point, index) => (
                    <li key={index} className="text-white-400">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Certificates;
