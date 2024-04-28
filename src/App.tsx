import { useState } from 'react';
import {
  Car,
  Cloud,
  Clover,
  Flag,
  GithubLogo,
  Laptop,
  Trash,
} from '@phosphor-icons/react';
import JSConfetti from 'js-confetti';
import Button from './components/Button';
import useWindowSize from './hooks/useWindowResize';

function App() {
  const [wait, setWait] = useState(true);
  const windowSize = useWindowSize();
  const jsConfetti = new JSConfetti();

  const handleConfetti = async () => {
    setWait(false);
    const x = windowSize.width > 580 ? (windowSize.width > 1080 ? 30 : 25) : 5;
    await jsConfetti
      .addConfetti({
        emojis: ['🍀', '🍅', '🍀', '✨', '👍'],
        emojiSize: windowSize.width / x,
        confettiNumber: 60,
      })
      .then(() => setWait(true));
  };

  return (
    <div className="font-NanumNeo max-w-screen-xs mx-auto flex w-full select-none flex-col items-center gap-4 px-4 py-24 outline-0">
      <div className="flex flex-row gap-4">
        <h1 className="text-3xl font-black">안녕하세요!</h1>
      </div>
      <div className="w-full text-left font-thin">
        <p className="w-full overflow-hidden break-keep">
          컴퓨터공학과 졸업했고 개발 공부하긴 했지만, 직업은 개발자가
          아니랍니다. 그래도 관심 가지고 있어요..
          <br />
          감사합니다.
        </p>
      </div>

      <div className="z-10 flex w-full flex-col gap-6 pt-8">
        <div className="flex flex-col gap-4">
          <h3 className="relative w-full text-center">Links</h3>
          <div className="flex flex-row flex-wrap gap-2">
            <Button
              title="github"
              Img={GithubLogo}
              link="https://github.com/lee7198"
            />
            <Button
              title="velog"
              Img={Laptop}
              link="https://velog.io/@lee7198"
            />
            <Button
              title="naver blog"
              Img={Trash}
              link="https://blog.naver.com/lee7198"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="relative w-full text-center">Projects</h3>
          <div className="flex flex-row flex-wrap gap-2">
            <Button
              title="우연한발견"
              Img={Clover}
              link="https://github.com/wooyeonhan-inyeons"
            />
            <Button
              title="AWS DeepRacer"
              Img={Flag}
              link="https://github.com/lee7198/AWS_DeepRacer"
            />
            <Button title="JIGUME" Img={Cloud} link="https://www.jigume.site" />

            <Button
              title="Vehicle Detection Model (Web)"
              Img={Car}
              link="https://www.jigume.site"
            />
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
