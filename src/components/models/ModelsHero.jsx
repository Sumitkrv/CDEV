import { FullScreenScrollFX } from './FullScreenScrollFX';

const ModelsHero = () => {
  const sections = [
    {
      id: 'city-cruiser',
      background: '/CD EV new/blue scooty.jpg',
      mobileBackground: '/ev mob 1.png',
      leftLabel: 'Urban',
      title: 'City Cruiser',
      rightLabel: '₹89,999',
    },
    {
      id: 'sport-rider',
      background: '/CD EV new/CD 2.jpg',
      mobileBackground: '/ev mob 2.png',
      leftLabel: 'Performance',
      title: 'Sport Rider',
      rightLabel: '₹1,19,999',
    },
    {
      id: 'eco-commute',
      background: '/CD EV new/CD 2.jpg',
      mobileBackground: '/ev mob 3.png',
      leftLabel: 'Efficient',
      title: 'Eco Commute',
      rightLabel: '₹69,999',
    },
    {
      id: 'pro-max',
      background: '/CD EV new/CD 3.jpg',
      mobileBackground: '/ev mob 4.png',
      leftLabel: 'Premium',
      title: 'Pro Max',
      rightLabel: '₹1,49,999',
      objectPosition: 'center 100%',
    },
    {
      id: 'pro-max-plus',
      background: '/CD EV new/CD 4.jpg',
      mobileBackground: '/ev mob 5.png',
      leftLabel: 'Premium',
      title: 'Pro Max Plus',
      rightLabel: '₹1,69,999',
    },
  ];

  return (
    <FullScreenScrollFX sections={sections} />
  );
};

export default ModelsHero;
