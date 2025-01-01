import { useState } from 'react';
import {
  Car,
  CarProfile,
  Cat,
  Cloud,
  Clover,
  Flag,
  GithubLogo,
  Icon,
  Laptop,
  ThumbsUp,
  Trash,
} from '@phosphor-icons/react';
import JSConfetti from 'js-confetti';
import Button from './components/Button';
import useWindowSize from './hooks/useWindowResize';

interface ILink {
  title: string;
  icon: Icon;
  link: string;
}

const links: ILink[] = [
  { title: 'github', icon: GithubLogo, link: 'https://github.com/lee7198' },
  { title: 'velog', icon: Laptop, link: 'https://velog.io/@lee7198' },
  { title: 'naver blog', icon: Trash, link: 'https://blog.naver.com/lee7198' },
];

const projectLinks: ILink[] = [
  {
    title: '우연한발견',
    icon: Clover,
    link: 'https://github.com/wooyeonhan-inyeons',
  },
  {
    title: 'AWS DeepRacer',
    icon: Flag,
    link: 'https://github.com/lee7198/AWS_DeepRacer',
  },
  { title: 'JIGUME', icon: Cloud, link: 'https://www.jigume.site' },
  {
    title: 'Vehicle Detection Model (Web)',
    icon: Car,
    link: 'https://industry-client.vercel.app',
  },
  {
    title: 'THIS',
    icon: ThumbsUp,
    link: 'https://github.com/lee7198/Portfolio_client',
  },
  {
    title: '아띠클라이밍',
    icon: Cat,
    link: 'https://www.ahttyclimbing.com',
  },
  {
    title: '자율주행(ROS2)',
    icon: CarProfile,
    link: 'https://github.com/lee7198/ROS',
  },
];

function App() {
  const [wait, setWait] = useState(true);
  const windowSize = useWindowSize();

  const handleConfetti = async () => {
    const jsConfetti = new JSConfetti();
    setWait(false);
    const x = windowSize.width > 580 ? (windowSize.width > 1080 ? 30 : 25) : 5;
    await jsConfetti
      .addConfetti({
        emojis: ['🍀', '🍅', '🍀', '✨', '👍'],
        emojiSize: windowSize.width / x,
        confettiNumber: 60,
      })
      .then(() => {
        setWait(true);

        // clear element
        const element = document.getElementsByTagName('canvas');
        if (element[1]) element[1].remove();
      });
  };

  return (
    <div className="mx-auto flex w-full max-w-screen-xs select-none flex-col items-center gap-4 px-4 py-24 font-NanumNeo outline-0">
      <div className="flex flex-row gap-4">
        <h1 className="text-3xl font-black">안녕하세요!</h1>
      </div>
      <div className="w-full text-left font-thin">
        <p className="w-full overflow-hidden break-keep">
          개발 안함. <b className="font-bold">Lorem ipsum</b> dolor sit amet,
          consectetur adipisicing elit. Dicta, sunt rerum veniam culpa eum,
          eaque tempora est libero quae quaerat eius ducimus illum beatae
          temporibus voluptas unde distinctio quisquam ad?
        </p>
      </div>

      <div className="z-10 flex w-full flex-col gap-6 pt-8">
        <div className="flex flex-col gap-4">
          <h3 className="relative w-full text-center">Links</h3>
          <div className="flex flex-row flex-wrap gap-2">
            {links.map(({ title, link, icon }) => (
              <Button key={title} title={title} Img={icon} link={link} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="relative w-full text-center">Projects</h3>
          <div className="flex flex-row flex-wrap gap-2">
            {projectLinks.map(({ title, link, icon }) => (
              <Button key={title} title={title} Img={icon} link={link} />
            ))}
          </div>
        </div>

        <button
          disabled={!wait}
          type="button"
          className={`mt-4 p-3 text-sm ${!wait ? 'opacity-50' : ''} rounded-md transition-all active:scale-[99%] active:bg-zinc-300`}
          onClick={handleConfetti}
        >
          {wait ? 'Click ME!' : ':P'}
        </button>
      </div>
    </div>
  );
}

export default App;
