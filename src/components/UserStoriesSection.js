import React from 'react';
import { Carousel } from 'react-bootstrap';
import user1 from '../components/images/user/user1.avif';
import user2 from '../components/images/user/user2.avif';
import user3 from '../components/images/user/user3.avif';
import user4 from '../components/images/user/user4.jpg';

const UserStoriesSection = () => {
  const userStories = [
    {
      id: 1,
      name: "Michael Anderson",
      story: "I was skeptical at first, but the care and attention I received at this facility exceeded my expectations. The staff is incredibly compassionate and professional.",
      image: user1,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      story: "Recovering here was a transformative experience for me. The facility's state-of-the-art equipment and dedicated team helped me regain my strength and confidence.",
      image: user2,
    },
    {
      id: 3,
      name: "Emily Williams",
      story: "The environment here is so welcoming and uplifting. I never felt alone in my journey to recovery. The therapists are exceptional and genuinely care about your progress.",
      image: user3,
    },
    {
      id: 4,
      name: "Serena Williams",
      story: "This facility truly goes above and beyond. The personalized care and attention to detail made all the difference in my recovery process. I'm grateful for the support I received.",
      image: user4,
    }
  ];

  return (
    <section id="user-stories" className="mb-5 text-center text-blue">
      <h2 className="text-color">Our Patient's Remarks</h2>
      <Carousel interval={3000} pause={false} fade>
        {userStories.map((user) => (
          <Carousel.Item key={user.id}>
            <div className="d-flex justify-content-center">
              <div className="card">
                <div className="card-body text-center">
                  <img src={user.image} className="card-img-top rounded-circle" alt={user.name} 
                    style={{ width: '200px', height: '200px' }} />
                  <h5 className="mt-2">{user.name}</h5>
                  <p>{user.story}</p>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default UserStoriesSection;
