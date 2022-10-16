import * as React from "react";
import audio from "../assets/audio/first.mp3";
import { useRef } from "react";
import { IBodyPomodoroContainer } from "../component/BodyPomodoro/BodyPomodoroContainer";

const SongPlay = <BaseProps extends IBodyPomodoroContainer>(
  Component: React.ComponentType<BaseProps>
) => {
  const AddSongPlay = (props: BaseProps) => {
    const audioRef = useRef(null);
    const playSound = (text: string) => {
      setTimeout(() => {
        alert(text);
      }, 100);
      // @ts-ignore
      audioRef.current.play();
    };

    return (
      <div>
        <audio ref={audioRef} src={audio}></audio>
        <Component {...props} playSound={playSound} />
      </div>
    );
  };
  return AddSongPlay;
};

export default SongPlay;
