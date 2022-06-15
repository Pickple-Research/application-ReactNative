import React from "react";
import { VoteOption } from "./Vote.option.component";
import { VoteOptionSchema } from "src/Schema";

/**
 * 투표 이전의 투표 선택지들을 한번에 보여주는 컴포넌트입니다.
 * @param voteOptions 선택지
 * @param selectedOptionIndexes 선택된 선택지 인덱스들
 * @param onPress 선택지 터치시 실행 함수
 * @author 현웅
 */
export function VoteOptionsBox({
  voteOptions,
  selectedOptionIndexes,
  onPress,
}: {
  voteOptions: VoteOptionSchema[];
  selectedOptionIndexes: number[];
  onPress: (index: number) => void;
}) {
  return (
    <>
      {voteOptions.map((option, index) => {
        return (
          <VoteOption
            key={`${index}:${option.content}`}
            voteOption={option}
            selected={selectedOptionIndexes.includes(index)}
            onPress={() => onPress(index)}
          />
        );
      })}
    </>
  );
}
