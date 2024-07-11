// src/components/HomePage.js
import React, { useEffect , useRef} from 'react';
import Header from './Header';
import Navbar from './Navbar';
import bannerImage from '../assets/Homepage_pic.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cardImage from '../assets/principal.jpg'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
// Import the icons
import flexibilityIcon from '../assets/mission.png'; // Update with the actual path to your icon
import qualityIcon from '../assets/lecture.png'; // Update with the actual path to your icon
import globalIcon from '../assets/chemistry.png'; // Update with the actual path to your icon
import expertiseIcon from '../assets/open-book.png'; // Update with the actual path to your icon
import supportIcon from '../assets/political-action-committee.png'; // Update with the actual path to your icon
import certifiedIcon from '../assets/soccer-game.png'; // Update with the actual path to your icon
import galleryImage1 from '../assets/gal1.jpg';
import galleryImage2 from '../assets/gal2.jpg';
import galleryImage3 from '../assets/gal3.jpg';
import galleryImage4 from '../assets/gal4.jpg';
import galleryImage5 from '../assets/gal5.jpg';
import galleryImage6 from '../assets/gal6.jpg';
import galleryImage7 from '../assets/gal7.jpg';
import galleryImage8 from '../assets/gal8.jpg';
import galleryImage9 from '../assets/gal9.jpg';
import galleryImage10 from '../assets/gal10.jpg';

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const sliderRef = useRef();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Autoplay speed in milliseconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="relative">
      <Header />
      <Navbar />
      <div className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-10"
          style={{
            backgroundImage: `url(${bannerImage})`,
            filter: 'blur(4px)',
            animation: 'zoom-in 20s infinite alternate',
          }}
        ></div>
        <style>
          {`
            @keyframes zoom-in {
              0% {
                transform: scale(1);
              }
              100% {
                transform: scale(1.1);
              }
            }
            .green-shadow {
              box-shadow: 0 4px 6px -1px rgba(34, 197, 94, 0.4), 0 2px 4px -1px rgba(34, 197, 94, 0.4);
            }
            .slide-in-left {
              animation: slideLeft 1s forwards;
            }
            .slide-in-right {
              animation: slideRight 1s forwards;
            }
            @keyframes slideLeft {
              0% {
                transform: translateX(-100%);
                opacity: 0;
              }
              100% {
                transform: translateX(0);
                opacity: 1;
              }
            }
            @keyframes slideRight {
              0% {
                transform: translateX(100%);
                opacity: 0;
              }
              100% {
                transform: translateX(0);
                opacity: 1;
              }
            }
          `}
        </style>
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center">
          <h1 className="text-4xl md:text-4xl font-bold slide-in-right">WELCOME TO</h1>
          <h2 className="text-5xl md:text-6xl font-bold mt-4">SK Mishra Anita Ayurvedic Medical College</h2>
          <p className="mt-4 text-lg md:text-2xl slide-in-left">
            We aim to create an extraordinary school
          </p>
          <button className="mt-8 px-6 py-3 bg-green-700 hover:bg-purple-800 text-white font-semibold rounded">
            DISCOVER NOW
          </button>
        </div>
      </div>
      <div className="relative z-20 bg-white py-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-wrap -mx-6">
            <div className="w-full md:w-1/3 px-6 mb-6" data-aos="fade-up">
              <div className="flex flex-col h-full p-6 bg-white border border-gray-200 rounded-lg shadow-lg green-shadow transform transition-transform duration-300 hover:scale-105">
                <h3 className="text-2xl font-bold mb-4 text-center">Admission</h3>
                <p className="text-gray-700 flex-grow text-center">
                  The admission period of the college starts from the month of March and lasts upto July.
                </p>
                <button className="mt-6 px-4 py-2 bg-green-700 hover:bg-purple-800 text-white font-semibold rounded self-center">
                  Learn More
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-6 mb-6" data-aos="fade-up">
              <div className="flex flex-col h-full p-6 bg-white border border-gray-200 rounded-lg shadow-lg green-shadow transform transition-transform duration-300 hover:scale-105">
                <h3 className="text-2xl font-bold mb-4 text-center">Prospects</h3>
                <p className="text-gray-700 flex-grow text-center">
                  Educational pattern, educational activities, clubs, games, sports, awards, scholarships etc.
                </p>
                <button className="mt-6 px-4 py-2 bg-green-700 hover:bg-purple-800 text-white font-semibold rounded self-center">
                  Learn More
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-6 mb-6" data-aos="fade-up">
              <div className="flex flex-col h-full p-6 bg-white border border-gray-200 rounded-lg shadow-lg green-shadow transform transition-transform duration-300 hover:scale-105">
                <h3 className="text-2xl font-bold mb-4 text-center">Fee Structure</h3>
                <p className="text-gray-700 flex-grow text-center">
                  Fee Structure for various courses.
                </p>
                <button className="mt-6 px-4 py-2 bg-green-700 hover:bg-purple-800 text-white font-semibold rounded self-center">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-20 bg-white py-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="relative flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg">
            <div className="relative w-full md:w-1/3" data-aos="zoom-in">
              <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-60 h-60 bg-white p-2 rounded-lg shadow-lg">
                <img src={cardImage} alt="Principal" className="rounded-lg w-full h-full object-cover" />
              </div>
            </div>
            <div className="flex-1 mt-32 md:mt-0 md:ml-8 p-6 bg-white border border-gray-200 rounded-lg shadow-lg" data-aos="fade-up">
              <h3 className="text-3xl font-bold mb-4">PRINCIPAL MESSAGE</h3>
              <p className="text-gray-700">
                S K MISHRA ANITA AYURVEDIC MEDICAL COLLEGE, Tajpur, Gadha, Lalganj Azamgarh is being established a Under Graduate Course by Maa Vindhyavasini Sumitra Devi Educational Trust.. A beautiful herbal garden has been developed inside the campus, which is having numerous valuable medicinal plants. Our Panchakarma therapies like Vaman, Virechan, Vasti (Anuvasan sand Asthapan), Nasya, Raktamokshan, Kati Vasti, Janu Vasti, Nadi Sweda, Shirodhara, Shiro Vasti, Sastik Shali Pinda Sweda, Valuka Sweda, Sarvangadhara etc. are attracting the attention of intellectuals in which Raktamokshan (Blood letting treatment) by Multiple Vacuum Syringe Procedure is one of its novelties. Khar-Sutra Therapy, Angikarma, Jalauka-Avacharan, Yoga-therapy and physiotherapy are being applied regularly to the proper patients which bring immense miraculous results. Dept. of Kayachikitsa, Shalya, Stri Prasuti and Bal-Rog are redering the multi-dimensional services by treating the patients.
                <br />
                <br />
                PROF. (DR.) SANTANU DAS.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-20 bg-white py-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-wrap -mx-6">
            <div className="w-full md:w-1/3 px-6 mb-6" data-aos="fade-up">
              <div className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg shadow-lg green-shadow transform transition-transform duration-300 hover:scale-105">
                <img src={flexibilityIcon} alt="Flexibility" className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">AIMS & MISSION</h3>
                <p className="text-gray-700 text-center">
                To provide holistic education that nurtures scientific temper and ethical values, grooming the students .
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-6 mb-6" data-aos="fade-up">
              <div className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg shadow-lg green-shadow transform transition-transform duration-300 hover:scale-105">
                <img src={qualityIcon} alt="Quality" className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Faculty</h3>
                <p className="text-gray-700 text-center">
                We have been dedicated towards providing quality professional education through well-accredited courses.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-6 mb-6" data-aos="fade-up">
              <div className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg shadow-lg green-shadow transform transition-transform duration-300 hover:scale-105">
                <img src={globalIcon} alt="Global" className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">PIONEERS IN EXCELLENCE</h3>
                <p className="text-gray-700 text-center">
                S. K. Mishra Anita Ayurvedic Medical College was established as a result of the initiatives taken under the.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-6 mb-6" data-aos="fade-up">
              <div className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg shadow-lg green-shadow transform transition-transform duration-300 hover:scale-105">
                <img src={expertiseIcon} alt="Expertise" className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">SUBJECT COMBINATION</h3>
                <p className="text-gray-700 text-center">
                A true value based education system at S. K. Mishra Anita Ayurvedic Medical College endows the students with.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-6 mb-6" data-aos="fade-up">
              <div className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg shadow-lg green-shadow transform transition-transform duration-300 hover:scale-105">
                <img src={supportIcon} alt="Support" className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">MANAGING COMMITTEE</h3>
                <p className="text-gray-700 text-center">
                College Managing Committee consisting Administrative, Teaching, Sexual Harassment, Grievance.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-6 mb-6" data-aos="fade-up">
              <div className="flex flex-col items-center p-6 bg-white border border-gray-200 rounded-lg shadow-lg green-shadow transform transition-transform duration-300 hover:scale-105">
                <img src={certifiedIcon} alt="Certified" className="w-12 h-12 mb-4" />
                <h3 className="text-2xl font-bold mb-2">GAMES & SPORTS</h3>
                <p className="text-gray-700 text-center">
                S. K. Mishra Anita Ayurvedic Medical College has, since its inception, laid a major thrust on sports & .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-20 bg-white py-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <h2 className="text-3xl font-bold mb-8 text-center">NEWS & EVENTS</h2>
          <div className="mx-auto w-4/5">
            <div className="flex flex-wrap -mx-6 justify-center">
              <div className="w-full px-6 mb-6" data-aos="fade-slide-up">
                <div className="flex items-center p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
                  <div className="date-box bg-purple-500 text-white w-20 h-20 flex flex-col items-center justify-center rounded-lg mr-4">
                    <div className="text-2xl font-bold">06</div>
                    <div className="text-sm">Sep.18</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 slide-in-left">Eestibulum sodales metus.</h3>
                    <p className="text-gray-700 slide-in-left">When an unknown printer took a galley of type and scrambled it to make a type specimen book ...</p>
                  </div>
                </div>
              </div>
              <div className="w-full px-6 mb-6" data-aos="fade-slide-up">
                <div className="flex items-center p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
                  <div className="date-box bg-purple-500 text-white w-20 h-20 flex flex-col items-center justify-center rounded-lg mr-4">
                    <div className="text-2xl font-bold">06</div>
                    <div className="text-sm">Mar.17</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 slide-in-right">Integer faucibus nulla a ligula.</h3>
                    <p className="text-gray-700 slide-in-right">Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <div className="flex space-x-2">
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-300 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-300 rounded-full"></span>
              </div>
            </div>
          </div>
        </div>
      
      </div>
      <div className="relative z-20 bg-white py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl font-bold mb-8 text-center">GALLERY</h2>
        <Slider {...sliderSettings}>
          <div className="gallery-item px-3">
            <img
              src={galleryImage1}
              alt="Gallery 1"
              className="rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
            />
          </div>
          <div className="gallery-item px-3">
            <img
              src={galleryImage2}
              alt="Gallery 2"
              className="rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
            />
          </div>
          <div className="gallery-item px-3">
            <img
              src={galleryImage3}
              alt="Gallery 3"
              className="rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
            />
          </div>
          <div className="gallery-item px-3">
            <img
              src={galleryImage4}
              alt="Gallery 4"
              className="rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
            />
          </div>
          <div className="gallery-item px-3">
            <img
              src={galleryImage5}
              alt="Gallery 5"
              className="rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
            />
          </div>
          <div className="gallery-item px-3">
            <img
              src={galleryImage6}
              alt="Gallery 6"
              className="rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
            />
          </div>
          <div className="gallery-item px-3">
            <img
              src={galleryImage7}
              alt="Gallery 7"
              className="rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
            />
          </div>
          <div className="gallery-item px-3">
            <img
              src={galleryImage8}
              alt="Gallery 8"
              className="rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
            />
          </div>
          <div className="gallery-item px-3">
            <img
              src={galleryImage9}
              alt="Gallery 9"
              className="rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
            />
          </div>
          <div className="gallery-item px-3">
            <img
              src={galleryImage10}
              alt="Gallery 10"
              className="rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
            />
          </div>
        </Slider>
      </div>
    </div>
    </div>
  );
};

export default HomePage;
