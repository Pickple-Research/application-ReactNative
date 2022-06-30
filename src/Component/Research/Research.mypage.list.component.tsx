import React from "react";
import { StyleSheet, StyleProp, ViewStyle } from "react-native";
import styled from "styled-components/native";
import { ResearchMypageListItem } from "src/Component/Research";
import { RadiusButton } from "src/Component/Button";
import { H1 } from "src/StyledComponents/Text";
import { ResearchSchema } from "src/Schema";
import shallow from "zustand/shallow";
import { useMypageParticipatedScreenStore } from "src/Zustand";
import { didDatePassed } from "src/Util";
import { globalStyles } from "src/Style/globalStyles";

/**
 * 마이페이지 - 스크랩/참여/업로드한 리서치 리스트입니다.
 * @author 현웅
 */
export function MypageResearchList({
  researches,
}: {
  researches: ResearchSchema;
}) {}
