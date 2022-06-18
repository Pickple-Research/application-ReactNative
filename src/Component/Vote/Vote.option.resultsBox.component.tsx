import React from "react";
import { VoteOptionResult } from "./Vote.option.result.component";
import { VoteOptionSchema } from "src/Schema";

/**
 * 투표 결과 선택지들을 한꺼번에 보여주는 컴포넌트입니다.
 * @param voteOptions 투표 선택지 정보
 * @param selectedOptionIndexes 유저가 선택했던 선택지 인덱스들
 * @param participantsNum 총 참여자 수
 * @param result 투표 결과
 * @author 현웅
 */
export function VoteOptionResultsBox({
  voteOptions,
  selectedOptionIndexes,
  participantsNum,
  result,
}: {
  voteOptions: VoteOptionSchema[];
  selectedOptionIndexes: number[];
  participantsNum: number;
  result: number[];
}) {
  return (
    <>
      {voteOptions.map((option, index) => {
        return (
          <VoteOptionResult
            key={`${index}:${option.content}`}
            voteOption={option}
            selected={selectedOptionIndexes.includes(index)}
            ratio={
              participantsNum === 0
                ? 0
                : Math.floor((result[index] / participantsNum) * 100)
            }
            won={
              participantsNum === 0
                ? false
                : result[index] === Math.max(...result)
            }
          />
        );
      })}
    </>
  );
}
