import { privacyPolicyData } from '@/data';
import Navbar from '@/layout/root/navbar';
//mt-20 px-3 flex flex-col gap-y-5 sm:gap-y-6 md:gap-y-8
const PrivacyPolicy = () => {
  return (
   

    <div className="pt-8 flex flex-col justify-center  items-center gap-y-4">
      <Navbar />
      <div className="flex flex-col justify-center items-center gap-y-5 bg-muted section mt-[95px] md:mt-0">
        <div className="container mt-5 md:mt-10 -ml-[22px] md:-ml-[30px]">
          <h1 className="text-foreground text-2xl sm:text-3xl font-bold mb-4">Privacy Policy</h1>
          <p className="font-medium text-base sm:text-lg mb-4">
            Lorem ipsum dolor sit amet consectetur. Morbi elit lorem quis risus quam nullam. Semper,
            sed pellentesque nunc sit egestas nisl id sit volutpat. Malesuada volutpat eu mauris
            neque accumsan quam nisl. Amet tristique curabitur proin integer. Sed cursus at eu
            maecenas bibendum suspendisse. Pharetra non mauris diam nulla in consequat. Urna arcu
            tempus quisque sed in tristique. Neque risus tortor elementum quisque. Lectus vitae ut
            nuncpellentesque. Sed nisi interdum augue sagittis nunc pellentesque ipsum. At bibendum
            elementum pulvinar quam laoreet.
          </p>
          <ol
            className="flex flex-col gap-y-6 sm:gap-y-8 md:gap-y-8"
            style={{ listStyleType: 'decimal', color: '0, 0%, 20%, 1' }}>
            {privacyPolicyData.map((item, index) => (
              <ul key={index}>
                <h2 className="text-xl sm:text-2xl text-foreground font-semibold">{item.title}</h2>
                <p className="text-base sm:text-lg">{item.text}</p>
                {item.bulletPoints && (
                  <ul className="flex flex-col gap-y-3 sm:gap-y-4 md:gap-y-5">
                    {item.bulletPoints.map((bulletPoint, index) => (
                      <li key={index} className="text-base sm:text-lg">
                        {bulletPoint}
                      </li>
                    ))}
                  </ul>
                )}
                {item.contactInfo && <p className="text-base sm:text-lg">{item.contactInfo}</p>}
              </ul>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
