'use client';

import { TextRoll } from "../../components/motion-primitives/text-roll";
import { cn } from "./utils";

export const RollText = ({children, className, transition}: {children: string, className?: string, transition: number}) => {
 return (
 <TextRoll
      className={cn('overflow-clip text-[42px]', className)}
      variants={{
        enter: {
          initial: { y: 0 },
          animate: { y: 90 },
        },
        exit: {
          initial: { y: -200 },
          animate: { y: 0 },
        },
      }}
      duration={ transition ? transition : 0.3}
      getEnterDelay={(i: number) => i * 0.05}
      getExitDelay={(i: number) => i * 0.05 + 0.05}
      transition={{
        ease: [0.175, 0.885, 0.32, 1.1],
      }}
    >
      {children}
    </TextRoll>
 )
}