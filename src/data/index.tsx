import Logo from '@/assets/home/Logo white.png';
import { paths } from '@/routes/paths';

//sidebaricon
import { Globe, History, Home, MessageCircleHeart, Save, Settings } from 'lucide-react';
//hero icons
import magic from '@/assets/svg/magicblack.svg';
import hand from '@/assets/svg/hand.svg';
import globe from '@/assets/svg/globe.svg';

// navbar-------------------------------------------------------------------------------------

export const navLinks = [
  {
    id: 1,
    title: 'About us',
    path: '/#about',
    link: ''
  },
  {
    id: 2,
    title: 'Features',
    path: '/#features',
    link: ''
  },
  {
    id: 3,
    title: 'Blogs',
    path: '/#blogs',
    link: ''
  },
  {
    id: 4,
    title: 'Contact',
    path: '/contact-us',
    link: ''
  }
];

//hero------------------------------------------------------------------------------------------
export const heroData = [
  {
    id: 1,
    title: 'Easy to use dashboard',
    description:
      'Enter your promy and let AI help to find the best and the quickest Explore and socialize with community',
    icon: magic
  },
  {
    id: 2,
    title: 'Socializing with community memmbers',
    description:
      'Enter your promy and let AI help to find the best and the quickest Explore and socialize with community',
    icon: hand
  },
  {
    id: 3,
    title: 'Share blogs and promts',
    description:
      'Enter your promy and let AI help to find the best and the quickest Explore and socialize with community',
    icon: globe
  }
];

// footer -------------------------------------------------------------------------------------
export const footerData = {
  logo: {
    src: Logo,
    alt: 'Quick Journey',
    title: 'Quick Journey',
    description: 'Make your quick journey with us'
  },
  sections: [
    {
      title: 'Links',
      items: [
        { text: 'About us', path: '/#about' },
        { text: 'Feature', path: '/#features' },
        { text: 'Sign up', path: paths.auth.login },
        { text: 'Log in', path: paths.auth.login }
      ]
    },
    {
      title: 'Resources',
      items: [
        { text: 'Blogs', path: paths.guest.blog },
        { text: 'Contact us', path: paths.guest.contact },
        { text: 'Privacy and Policy', path: paths.guest.privacy }
      ]
    },
    {
      title: 'Company',
      items: [
        { text: 'contact@quick-journey.com', path: 'contact@quick-journey.com' },
        { text: 'Linkedin', path: 'https://www.linkedin.com/company/quickjourney/' }
      ]
    }
  ],
  copyright: '© 2024 Quick Journey. All rights Reserved.'
};

// PrivacyPolicy -------------------------------------------------------------------------------------

export const privacyPolicyData = [
  {
    title: 'Acceptance of Terms',
    text: 'Lorem ipsum dolor sit amet consectetur. Morbi lorem quisquam nullam Semper sed qualque'
  },
  {
    title: 'Information we collect',
    text: 'Lorem ipsum dolor sit amet consectetur. Morbi litiorem quisquam nullam Sempersed pellentesque usted volutpat quamnal.',
    bulletPoints: [
      '■ Malamus neque una quan',
      '■ Mala mauris neque accumsan quam nis',
      '■ Malesuada volutpat es mauris neque appun'
    ]
  },
  {
    title: 'Acceptance of terms',
    text: 'Lorem ipsum dolor sit amet consectetur. Morbi quisquam nullam Semper sed pellentesque eget volutpat quamal Attrique que'
  },
  {
    title: 'Account Registration',
    text: 'Lorem ipsum dolor sit amet consectetur orbitorem quis risus quam nullam. Sempersed pellentesque eget quennial Amerique volutpat Muda volutpat eumque yes loo'
  },
  {
    title: 'Use of Services',
    text: 'Lorem ipsum dolor et consectetur. Morbi litiorem quis bus quam nullemempersed pellentesque eget volutpat Makamu'
  },
  {
    title: 'Change of Terms',
    text: 'Lorem ipsum dolor sit amet consectetur. Morbi lorem quis risus quam nulla. Sempersed pellentesque egestas dat volutpat. Malesuada quamnal. Amerique curabitur prin integr'
  },
  {
    title: 'Contact Us',
    text: 'parque accu',
    contactInfo: 'quickmey@gmail.com'
  }
];

//Dashboard-------------------------------------------------------------------------------------

export const sidebarLinks = [
  {
    id: 1,
    name: 'Home',
    link: paths.user.dashoard,
    icon: <Home />
  },
  {
    id: 2,
    name: 'Journey History',
    link: paths.user.history,
    icon: <History />
  },
  {
    id: 3,
    name: 'Saved Journey',
    link: paths.user.saved,
    icon: <Save />
  },
  {
    id: 4,
    name: 'Community',
    link: paths.user.community,
    icon: <Globe />
  },

  {
    id: 5,
    name: 'Settings',
    link: paths.user.settings,
    icon: <Settings />
  },

  {
    id: 6,
    name: 'Support',
    link: paths.user.support,
    icon: <MessageCircleHeart />
  }
];

// dashboard post -------------------------------------------------------------------------------------
