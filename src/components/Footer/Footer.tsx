import { FC } from 'react';
import { GithubIcon } from '../common/GithubIcon';
import { RSSchoolIcon } from '../common/RSSchoolIcon';

export const Footer: FC = () => {
  return (
    <footer className="flex h-10">
      <div className="flex flex-row my-0 mx-auto px-15">
        <div className="flex flex-row px-5">
          <a href="https://github.com/Clearenough">
            <GithubIcon />
          </a>
          <a href="https://github.com/ElizabethT7">
            <GithubIcon />
          </a>
          <a href="https://github.com/myspecialspace">
            <GithubIcon />
          </a>
        </div>
        <p className="text-purple-950">&copy;2023</p>
        <div className="px-5">
          <a href="https://rs.school/react/">
            <RSSchoolIcon />
          </a>
        </div>
      </div>
    </footer>
  );
};
